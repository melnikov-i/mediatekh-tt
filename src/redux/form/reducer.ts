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
        return newState;
    }
  },
});