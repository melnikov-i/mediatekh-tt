import { IUser } from '@src/models';

export const ADD_USER_TO_ROWS = 'ADD_USER_TO_ROWS';

export type Actions = {
  ADD_USER_TO_ROWS: { type: typeof ADD_USER_TO_ROWS, payload: IUser[] },
};

// Action Creators
export const actionCreators = {
  addUserToRows: ( payload: IUser[] ): Actions[typeof ADD_USER_TO_ROWS] => ({
    type: ADD_USER_TO_ROWS, payload,
  }),
};