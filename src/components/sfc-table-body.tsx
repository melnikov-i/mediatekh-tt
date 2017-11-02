/* Импорт библиотек */
import * as React from 'react';
import { css } from 'aphrodite/no-important';

/* Импорт интерфейсов */
import {
  IOptionsModel,
  IUser,
} from '@src/models';

/* Импорт стилей */
import styles from '@src/styles/table-styles';

export interface SFCTableBodyProps {
  user: IUser,
  selectOptionsCollection: IOptionsModel,
}


/* Компонент */
export const SFCTableBody: React.SFC<SFCTableBodyProps> = (props) => {
  const {
    user,
  } = props;

  /* Получение роли в виде текста */
  const getRoleStringFromNumber = (index: number): string => {
    const { role } = props.selectOptionsCollection;
    for ( let i in role ) {
      if ( role[i].value == String(index) ) {
        return role[i].label;
      }
    }
    return '';
  };

  /* Получение Active в виде текста */
  const getStringFromBoolean = ( b: boolean ): string => {
    const { active } = props.selectOptionsCollection;
    let key: string = '0';
    if ( b ) {
      key = '1';
    }
    for ( let i in active ) {
      if ( active[i].value == key ) {
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
    <tr>
      <td className={css(styles.tableCell)}>
        {getRoleStringFromNumber(user.role)}
      </td>
      <td className={css(styles.tableCell)}>
        {user.login}
      </td>
      <td className={css(styles.tableCell)}>
        {user.last_name + ' ' + user.first_name}
      </td>
      <td className={css(styles.tableCell, styles.center)}>
        {user.age}
      </td>
      <td className={css(styles.tableCell)}>
        {getDate(user.registered_on)}
      </td>
      <td className={css(styles.tableCell, styles.center)}>
        {getStringFromBoolean(user.active)}
      </td>
    </tr>
  );
}