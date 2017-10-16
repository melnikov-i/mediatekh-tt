import { combineReducers } from 'redux';

import { IFilledField } from '@src/models';

import {
  FILLED_FIELD,
} from './';

export type State = {
  readonly filledFieldsCollection: IFilledField[],
}

export const reducer = combineReducers<State>({
  filledFieldsCollection: (state = [], action) => {
    switch ( action.type ) {
      case FILLED_FIELD:
        
        // for ( let item of state ) {
        //   if ( item.htmlId === action.payload.htmlId ) {
        //     const htmlId: string = action.payload.htmlId;
        //     const isCorrect: boolean = action.payload.isCorrect;
        //     return [...[{htmlId, isCorrect}]];
        //   } else {
        //     return [...state, action.payload];
        //   }
        // }

        let index: string = '';
        for ( let i in state ) {
          if ( state[i].htmlId == action.payload.htmlId ) index = i;
        }
        
        if ( index !== '' ) {
          state[index].isCorrect = action.payload.isCorrect;
          return state;
        } else {
          return [...state, action.payload];
        }

        // for ( let item of state ) {
        //   if ( item.htmlId == action.payload )
        // }
        
      default:
        return state;
    }
  },
});