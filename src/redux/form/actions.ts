import {
  IFormRowsDynamicDispatchModel,
} from '@src/models';

export const ADD_VALUE_IN_DYNAMIC_COLLECTION = 
'ADD_VALUE_IN_DYNAMIC_COLLECTION';
export const CLEAR_DYNAMIC_COLLECTION =
'CLEAR_DYNAMIC_COLLECTION';

export type Actions = {
  ADD_VALUE_IN_DYNAMIC_COLLECTION: { 
    type: typeof ADD_VALUE_IN_DYNAMIC_COLLECTION, 
    payload: IFormRowsDynamicDispatchModel,
  },
  CLEAR_DYNAMIC_COLLECTION: {
    type: typeof CLEAR_DYNAMIC_COLLECTION,
  },
};

// Action Creators
export const actionCreators = {
  addValueInDynamicCollection: 
  ( payload: {id: string, value: string} ): 
  Actions[typeof ADD_VALUE_IN_DYNAMIC_COLLECTION] => ({
    type: ADD_VALUE_IN_DYNAMIC_COLLECTION, payload,
  }),
  clearDynamicCollection: (): Actions[typeof CLEAR_DYNAMIC_COLLECTION] => ({
    type: CLEAR_DYNAMIC_COLLECTION,
  }),
}