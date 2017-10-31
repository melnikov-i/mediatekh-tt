import { IFormRowsDynamicParamsModel } from '@src/models';

export const ADD_FILLED_FIELDS_IN_USER_COLLECTION = 
'ADD_FILLED_FIELDS_IN_USER_COLLECTION';
export const SORTING_FIELDS_IN_USER_COLLECTION =
'SORTING_FIELDS_IN_USER_COLLECTION';

export type Actions = {
  ADD_FILLED_FIELDS_IN_USER_COLLECTION: { 
    type: typeof ADD_FILLED_FIELDS_IN_USER_COLLECTION, 
    payload: IFormRowsDynamicParamsModel, 
  },
  SORTING_FIELDS_IN_USER_COLLECTION: {
    type: typeof SORTING_FIELDS_IN_USER_COLLECTION,
    payload: any,
  }
};

// Action Creators
export const actionCreators = {
  addFilledFieldsInUserCollection: 
  ( payload: IFormRowsDynamicParamsModel ): 
  Actions[typeof ADD_FILLED_FIELDS_IN_USER_COLLECTION] => ({
    type: ADD_FILLED_FIELDS_IN_USER_COLLECTION, payload,
  }),
  doSortingAFieldsInUserCollection:
  ( payload: any ):
  Actions[typeof SORTING_FIELDS_IN_USER_COLLECTION] => ({
    type: SORTING_FIELDS_IN_USER_COLLECTION, payload,
  }),
};