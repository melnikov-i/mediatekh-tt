import * as React from 'react';
import { css } from 'aphrodite/no-important';

import { 
  IFormRowModel,
  IFilledField,
  ISelectModel,
} from '@src/models';
import {
  SelectActiveCollection,
  SelectRoleCollection,
} from '@src/collections';
import styles from '@src/styles/form-row-styles';
import errors from '@src/styles/error-styles';

export interface SFCFormRowProps {
  items: IFormRowModel,
  filledFieldsCollection: IFilledField[],
  filledField: (payload: IFilledField) => any,
}

export const SFCFormRow: React.SFC<SFCFormRowProps> = (props) => {
  const { htmlId, label, type, regExpTemplate, hint } = props.items;
  const { filledFieldsCollection, filledField } = props;
  const error: JSX.Element = (
    <span className={css(errors.errorMessage)}>
      Ошибка! Нет информации о поле.
    </span>
  );
  
  interface ICustomParams {
    borderStyle: {},
    hintContainer: JSX.Element | null,
  }
  
  const getCustomParams = (): ICustomParams => {
    // Индекс поля коллекции заполненных полей
    let index: string = '';
    let borderStyle: {} = {};
    let hintContainer: JSX.Element | null = null;
    // если индекс поля есть в коллекции, получить этот индекс в переменную
    for ( let i in filledFieldsCollection ) {
      if ( filledFieldsCollection[i].htmlId == htmlId ) index = i;
    }
    // индекс получен или по умолчанию. Выполнение действия над рамкой поля.
    if ( index !== '' ) {
      if ( filledFieldsCollection[index].isCorrect ) {
        /* Поле заполнено верно */
        borderStyle = styles.formInputGreen;
        hintContainer =  null;
      }
      else {
        /* Поле заполнено неверно */
        borderStyle = styles.formInputRed;
        hintContainer = (<span className={css(styles.formHint)}>{hint}</span>);
      }
    } else {
      /* Поле не активировалось */
      borderStyle = styles.formInputDefault;
    }
    return {borderStyle, hintContainer};
  };

  const customParams: ICustomParams = getCustomParams();

  const fieldHandler = (e) => {
    if ( regExpTemplate.test(e.target.value) ) {
      filledField({ htmlId: htmlId, isCorrect: true, value: e.target.value });
    } else {
      filledField({ htmlId: htmlId, isCorrect: false, value: e.target.value });
    }
  }

  const formField = (type: string): JSX.Element => {
    switch ( type ) {
      case 'text':
        /* Поле ввода информации */
        return (
          <input
            type={type}
            className={css(styles.formInput, customParams.borderStyle)}
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
        if ( options.length != 0 ) {
          return (
            <select
              className={css(styles.formSelect, customParams.borderStyle)}
              id={htmlId}
              onBlur={fieldHandler}>
              {
                options.map((item, index) => {
                  return (
                    <option
                      key={index}
                      className={css(styles.formOption)}
                      value={item.value}>
                        {item.label}
                    </option>
                  );
                })
              }
            </select>
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
      { customParams.hintContainer }
    </div>
  );
};