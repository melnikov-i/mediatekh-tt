import * as React from 'react';
import { css } from 'aphrodite/no-important';

/* Импорт интерфейсов */
import {
  ITableHead,
  IUser
} from '@src/models';

/* Импорт дочернего компонента (?) */

/* Импорт стилей */
import styles from '@src/styles/table-styles';
import errors from '@src/styles/error-styles';

/* Интерфейс передаваемых в компонент параметров */
export interface StatefulTableProps {
  initialTableHeadCollection?: ITableHead, // имена ячеек таблицы
  userCollection: IUser[], // чтение коллекции пользователей  
}

interface DefaultProps {
  initialTableHeadCollection: ITableHead,
}

type PropsWithDefaults = StatefulTableProps & DefaultProps;

interface State {
  tableHeadCollection: ITableHead,
}


export const StatefulTable: React.ComponentClass<StatefulTableProps> =
  class extends React.Component<PropsWithDefaults, State> {
    static defaultProps: DefaultProps = {
      initialTableHeadCollection: [],
    }

    state: State = {
      tableHeadCollection: this.props.initialTableHeadCollection,
    }

    componentWillReceiveProps({ initialTableHeadCollection }: PropsWithDefaults) {
      if ( initialTableHeadCollection != null
            && initialTableHeadCollection !== this.props.initialTableHeadCollection ) {
        this.setState({ tableHeadCollection: initialTableHeadCollection });
      }
    }

    

    drawCell(contain: string | boolean | number, callback: any) {
      return callback(contain);
    }


    render() {
      /* Деструктуризация State, в котором лежит коллекция ячеек шапки таблицы */
      const { tableHeadCollection } = this.state;
      
      /* Деструктуризация Props, в котором лежит  UserCollection */
      const { userCollection } = this.props;
      
      /* Таблица не должна отрисовываться, если UserCollection пуста */
      if ( userCollection.length != 0 ) {
        console.log(userCollection);
        if ( tableHeadCollection.length != 0 ) {
          return (
            <table className={css(styles.table)}>
              <thead>
                <tr>
                  {
                    tableHeadCollection.map((item, index) => (
                      <td key={index} className={css(styles.tableCell)}>{item}</td>
                    ))
                  }
                </tr>
              </thead>
              <tbody>
                {
                  userCollection.map((e, i) => {
                    console.log(e);
                    return (
                      <tr key={i}>
                        <td className={css(styles.tableCell)}>
                          {e.role}
                        </td>
                        <td className={css(styles.tableCell)}>
                          {e.login}
                        </td>
                        <td className={css(styles.tableCell)}>
                          {e.last_name + ' ' + e.first_name}
                        </td>
                        <td className={css(styles.tableCell)}>
                          {e.age}
                        </td>
                        <td className={css(styles.tableCell)}>
                          {e.role}
                        </td>
                        <td className={css(styles.tableCell)}>
                          {e.active}
                        </td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          );
        } else {
          return (
            <span className={css(errors.errorMessage)}>
              Ошибка! Не удалось построить таблицу.
            </span>
          );
        }
      } else {
        return null;
      }

    }
  }