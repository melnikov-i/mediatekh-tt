import { combineReducers } from 'redux';

import {
  IUser,
  IFormRowsStaticParamsModel, // Импорт модели статических данных формы
  IFormRowsDynamicParamsModel, // Импорт модели динамических данных формы
} from '@src/models';

/* Импорт статических данных формы */
import { FormRowsCollection } from '@src/collections';

import {
  ADD_VALUE_IN_DYNAMIC_COLLECTION,
  ADD_FILLED_FIELDS_IN_USER_COLLECTION,
} from './';

export type State = {
  readonly formRowsStaticCollection: IFormRowsStaticParamsModel[], // Статические данные формы
  readonly formRowsDynamicCollection: IFormRowsDynamicParamsModel, // Динамические данные формы
  readonly userCollection: IUser[],
}

export const reducer = combineReducers<State>({
  /* Статические параметры строки формы */
  formRowsStaticCollection: (state = FormRowsCollection, action) => {
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
        let newState = {...state};
        for ( let i in FormRowsCollection ) {
          newState = {
            ...newState,
            [FormRowsCollection[i].id]: {
              value: '',
              isCorrect: undefined,  
            }
          }
        }
        return newState;
    }
  },

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
            registered_on: new Date(),
          }
        };
        console.log(state);
        return [
          ...state,
          typingPayload(action.payload),
        ];
      default:
        return state;
    }
  }
});