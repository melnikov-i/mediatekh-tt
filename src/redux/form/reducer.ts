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
/*
  state - массив с данными: 
    [
      '0': {htmlId: string, isCorrect: boolean},
      '1': {htmlId: string, isCorrect: boolean},
    ]
  payload - элемент этого массива. объект с двумя параметрами: {htmlId: string, isCorrect: boolean}

  обратиться к элементу массива можно по индексу.

  элемент, пришедший в payload, может быть в массиве, а может и не быть.
  если элемент в массиве есть, то необходимо создать другой массив, но уже без этого элемента,
  а после добавить элемент payload.
  Если элемента в массиве нет, то следует просто добавить элемент к массиву и вернуть его.
*/
        // const htmlId: string = action.payload.htmlId;
        // const isCorrect: boolean = action.payload.isCorrect;
        
        // let testState = [{htmlId: 'first_name', isCorrect: false}];
        // let test = testState.map((e) => {
        //   console.log(e);
        //   console.log(htmlId);
        //   return e;
        // });

        // console.log('state: ', test);
        
        if ( state.length != 0 ) {
          console.log('state.length != 0: ',state, state.length);
          console.log(action.payload);
          
          return state.map((element) => {
            console.log('element', element);
            if ( element.htmlId != action.payload.htmlId ) {            
              return element;
            } else {
              return [...state, action.payload];
            }
          });
        } else {
          console.log('state.length == 0: ',state, state.length);
          console.log('payload: ', action.payload);
          return [...state, action.payload];
        }
        // console.log('newState', newState);
        // return newState;
        
        // if ( index !== '' ) {
        //   /* элемент payload есть в массиве */
        //   state[index].isCorrect = action.payload.isCorrect;
        //   return state;
        // } else {
        //   return [...state, action.payload];
        // }
        
      default:
        return state;
    }
  },
});