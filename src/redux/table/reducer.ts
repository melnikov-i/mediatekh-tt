import { combineReducers } from 'redux';

/* Импорт интерфейсов */
import { IUser, ITableRow } from '@src/models';

/* Импорт вспомогательных коллекций */
import { SelectRoleCollection } from '@src/collections';

import {
  ADD_USER_TO_ROWS,
} from './';

export type State = {
  readonly tableRowsCollection: ITableRow[],
}

export const reducer = combineReducers<State>({
  tableRowsCollection: ( state = [], action ) => {
    switch (action.type) {
      case ADD_USER_TO_ROWS:

        /**
         * Преобразование полей коллекции userCollection в поля 
         * коллекции табличных данных.
         *
         * @return{ITableRow[]}
         */
        const getTableRowsCollection = (payload: IUser[]): ITableRow[] => {
          const tableRowsCollection: ITableRow[] = payload.map((row) => {
            return [
              getRoleStringFromNumber(row['role']),
              row['login'],
              row['last_name'] + ' ' + row['first_name'],
              String(row['age']),
              getDate(row['registered_on']),
              getStringFromBoolean(row['active']),
            ];
          });
          return tableRowsCollection;
        }

        /**
         * Получение даты в читаемом формате из timestamp, хранимого в коллекции
         *
         * @param{number} timestamp - timestamp, хранимый в коллекции
         * @return{string}
         */
        const getDate = (timestamp: number): string => {
          const date = new Date(timestamp);
          let out: string = '';
          const month: string = String(date.getMonth());
          const minutes: string = String(date.getMinutes());
          out += String(date.getDate()) + '.';
          out += ( month.length < 2 ) ? '0' + month + '.' : month + '.';
          out += String(date.getFullYear()) + ' - ';
          out += String(date.getHours()) + ':';
          out += ( minutes.length < 2 ) ? '0' + minutes : minutes;
          return out;
        }

        /** 
         * Получение текстового значения поля Role по его индексу
         *
         * @param{number} index - числовой индекс роли из коллекции
         * @return{string}
         */
        const getRoleStringFromNumber = (index: number): string => {
          const localIndex: string = String(index);
          for ( let i in SelectRoleCollection ) {
            if ( SelectRoleCollection[i].value == localIndex ) {
              return SelectRoleCollection[i].label
            }
          }
          return 'error';
        }
        
        /**
         * Получение текстового значения поля Active
         *
         * @param{boolean} b - Значение булевого типа, получаемое от поля Active
         * @return{string}
         */
        const getStringFromBoolean = (b: boolean): string => {
          if ( b ) {
            return 'Yes';
          } else {
            return 'No';
          }
        }

        return getTableRowsCollection(action.payload);
      default:
        return state;
    }
  }
})
