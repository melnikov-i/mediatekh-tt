import * as React from 'react';

/* Импорт интерфейсов */
import {
  IUser
} from '@src/models';

/* Импорт дочернего компонента */
import StatefulTableConnected from '@src/connected/stateful-table-connected.usage';

/* Интерфейс передаваемых в компонент параметров */
export interface SFCUserToRowsProps {
  userCollection: IUser[], // чтение коллекции пользователей
  addUserToRows: (userCollection: IUser[]) => any, // Добавляет коллекцию в таблицу
}

/* Компонент */
export const SFCUserToRows: React.SFC<SFCUserToRowsProps> = (props) => {
  const { userCollection, addUserToRows } = props;  
  if ( userCollection.length != 0 ) {
    addUserToRows(userCollection);
    return <StatefulTableConnected />;
  } else {
    return null;
  }
};