// import { IFormRowsDynamicParamsModel } from '@src/models';
// import { IFilledField, IUser } from '@src/models';

export const ADD_VALUE_INTO_DYNAMIC_COLLECTION = 'ADD_VALUE_INTO_DYNAMIC_COLLECTION'; // SFCFormRow dispatch form value
// export const FILLED_FIELD = 'FILLED_FIELD';
// export const CLEAR_FIELD = 'CLEAR_FIELD';
// export const ADD_USER_IN_COLLECTION = 'ADD_USER_IN_COLLECTION';

export type Actions = {
  ADD_VALUE_INTO_DYNAMIC_COLLECTION: { type: typeof ADD_VALUE_INTO_DYNAMIC_COLLECTION, payload: {id: string, value: string} }
  // FILLED_FIELD: { type: typeof FILLED_FIELD, payload: IFilledField },
  // CLEAR_FIELD: { type: typeof CLEAR_FIELD },
  // ADD_USER_IN_COLLECTION: { type: typeof ADD_USER_IN_COLLECTION, payload: IUser },
};

// Action Creators
export const actionCreators = {
  addValueIntoDynamicCollection: ( payload: {id: string, value: string} ): Actions[typeof ADD_VALUE_INTO_DYNAMIC_COLLECTION] => ({
    type: ADD_VALUE_INTO_DYNAMIC_COLLECTION, payload,
  }),
  // filledField: ( payload: IFilledField ): Actions[typeof FILLED_FIELD] => ({
  //   type: FILLED_FIELD, payload,
  // }),
  // clearField: (): Actions[typeof CLEAR_FIELD] => ({
  //   type: CLEAR_FIELD,
  // }),
  // addUserInCollection: ( payload: IUser ): Actions[typeof ADD_USER_IN_COLLECTION] => ({
  //   type: ADD_USER_IN_COLLECTION, payload,
  // }),
}