import { combineReducers } from 'redux';

/* Импорт интерфейсов */
import {
  IUser,
  ITableRow,
  ISelectModel,
  ISortingParamsModel,
  IFormRowsDynamicParamsModel,
} from '@src/models';

/* Импорт статических данных таблицы */
import {
  TableHeadCollection,
  RoleSelectOptions,
  ActiveSelectOptions,
} from '@src/collections';

import {
  ADD_FILLED_FIELDS_IN_USER_COLLECTION,
  ADD_SORTING_PARAMS,
} from './';

export type State = {
  readonly tableHeadCollection: ITableRow,
  readonly roleSelectCollection: ISelectModel[],
  readonly activeSelectCollection: ISelectModel[],
  readonly userCollection: IUser[],
  readonly sortingParams: ISortingParamsModel,
}


export const reducer = combineReducers<State>({
  tableHeadCollection: ( state = TableHeadCollection ) => state,
  roleSelectCollection: ( state = RoleSelectOptions ) => state,
  activeSelectCollection: ( state = ActiveSelectOptions ) => state,

  userCollection: ( state = [], action ) => {
    switch ( action.type ) {
      case ADD_FILLED_FIELDS_IN_USER_COLLECTION:
        const typingPayload = 
        (payload: IFormRowsDynamicParamsModel) => {
          return {
            first_name: payload['first_name'].value,
            last_name: payload['last_name'].value,
            active: ( payload['active'].value == '1' ) ? true : false,
            age: Number(payload['age'].value),
            login: payload['login'].value,
            password: payload['password'].value,
            role: Number(payload['role'].value),
            registered_on: new Date().valueOf(),
          }
        };
        return [
          ...state,
          typingPayload(action.payload),
        ];
      default:
        return state;
    }
  },

  sortingParams: ( state = {field: 'login', direction: true}, action ) => {
    switch ( action.type ) {
      case ADD_SORTING_PARAMS:
        return {...action.payload};
      default:
        return state;
    }
  },
})