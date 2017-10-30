import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

const formRowsStaticCollection =
( state: RootState ) => (
  state.form.formRowsStaticCollection
);

const formRowsDynamicCollection =
( state: RootState ) => (
  state.form.formRowsDynamicCollection
);

export const formRowsDynamicCollectionFormSelector = createSelector(
  [ formRowsDynamicCollection ],
  (formRowsDynamicCollection) => formRowsDynamicCollection
);

export const formRowsStaticCollectionSelector = createSelector(
  [ formRowsStaticCollection ],
  (formRowsStaticCollection) => formRowsStaticCollection
);