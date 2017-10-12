import * as React from 'react';
import { css } from 'aphrodite/no-important';

import { ISelectProperties } from '@src/models';
import styles from '@src/styles/form-row-field-select-styles';

export interface SFCFormRowFieldSelectProps {
  properties: ISelectProperties,
}

export const SFCFormRowFieldSelect: React.SFC<SFCFormRowFieldSelectProps> = (props) => {
  const { options, htmlId } = props.properties;
  const selectHandler = (e) => {
    console.log(e);
  }
  return (
    <select
      className={css(styles.formSelect)}
      id={htmlId}
      onBlur={selectHandler}>
      {
        options.map((item, index) => {
          return (
            <option key={index} className={css(styles.formOption)} value={item.value}>
              {item.label}
            </option>
          );
        })
      }
    </select>
  );
};