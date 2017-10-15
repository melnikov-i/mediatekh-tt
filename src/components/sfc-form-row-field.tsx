import * as React from 'react';
import { css } from 'aphrodite/no-important';

import {
  IFieldOptionsModel,
  ISelectModel,
  ISelectProperties,
} from '@src/models';
import {
  SelectActiveCollection,
  SelectRoleCollection,
} from '@src/collections';
import styles from '@src/styles/form-row-field-styles';
import errors from '@src/styles/error-styles';
import SFCFormRowFieldSelect from '@src/components/sfc-form-row-field-select.usage';

export interface SFCFormRowFieldProps {
  options: IFieldOptionsModel,
  changeHintDisplay: (elementName: string) => any,
  // doShowHint: () => any,
  // doHideHint: () => any,
}

export const SFCFormRowField: React.SFC<SFCFormRowFieldProps> = (props) => {
  const { htmlId, type, regExpTemplate, hint, isHintActive } = props.options;
  const { changeHintDisplay } = props;
  


  const error: JSX.Element = (
    <span className={css(errors.errorMessage)}>
      Нет информации о поле
    </span>
  );
  
  let customStyle = styles.formInputDefault; // эта строка под вопросом  

  console.log(regExpTemplate, hint); // не забудь это удалить

  const fieldHandler = (e) => {
    console.log(e.target.name);
    if ( !regExpTemplate.test(e.target.value) ) {
      changeHintDisplay(e.target.name);
      console.log(changeHintDisplay(e.target.name));
      // console.log(doShowHint());
      // doShowHint();
    }
    // else doHideHint();

    // изменить цвет рамки
    // передать в стейт ключ правильности заполнения поля

    /*
        (ячейка изменилась) ? (Правильно?) ? greenStyle : redStyle : defaultStyle
        (fieldChanged) 
                ? (isValidChange) ? styles.formInputGreen : styles.formInputRed 
                : styles.formInputDefault
    */
    // console.log(e.target.value);
    // console.log(props.options);
  }

  const showHintMessage = ():JSX.Element | null => {
    if ( isHintActive ) {
      return (<span className={css(styles.formHint)}>{hint}</span>);
    }
    return null;
  }
  
  switch ( type ) {
    case 'text':
      /* Поле ввода информации */
      const field: JSX.Element = (
        <input
          type={type}
          className={css(styles.formInput, customStyle)}
          name={htmlId}
          id={htmlId}
          onBlur={fieldHandler}
        />
      );
      return (
        <span>
          { field }
          { showHintMessage() }
        </span>
      );
    case 'select':
      /* Поле выбора значения из списка */
      const getOptions = (id: string): ISelectModel[] => {
        switch ( id ) {
          case 'active': return SelectActiveCollection;
          case 'role': return SelectRoleCollection;
          default: return [];
        }
      };
      const options = getOptions(htmlId);
      if ( options.length != 0 ) {
        const properties: ISelectProperties = { options, htmlId, }
        return (
          <span>
            <SFCFormRowFieldSelect properties={properties} />
            { showHintMessage }
          </span>
        );  
      } else {
        return error;
      }      
    default: return error;
  }
};