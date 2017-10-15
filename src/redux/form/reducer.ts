import { combineReducers } from 'redux';

import {
  CHANGE_HINT_DISPLAY,
} from './';

export type State = {
  readonly hintCollection: string[],
}

export const reducer = combineReducers<State>({
  hintCollection: (state = [], action) => {
    switch ( action.type ) {
      case CHANGE_HINT_DISPLAY:
        return [...state, action.payload];
      default:
        return state;
    }
  },
});