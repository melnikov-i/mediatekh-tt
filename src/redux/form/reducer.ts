import { combineReducers } from 'redux';

import {
  TEST_TYPE1,
  TEST_TYPE2,
} from './';

export type State = {
  readonly test: string;
}

export const reducer = combineReducers<State>({
  test: (state = "", action) => {
    switch (action.type) {
      case TEST_TYPE1:
        state = "firstTest";
        break;
      case TEST_TYPE2:
        state = "secondTest";
        break;
      default:
        state = "Default";
    }
    return state;
  },
});