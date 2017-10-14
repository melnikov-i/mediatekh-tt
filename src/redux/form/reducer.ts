import { combineReducers } from 'redux';

// import {
//   TEST_TYPE1,
//   TEST_TYPE2,
// } from './';

export type State = {
  readonly isHintActive: boolean,
}

export const reducer = combineReducers<State>({
  isHintActive: (state = false, action) => {
    switch ( action.type ) {
      default:
        return state;
    }
  },
});