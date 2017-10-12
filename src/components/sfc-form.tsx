import * as React from 'react';
import { css } from 'aphrodite/no-important';

import { IFormRow } from '@src/models';
import SFCFormRow from '@src/components/sfc-form-row.usage';
import styles from '@src/styles/form-styles';

export interface SFCFormProps {
  items: IFormRow[],
  test: string,
}

export const SFCForm: React.SFC<SFCFormProps> = (props) => {
  const { items } = props;
  const formButtonHandler = (e) => {
    console.log(new Date());
    e.preventDefault();
  }
  return (
    <form>
      {/* Поля формы */}
      {
        items.map(( item, index ) => {
          return ( <SFCFormRow key={index} formRow={item} /> );
        })
      }
      {/* Кнопка формы */}
      <div className={css(styles.formButtonWrapper)}>
        <a href="" className={css(styles.formButton)} onClick={formButtonHandler}>Добавить</a>
      </div>
    </form>
  );
}