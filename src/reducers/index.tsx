import { combineReducers } from 'redux';
import form from './form';
import table from './table';

export default combineReducers({
  form,
  table
});

// interface TestInitialState {
//   user: string
// }

// const initialState: TestInitialState = {
//   user: 'Name'
// };

// console.log('src/reducers/index - initialState:', initialState);

// export default function userState(state: TestInitialState = initialState): TestInitialState {
//   console.log('state:', state);
//   return state;
// }