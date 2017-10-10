import * as React from 'react';
import { css } from 'aphrodite/no-important';

import styles from '@src/styles/form-row-input-styles';
import { IInputOptions } from '@src/models';


export interface SFCFormRowInputProps {
  options: IInputOptions,
}

export const SFCFormRowInput: React.SFC<SFCFormRowInputProps> = (props) => {
  const { type, htmlId } = props.options;
  return (
    <input
      type={type}
      className={css(styles.form__input)}
      name={htmlId}
      id={htmlId}
    />
  );
}