/* Импорт библиотек */
import * as React from 'react';
import { css } from 'aphrodite/no-important';

/* Импорт интерфейсов */
import {
  ITableRow,
  IOptionsModel,
  IUser,
} from '@src/models';



/* Импорт стилей */
import styles from '@src/styles/table-styles';

export interface SFCTableProps {
  tableHeadCollection: ITableRow,
  userCollection: IUser[],
  options: IOptionsModel
}


/* Компонент */
export const SFCTable: React.SFC<SFCTableProps> = (props) => {
  /* Деструктуризация данных, полученных из props */
  const { tableHeadCollection, userCollection } = props;
  const length: number = userCollection.length;

  /* Формирование ячейки шапки таблицы */
  const tableHeadCell = ( length: number, item: string, index: number ): JSX.Element => {
    if ( length > 1 ) {
      return (
        <td key={index} className={css(styles.tableCell)}>
          {item}
          <a href="">
            <span className={css(styles.tableSortUp)}>
            </span>
          </a>
          <a href="">
            <span className={css(styles.tableSortDown)}>
            </span>
          </a>
        </td>
      );
    } else {
      return (
        <td key={index} className={css(styles.tableCell)}>
          {item}
        </td>
      );
    }
  };

  /* Формирование ячеек тела таблицы */
  const tableBodyCells = ( user: IUser, index: number ): JSX.Element => {
    /* Получение роли в виде текста */
    const getRoleStringFromNumber = (index: number): string => {
      const { role } = props.options;
      for ( let i in role ) {
        if ( role[i].value == String(index) ) {
          return role[i].label;
        }
      }
      return '';
    };

    /* Получение Active в виде текста */
    const getStringFromBoolean = ( b: boolean ): string => {
      const { active } = props.options;
      console.log(active);
      let key: string = '0';
      
      if ( b ) {
        key = '1';
      } 

      for ( let i in active ) {
        if ( active[i].value == key ) {
          console.log('value', active[i].value);
          console.log('label', active[i].label);
          return active[i].label;
        }
      }
      return '';
    }

    /* Получение даты в читаемом виде */
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

    return (
      <tr key={index}>
        <td className={css(styles.tableCell)}>
          {getRoleStringFromNumber(user.role)}
        </td>
        <td className={css(styles.tableCell)}>
          {user.login}
        </td>
        <td className={css(styles.tableCell)}>
          {user.last_name + ' ' + user.first_name}
        </td>
        <td className={css(styles.tableCell)}>
          {String(user.age)}
        </td>
        <td className={css(styles.tableCell)}>
          {getDate(user.registered_on)}
        </td>
        <td className={css(styles.tableCell)}>
          {getStringFromBoolean(user.active)}
        </td>
      </tr>
    );
  }
  
  if ( length !== 0 ) { // не забудь изменить условие
    return (
      <table className={css(styles.table)}>
        <thead>
          <tr>
            {tableHeadCollection.map((item, index) => (tableHeadCell(0, item, index)))}
          </tr>
        </thead>
        <tbody>
          {userCollection.map((user, index) => (tableBodyCells(user, index)))}
        </tbody>
      </table>
    );
  } else {
    return null;
  }
};

 // onClick={handlerUp}
  // onClick={handlerDown}

      //   <tbody>
      //   {
      //     tableRowsCollection.map((row, i) => {
      //       return (
      //         <tr key={i}>
      //           {
      //             row.map((cell, i) => {
      //               return (
      //                 <td key={i} className={css(styles.tableCell)}>
      //                   {cell}
      //                 </td>
      //               );
      //             })
      //           }
      //         </tr>
      //       );
      //     })
      //   }
      // </tbody>