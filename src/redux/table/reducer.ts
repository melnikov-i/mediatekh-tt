import { combineReducers } from 'redux';

import { /*IUser,*/ ITableRow } from '@src/models';

// import {
//   ADD_USER_TO_ROWS,
// } from './';

export type State = {
  readonly tableRowsCollection: ITableRow[],
}

export const reducer = combineReducers<State>({
  tableRowsCollection: ( state = [], action ) => {
    switch (action.type) {
      default:
        return state;
    }
  }
})
