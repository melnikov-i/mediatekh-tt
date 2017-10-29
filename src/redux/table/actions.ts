import { ISelectModel } from '@src/models';

export const ADD_SELECT_OPTIONS_VALUES_TO_TABLE = 'ADD_SELECT_OPTIONS_VALUES_TO_TABLE';

export type Actions = {
  ADD_SELECT_OPTIONS_VALUES_TO_TABLE: {
    type: typeof ADD_SELECT_OPTIONS_VALUES_TO_TABLE,
    payload: {id: string, selectOptions: ISelectModel[]},
  },
};

// Action Creators
export const actionCreators = {
  addSelectOptionsValuesToTable:
  ( payload: {id: string, selectOptions: ISelectModel[]} ):
  Actions[typeof ADD_SELECT_OPTIONS_VALUES_TO_TABLE] => ({
    type: ADD_SELECT_OPTIONS_VALUES_TO_TABLE, payload,
  }),
};



// export const ADD_USER_TO_ROWS = 'ADD_USER_TO_ROWS';


  // ADD_USER_TO_ROWS: { 
  //   type: typeof ADD_USER_TO_ROWS,
  //   payload: IUser[],
  // },

// Action Creators

// addUserToRows: 
// ( payload: IUser[] ): 
// Actions[typeof ADD_USER_TO_ROWS] => ({
//   type: ADD_USER_TO_ROWS, payload,
// }),