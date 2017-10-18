import { combineReducers } from 'redux';

import { IFilledField, IUser } from '@src/models';

import {
  FILLED_FIELD,
  ADD_USER_IN_COLLECTION,
} from './';

export type State = {
  readonly filledFieldsCollection: IFilledField[], // заполненые поля
  readonly userCollection: IUser[],
}

export const reducer = combineReducers<State>({
  filledFieldsCollection: (state = [], action) => {
    switch ( action.type ) {
      case FILLED_FIELD:
        if ( state.length != 0 ) {
          // state содержит данные. Есть ли среди них payload?
          // 1. Проверить наличие payload в state
          const isContain = (): {answer: boolean, index: string } => {
            let answer: boolean = false;
            let index: string = '';
            for ( let i in state ) {
              if ( state[i].htmlId == action.payload.htmlId ) {
                answer = true;
                index = i;
              }
            }
            return {answer, index};
          };
          const contain: {answer: boolean, index: string} = isContain();
          if ( contain.answer ) {
            /* В state есть payload */
            let current: IFilledField[] = state.map((e, i) => {
              if ( i == contain.index )
                return action.payload;
              return e;
            });
            return current;
          } else {
            /* В state нет payload, добавить */
            return [...state, action.payload];
          }
        } else {
          // state - пустой массив. Добавление к нему payload
          return [...state, action.payload];
        }        
      default:
        return state;
    }
  },
  userCollection: (state = [], action) => {
    switch ( action.type ) {
      case ADD_USER_IN_COLLECTION:
        return [...state, action.payload];
      default: 
        return state;
    }
  },
});