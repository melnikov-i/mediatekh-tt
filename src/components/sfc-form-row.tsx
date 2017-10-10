import * as React from 'react';
import { css } from 'aphrodite/no-important';

import SFCFormRowLabel from '@src/components/sfc-form-row-label.usage';
import SFCFormRowInput from '@src/components/sfc-form-row-input.usage';
import styles from '@src/styles/form-row-styles';
import {
  IFormRow,
  ILabelOptions,
  IInputOptions,
} from '@src/models';

export interface SFCFormRowProps {
  items: IFormRow
}

export const SFCFormRow: React.SFC<SFCFormRowProps> = (props) => {
  const { htmlId, label, type, hint } = props.items;
  const labelOptions: ILabelOptions = { htmlId, label };
  const inputOptions: IInputOptions = { htmlId, type };
  
  const middle = ( type ): JSX.Element => {
    switch ( type ) {
      case 'select': return (<div>select</div>);
      default: return <SFCFormRowInput options={inputOptions} />;
    }
  }

  return (
    <div className={css(styles.form__row)}>
      <SFCFormRowLabel options={labelOptions} />      
      { middle(type) }
      <span className="form__hint">{hint}</span>
    </div>
  );
};