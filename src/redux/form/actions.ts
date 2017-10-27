import { IFormRowsDynamicDispatchModel } from '@src/models';

export const ADD_VALUE_IN_DYNAMIC_COLLECTION = 'ADD_VALUE_IN_DYNAMIC_COLLECTION'; // SFCFormRow dispatch form value
export const ADD_FILLED_FIELDS_IN_USER_COLLECTION = 'ADD_FILLED_FIELDS_IN_USER_COLLECTION';

export type Actions = {
  ADD_VALUE_IN_DYNAMIC_COLLECTION: { type: typeof ADD_VALUE_IN_DYNAMIC_COLLECTION, payload: IFormRowsDynamicDispatchModel },
  ADD_FILLED_FIELDS_IN_USER_COLLECTION: { type: typeof ADD_FILLED_FIELDS_IN_USER_COLLECTION, payload: boolean },
};

// Action Creators
export const actionCreators = {
  addValueInDynamicCollection: ( payload: {id: string, value: string} ): Actions[typeof ADD_VALUE_IN_DYNAMIC_COLLECTION] => ({
    type: ADD_VALUE_IN_DYNAMIC_COLLECTION, payload,
  }),
  addFilledFieldsInUserCollection: ( payload: boolean ): Actions[typeof ADD_FILLED_FIELDS_IN_USER_COLLECTION] => ({
    type: ADD_FILLED_FIELDS_IN_USER_COLLECTION, payload,
  }),

}



// import { IFilledField, IUser } from '@src/models';

// export const FILLED_FIELD = 'FILLED_FIELD';
// export const CLEAR_FIELD = 'CLEAR_FIELD';
// export const ADD_USER_IN_COLLECTION = 'ADD_USER_IN_COLLECTION';

// from type Actions = {
//     // FILLED_FIELD: { type: typeof FILLED_FIELD, payload: IFilledField },
//   // CLEAR_FIELD: { type: typeof CLEAR_FIELD },
//   // ADD_USER_IN_COLLECTION: { type: typeof ADD_USER_IN_COLLECTION, payload: IUser },
// }

// from actionCreators = {
    // filledField: ( payload: IFilledField ): Actions[typeof FILLED_FIELD] => ({
  //   type: FILLED_FIELD, payload,
  // }),
  // clearField: (): Actions[typeof CLEAR_FIELD] => ({
  //   type: CLEAR_FIELD,
  // }),
  // addUserInCollection: ( payload: IUser ): Actions[typeof ADD_USER_IN_COLLECTION] => ({
  //   type: ADD_USER_IN_COLLECTION, payload,
  // }),
// }