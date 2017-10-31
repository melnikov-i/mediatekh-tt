import { createSelector } from 'reselect';

import { RootState } from '@src/redux';
import {
  IUser,
  ISelectModel,
  ISortingParamsModel,
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

export const tableHeadCollectionSelector = createSelector(
  [ tableHeadCollection ],
  ( tableHeadCollection ) => tableHeadCollection
);

export const userCollectionSelector = createSelector(
  [ userCollection, sortingParams ],
  ( userCollection, sortingParams ) => {
    // switch ( sortingParams.field ) {
    //   case: 
    // }

    const stringComparison = (a: string, b: string): boolean => {
      const endOfWhile: number = ( a.length < b.length ) ? a.length : b.length;
      let i: number = 0;
      while ( i < endOfWhile ) {
        if ( a[i] == b[i] ) {
          i++;
        } else {
          if ( a[i] < b[i] ) return true;
          else return false;
        }
      }
      if ( a.length < b.length || a.length == b.length ) return true;
      else return false;
    }

    const doSort = 
    (userCollection: IUser[], sortingParams: ISortingParamsModel, callback): IUser[] => {
      const { field, direction } = sortingParams;
      // const length: number = userCollection.length;
      if ( length > 0 ) {
        while ( i < length ) {
          console.log('userCollection[0][field]:', userCollection[0][field]);
          console.log('userCollection[1][field]:', userCollection[1][field]);
          console.log('userCollection[2][field]:', userCollection[2][field]);
          let i: number = 0;
          let j: number = i + 1;
          const currentDirection: boolean = 
            callback(userCollection[i][field], userCollection[j][field]);
          console.log('i:', i, 'j:', j, 'currentDirection:', currentDirection);
          console.log('userCollection[i][field]:', userCollection[i][field]);
          console.log('userCollection[j][field]:', userCollection[j][field]);
          if ( currentDirection == direction ) {
            console.log('i++');
            i++;
          } else {
            if ( userCollection[i][field] != userCollection[j][field] ) {
              let tmp = userCollection[j];
              userCollection[j] = userCollection[i];
              userCollection[i] = tmp;
              if ( i != 0 ) {
                i--;}
            } else {
              i++;
            }
          }
        }
      }
      return userCollection;
    };
    
    doSort(userCollection, sortingParams, stringComparison);
    
    return userCollection;
  }
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