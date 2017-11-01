import { createSelector } from 'reselect';

import { RootState } from '@src/redux';
import {
  // IUser,
  ISelectModel,
  // ISortingParamsModel,
} from '@src/models';

const tableHeadCollection = 
( state: RootState ) => state.table.tableHeadCollection;

const userCollection =
( state: RootState ) => state.table.userCollection;

const roleSelectCollection =
( state: RootState ) => state.table.roleSelectCollection;

const activeSelectCollection =
( state: RootState ) => state.table.activeSelectCollection;

const sortingParams =
( state: RootState ) => state.table.sortingParams;

export const sortingParamsSelector = createSelector(
  [ sortingParams ],
  ( sortingParams ) => sortingParams
);

export const tableHeadCollectionSelector = createSelector(
  [ tableHeadCollection ],
  ( tableHeadCollection ) => tableHeadCollection
);

export const userCollectionSelector = createSelector(
  [ userCollection ],
  ( userCollection ) => userCollection
    
    // const booleanComparison = ( a: boolean, b: boolean ): boolean => {
    //   if ( b ) return a;
    //   else return true;
    // }

    // const stringComparison = (a: string, b: string): boolean => {
    //   const endOfWhile: number = ( a.length < b.length ) ? a.length : b.length;
    //   let i: number = 0;
    //   while ( i < endOfWhile ) {
    //     if ( a[i] == b[i] ) {
    //       i++;
    //     } else {
    //       if ( a[i] < b[i] ) return true;
    //       else return false;
    //     }
    //   }
    //   if ( a.length < b.length || a.length == b.length ) return true;
    //   else return false;
    // }

    // const doSort = 
    // (userCollection: IUser[], sortingParams: ISortingParamsModel, callback): IUser[] => {
    //   const { field, direction } = sortingParams;
    //   let newUserCollection: IUser[] = userCollection;
    //   let i: number = 0;
    //   const length: number = newUserCollection.length - 1;
    //   if ( length > 0 ) {
    //     while ( i < length ) {
    //       let j: number = i + 1;
    //       const currentDirection: boolean = 
    //         callback(newUserCollection[i][field], newUserCollection[j][field]);
    //       if ( currentDirection == direction ) {
    //         i++;
    //       } else {
    //         if ( newUserCollection[i][field] != newUserCollection[j][field] ) {
    //           let tmp = newUserCollection[j];
    //           newUserCollection[j] = newUserCollection[i];
    //           newUserCollection[i] = tmp;
    //           if ( i != 0 ) {
    //             i--;
    //           } else {
    //             i++;
    //           }
    //         } else {
    //           i++;
    //         }
    //       }
    //     }
    //   }
    //   return newUserCollection;
    // };
    
  //   return doSort(
  //     doSort(userCollection, sortingParams, stringComparison),
  //     {field: 'active', direction: true},
  //     booleanComparison);
  // }
);

export const userCollectionLengthSelector = createSelector(
  [ userCollection ],
  ( userCollection ) => userCollection.length
);

export const selectOptionsCollectionSelector = createSelector(
  [ roleSelectCollection, activeSelectCollection ],
  ( roleSelectCollection, activeSelectCollection ) => {
    let role: ISelectModel | {} = {};
    let active: ISelectModel | {} = {};
    for ( let i in roleSelectCollection ) {
      role = {
        ...role,
        [i]: {
          value: roleSelectCollection[i].value,
          label: roleSelectCollection[i].label,
        } 
      };
    }
    for ( let i in activeSelectCollection ) {
      active = {
        ...active,
        [i]: {
          value: activeSelectCollection[i].value,
          label: activeSelectCollection[i].label,
        }
      }
    }
    return {role, active};
  }
);