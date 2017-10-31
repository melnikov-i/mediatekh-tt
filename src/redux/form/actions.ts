import {
  IFormRowsDynamicDispatchModel,
} from '@src/models';

export const ADD_VALUE_IN_DYNAMIC_COLLECTION = 
'ADD_VALUE_IN_DYNAMIC_COLLECTION';

export type Actions = {
  ADD_VALUE_IN_DYNAMIC_COLLECTION: { 
    type: typeof ADD_VALUE_IN_DYNAMIC_COLLECTION, 
    payload: IFormRowsDynamicDispatchModel,
  },
};

// Action Creators
export const actionCreators = {
  addValueInDynamicCollection: 
  ( payload: {id: string, value: string} ): 
  Actions[typeof ADD_VALUE_IN_DYNAMIC_COLLECTION] => ({
    type: ADD_VALUE_IN_DYNAMIC_COLLECTION, payload,
  }),
}