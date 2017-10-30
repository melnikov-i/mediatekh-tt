/* Импорт библиотек */
import * as React from 'react';
import { css } from 'aphrodite/no-important';

import {
  ITableRow,
} from '@src/models';

/* Импорт стилей */
import styles from '@src/styles/table-styles';

export interface SFCTableHeadProps {
  tableHeadCollection: ITableRow,
}

export const SFCTableHead: React.SFC<SFCTableHeadProps> = (props) => {
  const { tableHeadCollection } = props;
  
  const handlerUp = (e) => {
    e.preventDefault();
    console.log('sortingUp:', 
      e.currentTarget.parentNode.previousSibling.previousSibling);
  }

  const handlerDown = (e) => {
    e.preventDefault();
    console.log('sortingDown:', 
      e.currentTarget.parentNode.parentNode.textContent);
  }

  return (
    <thead>
      {
        tableHeadCollection.map((item, index) => {
          return (
            <td key={index} className={css(styles.tableCell)}>
              {item}
              <a href="">
                <span
                  className={css(styles.tableSortUp)}
                  onClick={handlerUp}></span>
              </a>
              <a href="">
                <span 
                  className={css(styles.tableSortDown)}
                  onClick={handlerDown}></span>
              </a>
            </td>
          );
        })
      }
    </thead>
  );
}