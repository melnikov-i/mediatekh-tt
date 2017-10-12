import { combineReducers } from 'redux';

// import {
//   TEST_TYPE1,
//   TEST_TYPE2,
// } from './';

export type State = {
  readonly test: string,
}

export const reducer = combineReducers<State>({
  test: (state = 'From Reducer', action) => {
    switch ( action.type ) {
      default:
        return state;
    }
  },
});