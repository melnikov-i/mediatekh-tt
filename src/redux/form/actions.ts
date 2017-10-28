import {
  IFormRowsDynamicDispatchModel,
  IFormRowsDynamicParamsModel,
} from '@src/models';

export const ADD_VALUE_IN_DYNAMIC_COLLECTION = 
'ADD_VALUE_IN_DYNAMIC_COLLECTION';
export const ADD_FILLED_FIELDS_IN_USER_COLLECTION = 
'ADD_FILLED_FIELDS_IN_USER_COLLECTION';

export type Actions = {
  ADD_VALUE_IN_DYNAMIC_COLLECTION: { 
    type: typeof ADD_VALUE_IN_DYNAMIC_COLLECTION, 
    payload: IFormRowsDynamicDispatchModel,
  },
  ADD_FILLED_FIELDS_IN_USER_COLLECTION: { 
    type: typeof ADD_FILLED_FIELDS_IN_USER_COLLECTION, 
    payload: IFormRowsDynamicParamsModel, 
  },
};

// Action Creators
export const actionCreators = {
  addValueInDynamicCollection: 
  ( payload: {id: string, value: string} ): 
  Actions[typeof ADD_VALUE_IN_DYNAMIC_COLLECTION] => ({
    type: ADD_VALUE_IN_DYNAMIC_COLLECTION, payload,
  }),
  addFilledFieldsInUserCollection: 
  ( payload: IFormRowsDynamicParamsModel ): 
  Actions[typeof ADD_FILLED_FIELDS_IN_USER_COLLECTION] => ({
    type: ADD_FILLED_FIELDS_IN_USER_COLLECTION, payload,
  }),
}