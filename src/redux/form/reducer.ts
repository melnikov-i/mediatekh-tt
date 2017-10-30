import { combineReducers } from 'redux';

import {
  IUser,
  IFormRowsStaticParamsModel, // Импорт модели статических данных формы
  IFormRowsDynamicParamsModel, // Импорт модели динамических данных формы
} from '@src/models';

/* Импорт статических данных формы */
import { FormRowsCollection } from '@src/collections';

/* Временный импорт шаблона */
import { UserCollectionTemplate } from '@src/collections/template';

import {
  ADD_VALUE_IN_DYNAMIC_COLLECTION,
  ADD_FILLED_FIELDS_IN_USER_COLLECTION,
  SORTING_FIELDS_IN_USER_COLLECTION,
} from './';

export type State = {
  readonly formRowsStaticCollection: IFormRowsStaticParamsModel[], // Статические данные формы
  readonly formRowsDynamicCollection: IFormRowsDynamicParamsModel, // Динамические данные формы
  readonly userCollection: IUser[],
}

export const reducer = combineReducers<State>({
  /* Статические параметры строки формы */
  formRowsStaticCollection: (state = FormRowsCollection, action) => {
    console.log('formRowsStaticCollection:', state);
    return state;
  },
  
  /* Динамически изменяемые данные строки формы */
  formRowsDynamicCollection: (state = {}, action) => {
    switch ( action.type ) {
      case ADD_VALUE_IN_DYNAMIC_COLLECTION:
        return {
          ...state,
          [action.payload.id]: {
            value: action.payload.value,
            isCorrect: action.payload.isCorrect,
          }
        };
      default:
        let newState:IFormRowsDynamicParamsModel = {};
        for ( let i in FormRowsCollection ) {
          let defaultValue: string = '';
          switch ( FormRowsCollection[i].id ) {
            case 'active': defaultValue = '1'; break;
            case 'role': defaultValue = '0'; break;
          }
          newState = {
            ...newState,
            [FormRowsCollection[i].id]: {
              value: defaultValue,
              isCorrect: undefined,  
            },
          };
        }
        console.log('formRowsDynamicCollection:', newState);
        return newState;
    }
  },

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
      case SORTING_FIELDS_IN_USER_COLLECTION:
        // const doSorting = () => {

        // }
        return state;
      default:
        console.log('userCollection State:', state);
        return state;
    }
  }
});