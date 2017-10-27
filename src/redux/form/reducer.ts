import { combineReducers } from 'redux';

import {
  // IUser,
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
  // readonly userCollection: IUser[],
}

export const reducer = combineReducers<State>({
  /* Отдаем компоненту статические параметры строки */
  formRowsStaticCollection: (state = FormRowsCollection, action) => {
    return state;
  },
  
  /* Динамически изменяемые данные формы */
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
        console.log(action.payload);
        return state;
      default:
        return state;
    }
  }


  // CLEAR_FIELD,
  // ADD_USER_IN_COLLECTION,

  // filledFieldsCollection: (state = [], action) => {
  //   switch ( action.type ) {
  //     case FILLED_FIELD:
  //       /* Преобразование типов полей входных данных */
  //       const typedPayload = (payload: IFilledField): IFilledField => {
  //         const matchingValue = (htmlId: string, value: any): string | boolean | number => {
  //           switch ( htmlId ) {
  //             case 'active': return ( value == '1' ) ? true : false;
  //             case 'age': return value * 1;
  //             case 'role': return value * 1;
  //             case 'registered_on': return value * 1;
  //             default: return value + '';
  //           }
  //         }
  //         return {
  //           htmlId: payload.htmlId,
  //           isCorrect: payload.isCorrect,
  //           value: matchingValue(payload.htmlId, payload.value)
  //         };
  //       }
  //       if ( state.length != 0 ) {
  //         // state содержит данные. Есть ли среди них payload?
  //         // 1. Проверить наличие payload в state
  //         const isContain = (): {answer: boolean, index: string } => {
  //           let answer: boolean = false;
  //           let index: string = '';
  //           for ( let i in state ) {
  //             if ( state[i].htmlId == action.payload.htmlId ) {
  //               answer = true;
  //               index = i;
  //             }
  //           }
  //           return {answer, index};
  //         };
  //         const contain: {answer: boolean, index: string} = isContain();
          
  //         if ( contain.answer ) {
  //           /* В state есть payload */
  //           let current: IFilledField[] = state.map((e, i) => {
  //             if ( i == contain.index )
  //               return typedPayload(action.payload);
  //             return e;
  //           });
  //           return current;
  //         } else {
  //           /* В state нет payload, добавить */
  //           return [...state, typedPayload(action.payload)];
  //         }
  //       } else {
  //         // state - пустой массив. Добавление к нему payload
  //         return [...state, typedPayload(action.payload)];
  //       }
  //     case CLEAR_FIELD:
  //       return [];
  //     default:
  //       return state;
  //   }
  // },
  // userCollection: (state = [], action) => {
  //   switch ( action.type ) {
  //     case ADD_USER_IN_COLLECTION:
  //       return [...state, action.payload];
  //     default: 
  //       return state;
  //   }
  // },
});