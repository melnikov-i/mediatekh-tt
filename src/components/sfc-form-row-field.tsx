import * as React from 'react';
import { css } from 'aphrodite/no-important';

import { IFieldOptions } from '@src/models';
import styles from '@src/styles/form-row-input-styles';

export interface SFCFormRowFieldProps {
  options: IFieldOptions,
}

export const SFCFormRowField: React.SFC<SFCFormRowFieldProps> = (props) => {
  const { htmlId, type } = props.options;
  
  switch ( type ) {
    case 'text': 
      return (
        <input
          type={type}
          className={css(styles.form__input)}
          name={htmlId}
          id={htmlId}
        />
      );
    case 'select':
      return (
        <div>select</div>
      );
    default: return <div>field</div>;
  }
};