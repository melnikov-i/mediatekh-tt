import { combineReducers } from 'redux';

/* Импорт интерфейсов */
import {
  ITableRow,
  IOptionsModel,
  ISelectModel,
} from '@src/models';

/* Импорт статических данных таблицы */
import {
  TableHeadCollection,
  RoleSelectOptions,
  ActiveSelectOptions,
} from '@src/collections';

import {

} from './';



export type State = {
  readonly tableHeadCollection: ITableRow,
  readonly selectOptionsCollection: IOptionsModel,
}

export const reducer = combineReducers<State>({
  tableHeadCollection: ( state = TableHeadCollection, action ) => {
    console.log('tableHeadCollection', state);
    return state;
  },

  selectOptionsCollection: ( state = {}, action ) => {
    let role: ISelectModel | {} = {};
    let active: ISelectModel | {} = {};
    for ( let i in RoleSelectOptions ) {
      role = {
        ...role,
        [i]: {
          value: RoleSelectOptions[i].value,
          label: RoleSelectOptions[i].label,
        } 
      };
    }
    for ( let i in ActiveSelectOptions ) {
      active = {
        ...active,
        [i]: {
          value: ActiveSelectOptions[i].value,
          label: ActiveSelectOptions[i].label,
        }
      }
    }
    console.log('selectOptionsCollection', {role, active});
    return {role, active};
  }
})