import * as React from 'react';
import { css } from 'aphrodite/no-important';

import {
  ISelectFieldId,
  ISelectOption,
  RoleOptions,
  ActiveOptions,
} from '@src/models';
import styles from '@src/styles/form-row-field-select-styles';

export interface SFCFormRowFieldSelectProps {
  id: ISelectFieldId,
}

export const SFCFormRowFieldSelect: React.SFC<SFCFormRowFieldSelectProps> = (props) => {
  const { htmlId } = props.id;
  const getOptions = (id: string): ISelectOption[] => {
    switch ( id ) {
      case 'active': return ActiveOptions;
      case 'role': return RoleOptions;
      default: return [];
    }
  };
  const options: ISelectOption[] = getOptions(htmlId);
  return (
    <select
      className={css(styles.form__select)}
      id={htmlId}>
      {
        options.map((item, index) => {
          return (
            <option key={index} className={css(styles.form__option)} value={item.value}>
              {item.label}
            </option>
          );
        })
      }
    </select>
  );
};