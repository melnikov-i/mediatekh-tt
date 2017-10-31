import { combineReducers } from 'redux';

/* Импорт интерфейсов */
import {
  IUser,
  ITableRow,
  ISelectModel,
  IFormRowsDynamicParamsModel,
} from '@src/models';

/* Импорт статических данных таблицы */
import {
  TableHeadCollection,
  RoleSelectOptions,
  ActiveSelectOptions,
} from '@src/collections';

/* Временный импорт шаблона */
import { UserCollectionTemplate } from '@src/collections/template';

import {
  ADD_FILLED_FIELDS_IN_USER_COLLECTION,
  // SORTING_FIELDS_IN_USER_COLLECTION,
} from './';

export type State = {
  readonly tableHeadCollection: ITableRow,
  readonly roleSelectCollection: ISelectModel[],
  readonly activeSelectCollection: ISelectModel[],
  readonly userCollection: IUser[],
}


export const reducer = combineReducers<State>({
  tableHeadCollection: ( state = TableHeadCollection ) => state,
  roleSelectCollection: ( state = RoleSelectOptions ) => state,
  activeSelectCollection: ( state = ActiveSelectOptions ) => state,

  userCollection: ( state = UserCollectionTemplate/*[]*/, action ) => {
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
            registered_on: new Date(),
          }
        };
        return [
          ...state,
          typingPayload(action.payload),
        ];
      // case SORTING_FIELDS_IN_USER_COLLECTION:
        // const doSorting = () => {

        // }
        // return state;
      default:
        return state;
    }
  }  
})