import { combineReducers } from 'redux';
import { routerReducer as router, RouterState } from 'react-router-redux';

import { reducer as form, State as FormState } from '@src/redux/form';
import { reducer as table, State as TableState } from '@src/redux/table';

export interface RootState {
  router: RouterState,
  form: FormState,
  table: TableState,
}

export const rootReducer = combineReducers<RootState>({
  router,
  form,
  table,
});

