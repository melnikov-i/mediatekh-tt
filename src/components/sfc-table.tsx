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
  const { tableHeadCollection, /*userCollection*/ } = props;
  const length: number = 3; //userCollection.length;

  /* Формирование ячейки шапки таблицы */
  const tableHeadCell = 
  ( length: number, item: string, index: number ): JSX.Element => {
    console.log('[TABLE_HEAD]')
    if ( length > 1 ) {
      return (
        <td key={index} className={css(styles.tableCell)}>
          {item}
          <a href="">
            <span
              className={css(styles.tableSortUp)}
              onClick={handlerUp}></span>
          </a>
          <a href="">
            <span 
              className={css(styles.tableSortDown)}
              onClick={handlerDown}></span>
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

  const handlerUp = (e) => {
    e.preventDefault();
    console.log('sortingUp:', 
      e.currentTarget.parentNode.previousSibling.previousSibling);
  }

  const handlerDown = (e) => {
    e.preventDefault();
    console.log('sortingDown:', 
      e.currentTarget.parentNode.parentNode.textContent);
  }

  /* Формирование ячеек тела таблицы */
  // const tableBodyCells = ( user: IUser, index: number ): JSX.Element => {
  //   console.log('[TABLE_ROW]')
  //   /* Получение роли в виде текста */
  //   const getRoleStringFromNumber = (index: number): string => {
  //     const { role } = props.options;
  //     for ( let i in role ) {
  //       if ( role[i].value == String(index) ) {
  //         return role[i].label;
  //       }
  //     }
  //     return '';
  //   };

    /* Получение Active в виде текста */
    // const getStringFromBoolean = ( b: boolean ): string => {
    //   const { active } = props.options;
    //   let key: string = '0';
    //   if ( b ) {
    //     key = '1';
    //   }
    //   for ( let i in active ) {
    //     if ( active[i].value == key ) {
    //       return active[i].label;
    //     }
    //   }
    //   return '';
    // }

    /* Получение даты в читаемом виде */
  //   const getDate = (timestamp: number): string => {
  //     const date = new Date(timestamp);
  //     let out: string = '';
  //     const month: string = String(date.getMonth());
  //     const minutes: string = String(date.getMinutes());
  //     out += String(date.getDate()) + '.';
  //     out += ( month.length < 2 ) ? '0' + month + '.' : month + '.';
  //     out += String(date.getFullYear()) + ' - ';
  //     out += String(date.getHours()) + ':';
  //     out += ( minutes.length < 2 ) ? '0' + minutes : minutes;
  //     return out;
  //   }
    
  //   return (
  //     <tr key={index}>
  //       <td className={css(styles.tableCell)}>
  //         {getRoleStringFromNumber(user.role)}
  //       </td>
  //       <td className={css(styles.tableCell)}>
  //         {user.login}
  //       </td>
  //       <td className={css(styles.tableCell)}>
  //         {user.last_name + ' ' + user.first_name}
  //       </td>
  //       <td className={css(styles.tableCell)}>
  //         {String(user.age)}
  //       </td>
  //       <td className={css(styles.tableCell)}>
  //         {getDate(user.registered_on)}
  //       </td>
  //       <td className={css(styles.tableCell)}>
  //         {getStringFromBoolean(user.active)}
  //       </td>
  //     </tr>
  //   );
  // }

  const table = () => (console.log('[TABLE]'));
  
  if ( length !== 0 ) {
    return (
      <table className={css(styles.table)}>
        {table()}
        <thead>
          <tr>
            {tableHeadCollection.map((item, index) => (
              tableHeadCell(length, item, index))
            )}
          </tr>
        </thead>
        <tbody>
          {/*userCollection.map((user, index) => (
            tableBodyCells(user, index))
          )*/}
        </tbody>
      </table>
    );
  } else {
    return null;
  }
};