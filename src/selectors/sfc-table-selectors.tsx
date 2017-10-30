import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

const tableHeadCollection = 
( state: RootState ) => state.table.tableHeadCollection;

const userCollection =
( state: RootState ) => state.form.userCollection;

const options =
( state ) => state.table.selectOptionsCollection;


export const tableHeadCollectionSelector = createSelector(
  [ tableHeadCollection ],
  ( tableHeadCollection ) => tableHeadCollection
);

export const userCollectonSelector = createSelector(
  [ userCollection ],
  ( userCollection ) => userCollection
);

export const optionsSelector = createSelector(
  [ options ],
  ( options ) => options
);