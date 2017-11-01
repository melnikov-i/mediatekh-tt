import {
  ISortingParamsModel,
  IFormRowsDynamicParamsModel,
} from '@src/models';

export const ADD_FILLED_FIELDS_IN_USER_COLLECTION = 
'ADD_FILLED_FIELDS_IN_USER_COLLECTION';
export const ADD_SORTING_PARAMS =
'ADD_SORTING_PARAMS';

export type Actions = {
  ADD_FILLED_FIELDS_IN_USER_COLLECTION: { 
    type: typeof ADD_FILLED_FIELDS_IN_USER_COLLECTION, 
    payload: IFormRowsDynamicParamsModel, 
  },
  ADD_SORTING_PARAMS: {
    type: typeof ADD_SORTING_PARAMS,
    payload: ISortingParamsModel,
  }
};

// Action Creators
export const actionCreators = {
  addFilledFieldsInUserCollection: 
  ( payload: IFormRowsDynamicParamsModel ): 
  Actions[typeof ADD_FILLED_FIELDS_IN_USER_COLLECTION] => ({
    type: ADD_FILLED_FIELDS_IN_USER_COLLECTION, payload,
  }),
  addSortingParams:
  ( payload: ISortingParamsModel ):
  Actions[typeof ADD_SORTING_PARAMS] => ({
    type: ADD_SORTING_PARAMS, payload,
  }),
};