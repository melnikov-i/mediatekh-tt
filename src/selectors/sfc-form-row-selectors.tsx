import { createSelector } from 'reselect';

import { RootState } from '@src/redux';
import { IFormRowsStaticParamsModel } from '@src/models';

export interface SFCFormRowsDynamicSelector {
  items: IFormRowsStaticParamsModel,
}


const formRowsDynamicCollection =
( state: RootState, ownProps: SFCFormRowsDynamicSelector ) => (
  state.form.formRowsDynamicCollection[ownProps.items.id]
);

export const formRowsDynamicCollectionSelector = createSelector(
  [ formRowsDynamicCollection ],
  (formRowsDynamicCollection) => formRowsDynamicCollection
);