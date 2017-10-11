import * as React from 'react';
import { css } from 'aphrodite/no-important';

import { IFormRow } from '@src/models';
import SFCFormRow from '@src/components/sfc-form-row.usage';
import styles from '@src/styles/form-styles';

export interface SFCFormProps {
  items: IFormRow[],
}

export const SFCForm: React.SFC<SFCFormProps> = (props) => {
  const { items } = props;
  return (
    <form>
      {/* Поля формы */}
      {
        items.map(( item, index ) => {
          return ( <SFCFormRow key={index} formRow={item} /> );
        })
      }
      {/* Кнопка формы */}
      <div className={css(styles.form__buttonWrapper)}>
        <a href="" className={css(styles.form__button)}>Добавить</a>
      </div>
    </form>
  );
}