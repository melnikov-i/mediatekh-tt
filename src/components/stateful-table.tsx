import * as React from 'react';
import { css } from 'aphrodite/no-important';

/* Импорт интерфейсов */
import {
  ITableHeader,
  IUser
} from '@src/models';

/* Импорт вспомогательных коллекций */
import { SelectRoleCollection } from '@src/collections';

/* Импорт стилей */
import styles from '@src/styles/table-styles';
import errors from '@src/styles/error-styles';

/* Интерфейс передаваемых в компонент параметров */
export interface StatefulTableProps {
  initialTableHeadCollection?: ITableHeader[], // имена ячеек таблицы
  userCollection: IUser[], // чтение коллекции пользователей  
}

interface DefaultProps {
  initialTableHeadCollection: ITableHeader[],
}

type PropsWithDefaults = StatefulTableProps & DefaultProps;

interface State {
  tableHeadCollection: ITableHeader[],
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

    // active: true
    // age: 43
    // first_name: "asdf"
    // last_name: "asdf"
    // login: "asdfasd"
    // password: "asdfsadfasd"
    // registered_on: Sun Oct 22 2017 03:08:51 GMT+0300 (MSK)
    // role: 2

    getTableRowsCollection(userCollection: IUser[]) {
      let localCollection: {name: string, value: string}[] = userCollection.map((e) => {
        for ( let property in e ) {
          switch ( property ) {
            case: 'active': 
              if ( e[property] ) {
                return {name: property, value: 'No'};
              } else {
                return {name: property, value: 'No'};
              }
            case 'age':
              return {name: property, value: String(e[property])};
            case 
          }
        }
        // switch ( e ) {
        //   case: 'active': if ( e. )
        // }
        return '';
      });
      return localCollection;
    }

    /* Получение текстового значения поля Role по его индексу */
    getRoleStringFromNumber(index: number): string {
      const localIndex: string = String(index);
      for ( let i in SelectRoleCollection ) {
        if ( SelectRoleCollection[i].value == localIndex ) {
          return SelectRoleCollection[i].label
        }
      }
      return 'error';
    }
    
    /* Получение текстового значения поля Active */
    getStringFromBoolean(b: boolean): string {
      if ( b ) {
        return 'Yes';
      } else {
        return 'No';
      }
    }

    drawCell(contain: string | boolean | number, callback: any): JSX.Element {
      return (
        <td className={css(styles.tableCell)}>
          {callback(contain)}
        </td>
      );
    }


    render() {
      /* Деструктуризация State, в котором лежит коллекция ячеек шапки таблицы */
      const { tableHeadCollection } = this.state;
      
      /* Деструктуризация Props, в котором лежит  UserCollection */
      const { userCollection } = this.props;
      // console.log(userCollection);
      /* Таблица не должна отрисовываться, если UserCollection пуста */
      if ( userCollection.length != 0 ) {
        if ( tableHeadCollection.length != 0 ) {
          return (
            <table className={css(styles.table)}>
              <thead>
                <tr>
                  {
                    tableHeadCollection.map((item, index) => (
                      <td key={index} className={css(styles.tableCell)}>
                        {item.header}
                      </td>
                    ))
                  }
                </tr>
              </thead>
              <tbody>
                {
                  userCollection.map((e, i) => {
                    // console.log(e);
                    for (let a in e) {
                      console.log('a:', a);
                    }
                    return (
                      <tr key={i}>
                        {this.drawCell(e.role, this.getRoleStringFromNumber)}
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
                        {this.drawCell(e.active, this.getStringFromBoolean)}
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