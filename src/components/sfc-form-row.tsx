import * as React from 'react';

import { IFormRow } from '@src/models';
import { css } from 'aphrodite/no-important';
import styles from '@src/styles/form-row-styles';

export interface SFCFormRowProps {
  items: IFormRow
}

export const SFCFormRow: React.SFC<SFCFormRowProps> = (props) => {
  let middle: JSX.Element;

  const { htmlId, label, type, hint } = props.items;
  
  const text: JSX.Element = (
    <input
      type={type}
      className={css(styles.form__input)}
      name={htmlId}
      id={htmlId}
    />
  );



  const select: JSX.Element = (
    <select
      className={css(styles.form__select)}
      id={htmlId}>
    
      </select>
  );

  switch ( type ) {
    case 'select': middle = select; break;
    default: middle = text;
  }

  return (
    <div className={css(styles.form__row)}>
      <label
        htmlFor={htmlId}
        className={css(styles.form__label)}>
          {label}
      </label>
      { middle }
      <span className="form__hint">{hint}</span>
    </div>
  );
};