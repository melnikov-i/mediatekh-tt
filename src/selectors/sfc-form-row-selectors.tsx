import { createSelector } from 'reselect';

import { RootState } from '@src/redux';
import { SFCFormRowConnected } from '@src/connected';

const formRowsDynamicCollection =
( state: RootState, ownProps: SFCFormRowConnected ) => (
  state.form.formRowsDynamicCollection[ownProps.items.id]
);

export const formRowsDynamicCollectionSelector = createSelector(
  [ formRowsDynamicCollection ],
  (formRowsDynamicCollection) => formRowsDynamicCollection
);