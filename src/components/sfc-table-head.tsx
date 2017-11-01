/* Импорт библиотек */
import * as React from 'react';
import { css } from 'aphrodite/no-important';

import {
  ITableRow,
  ISortingParamsModel,
} from '@src/models';

/* Импорт стилей */
import styles from '@src/styles/table-styles';

export interface SFCTableHeadProps {
  tableHeadCollection: ITableRow,
  userCollectionLength: number,
  sortingParams: ISortingParamsModel,
  addSortingParams: (payload: ISortingParamsModel) => any
}


export const SFCTableHead: React.SFC<SFCTableHeadProps> = (props) => {
  const {
    tableHeadCollection,
    userCollectionLength,
    sortingParams,
    addSortingParams,
  } = props;

  const getFieldName = (a: string): string => {
    switch ( a ) {
      case 'full name': return 'last_name';
      case 'registered on': return 'registered_on';
      default: return a;
    }
  }
  
  const handlerUp = (e) => {
    e.preventDefault();
    addSortingParams({
      field: getFieldName(
        e.currentTarget.parentNode.textContent.toLowerCase()),
      direction: false,
    });
  }

  const handlerDown = (e) => {
    e.preventDefault();
// console.log(e.currentTarget.parentNode.textContent.toLowerCase());
// console.log(getFieldName(e.currentTarget.parentNode.textContent.toLowerCase()));
    addSortingParams({
      field: getFieldName(
        e.currentTarget.parentNode.textContent.toLowerCase()),
      direction: true,
    });
  }

  const sortArrowActive = ( item: string, direction: boolean ) => {
    if ( direction === sortingParams.direction ) {
      if ( item.toLowerCase() === sortingParams.field ) {
        return ( direction ) 
          ? styles.tableSortDownActive
          : styles.tableSortUpActive;
      }
      return null;
    } 
    return null;
  }

  if ( userCollectionLength > 1 ) {
    console.log('[TABLE_HEAD]');
    return (
      <tr>
        {
          tableHeadCollection.map((item, index) => {
            if ( item !== 'Active' ) {
              return (
                <td key={index} className={css(styles.tableCell)}>
                  {item}
                  <a href="" onClick={handlerUp}>
                    <span
                      className={css(
                        styles.tableSortUp,
                        sortArrowActive(item, false))}></span>
                  </a>
                  <a href="" onClick={handlerDown}>
                    <span 
                      className={css(
                        styles.tableSortDown,
                        sortArrowActive(item, true))}></span>
                  </a>
                </td>
              );
            } else {
              return (
                <td key={index} className={css(styles.tableCell)}>
                  {item}
                </td>
              );
            }
          })
        }
      </tr>
    );
  } else {
    return (
      <tr>
        {
          tableHeadCollection.map((item, index) => {
            return (
              <td key={index} className={css(styles.tableCell)}>
                {item}
              </td>
            );
          })
        }
      </tr>
    );
  }
}