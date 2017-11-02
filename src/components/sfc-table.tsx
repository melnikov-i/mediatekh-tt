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

  /* Сравнивание двух булевых значений */
  const booleanComparison = ( a: boolean, b: boolean ): boolean => {
    if ( b ) return a;
    else return true;
  }

  /* Сравнивание двух числовых значений */
  const numberComparison = ( a: number, b: number ): boolean => {
    if ( a < b ) return true;
    else return false;
  }

  /* Сравнивание двух строковых значений */
  const stringComparison = (a: string, b: string): boolean => {
    const endOfWhile: number = ( a.length < b.length ) ? a.length : b.length;
    let i: number = 0;
    while ( i < endOfWhile ) {
      if ( a[i] === b[i] ) {
        i++;
      } else {
        if ( a[i] < b[i] ) return true;
        else {
          return false;
        }
      }
    }
    if ( a.length < b.length || a.length == b.length ) return true;
    else return false;
  }

  /* Выполнение сортировки */
  const doSort = 
  ( userCollection: IUser[], sortingParams: ISortingParamsModel, 
  type?: string ): IUser[] => {
    const { field, direction } = sortingParams;
    let newUserCollection: IUser[] = userCollection;
    let i: number = 0;
    const length: number = newUserCollection.length - 1;
    let fieldType: string = '';
    if ( length > 0 ) {
      if ( type !== 'boolean' ) {
        fieldType = typeof(newUserCollection[i][field]);
      } else {
        fieldType = 'boolean';
      }
      while ( i < length ) {
        let j: number = i + 1;
        const getCurrentDirection = ( a: any, b: any, type?: string): boolean => {
          switch ( type ) {
            case 'number': return numberComparison(a, b);
            case 'boolean': return booleanComparison(a, b);
            default: return stringComparison(a, b);
          }
        };
        const currentDirection: boolean = getCurrentDirection(
            newUserCollection[i][field],
            newUserCollection[j][field],
            fieldType
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
        doSort(userCollection, sortingParams),
        {field: 'active', direction: true},
        'boolean'
      );
    
  
  if ( userCollectionLength !== 0 ) {
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