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
}

export const SFCFormRowField: React.SFC<SFCFormRowFieldProps> = (props) => {
  const { htmlId, type, regExpTemplate, hint } = props.options;
  const error: JSX.Element = (
    <span className={css(errors.errorMessage)}>
      Нет информации о поле
    </span>
  );
  let isHintActive: boolean = false;
  let customStyle = styles.formInputDefault;
  const hintMessage: JSX.Element = (<span className={css(styles.formHint)}>{hint}</span>);
  
  console.log(regExpTemplate, hint); // не забудь это удалить

  const fieldHandler = (e) => {
    console.log(regExpTemplate.test(e.target.value));
    // проверить содержимое элемента с шаблоном регулярного выражения
    if ( regExpTemplate.test(e.target.value) ) {
      customStyle = styles.formInputGreen;
    } else {
      customStyle = styles.formInputRed;
    }
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
  
  switch ( type ) {
    case 'text':
      /* Поле ввода информации */
      return (
        <span>
          <input
            type={type}
            className={css(styles.formInput, customStyle)}
            name={htmlId}
            id={htmlId}
            onBlur={fieldHandler}
          />
          { (isHintActive) ? hintMessage : null }
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
          <SFCFormRowFieldSelect properties={properties} />
        );  
      } else {
        return error;
      }      
    default: return error;
  }
};