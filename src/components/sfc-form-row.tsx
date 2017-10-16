import * as React from 'react';
import { css } from 'aphrodite/no-important';

import { 
  IFormRowModel,
  IFilledField,
  ISelectModel,
  ISelectProperties,
} from '@src/models';
import {
  SelectActiveCollection,
  SelectRoleCollection,
} from '@src/collections';
import styles from '@src/styles/form-row-styles';
import errors from '@src/styles/error-styles';
import SFCFormRowFieldSelect from '@src/components/sfc-form-row-field-select.usage';

export interface SFCFormRowProps {
  items: IFormRowModel,
  filledFieldsCollection: IFilledField[],
  filledField: (payload: IFilledField) => any,
}

export const SFCFormRow: React.SFC<SFCFormRowProps> = (props) => {
  const { htmlId, label, type, regExpTemplate } = props.items;
  // , hint, isHintActive
  const { filledFieldsCollection, filledField } = props;

  const error: JSX.Element = (
    <span className={css(errors.errorMessage)}>
      Ошибка! Нет информации о поле.
    </span>
  );

  const customStyle = ():any => {
    // Индекс поля коллекции заполненных полей
    let index: string = '';
    // если индекс поля есть в коллекции, получить этот индекс в переменную
    for ( let i in filledFieldsCollection ) {
      if ( filledFieldsCollection[i].htmlId == htmlId ) index = i;
    }
    // индекс получен или по умолчанию. Выполнение действия над рамкой поля.
    if ( index !== '' ) {
      if ( filledFieldsCollection[index].isCorrect ) return styles.formInputGreen;
      else return styles.formInputRed;
    } else return styles.formInputDefault;
  };

  const fieldHandler = (e) => {
    if ( regExpTemplate.test(e.target.value) ) {
      filledField({ htmlId: htmlId, isCorrect: true });
      console.log('htmlId: ', htmlId);
    } else {
      filledField({ htmlId: htmlId, isCorrect: false });
      console.log('htmlId: ', htmlId);
    }
  }

  const formField = (type: string): JSX.Element => {
    switch ( type ) {
      case 'text':
        /* Поле ввода информации */
        return (
          <input
            type={type}
            className={css(styles.formInput, customStyle())}
            name={htmlId}
            id={htmlId}
            onBlur={fieldHandler}
          />
        );
      case 'select':
        /* Поле выбора значения из списка */
        const getOptions = (id: string): ISelectModel[] => {
          /* Возвращает пунткы списка выбора */
          switch ( id ) {
            case 'active': return SelectActiveCollection;
            case 'role': return SelectRoleCollection;
            default: return [];
          }
        };
        const options = getOptions(htmlId);
        const customSelectStyle = customStyle();
        if ( options.length != 0 ) {
          const properties: ISelectProperties = { options, htmlId, customSelectStyle }
          return (
            <SFCFormRowFieldSelect properties={properties} />
          );  
        } else {
          return error;
        }      
      default: return error;
    }
    
  }

  return (
    <div className={css(styles.formRow)}>
      {/* Метка поля */}
      <label
        htmlFor={htmlId}
        className={css(styles.formLabel)}>
          {label}
      </label>
      {/* Элемент формы */}
      { formField(type) }
      {/* Подсказка в случае ввода некорректных данных */}
    </div>
  );
};