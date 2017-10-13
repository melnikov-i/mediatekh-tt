import * as React from 'react';
import { css } from 'aphrodite/no-important';

import { 
  IFormRow, 
  IFieldOptions 
} from '@src/models';
import styles from '@src/styles/form-row-styles';
// import SFCFormRowField from '@src/components/sfc-form-row-field.usage';
import SFCFormRowFieldConnected from '@src/connected/sfc-form-row-field-connected.usage';

export interface SFCFormRowProps {
  items: IFormRow,
}

export const SFCFormRow: React.SFC<SFCFormRowProps> = (props) => {
  const { htmlId, label, type, hint } = props.items;
  const fieldOptions: IFieldOptions = { htmlId, type };
  // удали нижнюю строку!!!
  console.log(hint);

  return (
    <div className={css(styles.formRow)}>
      {/* Метка поля */}
      <label
        htmlFor={htmlId}
        className={css(styles.formLabel)}>
          {label}
      </label>
      {/* Элемент формы */}
      <SFCFormRowFieldConnected options={fieldOptions} />
    </div>
  );
};