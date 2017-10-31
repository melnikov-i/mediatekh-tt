import { createSelector } from 'reselect';

import { RootState } from '@src/redux';
import { ISelectModel } from '@src/models';

const tableHeadCollection = 
( state: RootState ) => state.table.tableHeadCollection;

const userCollection =
( state: RootState ) => state.table.userCollection;

const roleSelectCollection =
( state: RootState ) => state.table.roleSelectCollection;

const activeSelectCollection =
( state: RootState ) => state.table.activeSelectCollection;

export const tableHeadCollectionSelector = createSelector(
  [ tableHeadCollection ],
  ( tableHeadCollection ) => tableHeadCollection
);

export const userCollectionSelector = createSelector(
  [ userCollection ],
  ( userCollection ) => userCollection
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