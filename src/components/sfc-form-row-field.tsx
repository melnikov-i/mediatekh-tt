import * as React from 'react';
import { css } from 'aphrodite/no-important';

import { IFieldOptions } from '@src/models';
import styles from '@src/styles/form-row-field-styles';
import SFCFormRowFieldSelect from '@src/components/sfc-form-row-field-select.usage';

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
          className={css(styles.formInput)}
          name={htmlId}
          id={htmlId}
        />
      );
    case 'select':
      return (
        <SFCFormRowFieldSelect id={{htmlId}} />
      );
    default: return <div>field</div>;
  }
};