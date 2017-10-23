import { IFilledField, IUser } from '@src/models';

export const FILLED_FIELD = 'FILLED_FIELD';
export const CLEAR_FIELD = 'CLEAR_FIELD';
export const ADD_USER_IN_COLLECTION = 'ADD_USER_IN_COLLECTION';

export type Actions = {
  FILLED_FIELD: { type: typeof FILLED_FIELD, payload: IFilledField },
  CLEAR_FIELD: { type: typeof CLEAR_FIELD },
  ADD_USER_IN_COLLECTION: { type: typeof ADD_USER_IN_COLLECTION, payload: IUser },
};

// Action Creators
export const actionCreators = {
  filledField: ( payload: IFilledField ): Actions[typeof FILLED_FIELD] => ({
    type: FILLED_FIELD, payload,
  }),
  clearField: (): Actions[typeof CLEAR_FIELD] => ({
    type: CLEAR_FIELD,
  }),
  addUserInCollection: ( payload: IUser ): Actions[typeof ADD_USER_IN_COLLECTION] => ({
    type: ADD_USER_IN_COLLECTION, payload,
  }),
}