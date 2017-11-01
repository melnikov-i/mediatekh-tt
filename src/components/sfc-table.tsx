/* Импорт библиотек */
import * as React from 'react';
import { css } from 'aphrodite/no-important';

/* Импорт интерфейсов */
import {
  IUser,
  ISortingParamsModel,
} from '@src/models';

/* Импорт стилей */
import styles from '@src/styles/table-styles';

/* Импорт дочерних компонентов */
import SFCTableHeadConnected from 
'@src/connected/sfc-table-head-connected.usage';
import SFCTableBodyConnected from 
'@src/connected/sfc-table-body-connected.usage';

export interface SFCTableProps {
  userCollection: IUser[],
  userCollectionLength: number,
  sortingParams: ISortingParamsModel,
}


/* Компонент */
export const SFCTable: React.SFC<SFCTableProps> = (props) => {
  /* Деструктуризация данных, полученных из props */
  const {
    userCollection,
    userCollectionLength,
    sortingParams,
  } = props;

  const booleanComparison = ( a: boolean, b: boolean ): boolean => {
    if ( b ) return a;
    else return true;
  }

  // const numberComparison = ( a: number, b: number ): boolean => {
  //   if ( a < b ) return true;
  //   else return false;
  // }

  const stringComparison = (a: string, b: string): boolean => {
    const endOfWhile: number = ( a.length < b.length ) ? a.length : b.length;
    let i: number = 0;
    while ( i < endOfWhile ) {
      if ( a[i] === b[i] ) {
        console.log('[a[i] === b[i]] - a[i]:', a[i], '[b[i]]:', b[i]);
        i++;
      } else {
        if ( a[i] < b[i] ) return true;
        else {
          console.log('[COMPARISON:]', a[i] > b[i], a[i], b[i]);
          return false;
        }
      }
    }
    if ( a.length < b.length || a.length == b.length ) return true;
    else return false;
  }

  const doSort = 
  ( userCollection: IUser[],
  sortingParams: ISortingParamsModel,
  callback ): IUser[] => {
    const { field, direction } = sortingParams;
    let newUserCollection: IUser[] = userCollection;
    let i: number = 0;
    const length: number = newUserCollection.length - 1;
    if ( length > 0 ) {
      while ( i < length ) {
        let j: number = i + 1;
        console.log('[newUserCollection[i][field]]:', newUserCollection[i][field]);
        const currentDirection: boolean = callback(
                                            newUserCollection[i][field],
                                            newUserCollection[j][field]
                                          );
        if ( currentDirection == direction ) {
          i++;
        } else {
          if ( newUserCollection[i][field] != newUserCollection[j][field] ) {
            let tmp = newUserCollection[j];
            newUserCollection[j] = newUserCollection[i];
            newUserCollection[i] = tmp;
            if ( i != 0 ) {
              i--;
            } else {
              i++;
            }
          } else {
            i++;
          }
        }
      }
    }
    return newUserCollection;
  };

  const sortedUserCollection = doSort(
        doSort(userCollection, sortingParams, stringComparison),
        {field: 'active', direction: true},
        booleanComparison
      );
    
  
  if ( userCollectionLength !== 0 ) {
    console.log('[TABLE]');
    return (
      <table className={css(styles.table)}>
        <thead>
          <SFCTableHeadConnected />
        </thead>
        <tbody>
          {
            sortedUserCollection.map((user, index) => (
              <SFCTableBodyConnected
                key={index}
                user={user}
              />
            ))
          }
        </tbody>
      </table>
    );
  } else {
    return null;
  }
};