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
  const { htmlId, type } = props.options;
  const error: JSX.Element = (
    <span className={css(errors.errorMessage)}>
      Нет информации о поле
    </span>
  );

  const fieldHandler = (e) => {
    /* захватить элемент, 
       проверить содержимое с шаблоном регулярного выражения, 
       изменить цвет рамки,
       передать в стейт */
    console.log(e);
  }
  
  switch ( type ) {
    case 'text':
      /* Поле ввода информации */
      return (
        <input
          type={type}
          className={css(styles.formInput)}
          name={htmlId}
          id={htmlId}
          onBlur={fieldHandler}
        />
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