import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer, RootState } from '@src/redux';

function confugureStore(initialState?: RootState) {
  return createStore<RootState>(
    rootReducer,
    initialState!,
    composeWithDevTools()
  );
}

const store = confugureStore();
export default store;