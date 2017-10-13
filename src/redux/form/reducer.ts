import { combineReducers } from 'redux';

import { IFormRow } from '@src/models';


// import {
//   TEST_TYPE1,
//   TEST_TYPE2,
// } from './';

export type State = {
  readonly formRowsCollection: IFormRow[],
}

export const reducer = combineReducers<State>({
  formRowsCollection: (state = [], action) => {
    switch ( action.type ) {
      default:
        return state;
    }
  },
});