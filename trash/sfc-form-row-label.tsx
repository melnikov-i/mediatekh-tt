import * as React from 'react';
import { css } from 'aphrodite/no-important';

import styles from '@src/styles/form-row-label-styles';
import { ILabelOptions } from '@src/models';

export interface SFCFormRowLabelProps {
  options: ILabelOptions,
}

export const SFCFormRowLabel: React.SFC<SFCFormRowLabelProps> = (props) => {
  const { htmlId, label } = props.options;
  return (
    <label
      htmlFor={htmlId}
      className={css(styles.form__label)}>
        {label}
    </label>
  );
};