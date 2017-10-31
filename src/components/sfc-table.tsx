/* Импорт библиотек */
import * as React from 'react';
import { css } from 'aphrodite/no-important';

/* Импорт интерфейсов */
import {
  IUser,
} from '@src/models';

/* Импорт стилей */
import styles from '@src/styles/table-styles';

/* Импорт дочерних компонентов */
import SFCTableHeadConnected from 
'@src/connected/sfc-table-head-connected.usage';
import SFCTableBodyConnected from 
'@src/connected/sfc-table-body-connected.usage';

export interface SFCTableProps {
  userCollection: IUser[],
  userCollectionLength: number,
}


/* Компонент */
export const SFCTable: React.SFC<SFCTableProps> = (props) => {
  /* Деструктуризация данных, полученных из props */
  const { userCollection, userCollectionLength } = props;
  
  if ( userCollectionLength !== 0 ) {
    console.log('[TABLE]');
    return (
      <table className={css(styles.table)}>
        <thead>
          <SFCTableHeadConnected />
        </thead>
        <tbody>
          {
            userCollection.map((user, index) => (
              <SFCTableBodyConnected
                key={index}
                user={user}
              />
            ))
          }
        </tbody>
      </table>
    );
  } else {
    return null;
  }
};