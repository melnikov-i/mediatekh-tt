import * as React from 'react';

import { IFormRow } from '@src/models';
import SFCFormRow from '@src/components/sfc-form-row.usage';
import { css } from 'aphrodite/no-important';
import styles from '@src/styles/form-styles';

export interface SFCFormProps {
  items: IFormRow[],
}

export const SFCForm: React.SFC<SFCFormProps> = (props) => {
  const { items } = props;
  return (
    <form>
      {
        items.map(( item, index ) => {
          return (
            <div key={index} className={css(styles.form__row)}>
              <SFCFormRow formRow={item} />  
            </div>
          );
        })
      }
      <div className={css(styles.form__buttonWrapper)}>
        <a href="javascript:void();" className={css(styles.form__button)}>Добавить</a>
      </div>
    </form>
  );
}