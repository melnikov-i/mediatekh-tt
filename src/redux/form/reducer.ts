import { combineReducers } from 'redux';

import {
  IUser,
  IFormRowsStaticParamsModel, // Импорт модели статических данных формы
  IFormRowsDynamicParamsModel, // Импорт модели динамических данных формы
} from '@src/models';

/* Импорт статических данных формы */
import {
  FormRowsCollection,
  FormRowsDynamicCollection,
} from '@src/collections';

import {
  CLEAR_DYNAMIC_COLLECTION,
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
  formRowsDynamicCollection: (state = FormRowsDynamicCollection, action) => {
    switch ( action.type ) {
      case ADD_VALUE_IN_DYNAMIC_COLLECTION:
        return {
          ...state,
          [action.payload.id]: {
            value: action.payload.value,
            isCorrect: action.payload.isCorrect,
          }
        };
      case CLEAR_DYNAMIC_COLLECTION:
        return {...FormRowsDynamicCollection};
      default:
        return state;
    }
  },
});
