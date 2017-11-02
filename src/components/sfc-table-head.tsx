/* Импорт библиотек */
import * as React from 'react';
import { css } from 'aphrodite/no-important';

/* Импорт интерфейсов */
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


/* Компонент */
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
    addSortingParams({
      field: getFieldName(
        e.currentTarget.parentNode.textContent.toLowerCase()),
      direction: true,
    });
  }

  const sortArrowActive = ( item: string, direction: boolean ) => {
    if ( direction === sortingParams.direction ) {
      if ( getFieldName(item.toLowerCase()) === sortingParams.field ) {
        return ( direction ) 
          ? styles.tableSortDownActive
          : styles.tableSortUpActive;
      }
      return null;
    } 
    return null;
  }
  
  if ( userCollectionLength > 1 ) {
    return (
      <tr>
        {
          tableHeadCollection.map((item, index) => {
            if ( item !== 'Active' ) {
              return (
                <td 
                  key={index}
                  className={css(
                      styles.tableCell,
                      styles[getFieldName(item.toLowerCase())],
                      styles.tableHeadCell
                    )}>
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
                <td
                  key={index}
                  className={css(
                      styles.tableCell,
                      styles[getFieldName(item.toLowerCase())],
                      styles.center
                    )}>
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
              <td
                key={index}
                className={css(
                    styles.tableCell,
                      styles[getFieldName(item.toLowerCase())]
                  )}>
                {item}
              </td>
            );
          })
        }
      </tr>
    );
  }
}