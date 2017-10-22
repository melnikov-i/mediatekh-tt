import * as React from 'react';
import { css } from 'aphrodite/no-important';

/* Импорт интерфейсов */
import {
  ITableRow,
  IUser
} from '@src/models';

/* Импорт вспомогательных коллекций */
import { SelectRoleCollection } from '@src/collections';

/* Импорт стилей */
import styles from '@src/styles/table-styles';
import errors from '@src/styles/error-styles';

/* Интерфейс передаваемых в компонент параметров */
export interface StatefulTableProps {
  initialTableHeadCollection?: ITableRow, // имена ячеек таблицы
  userCollection: IUser[], // чтение коллекции пользователей  
}

interface DefaultProps {
  initialTableHeadCollection: ITableRow,
}

type PropsWithDefaults = StatefulTableProps & DefaultProps;

interface State {
  tableHeadCollection: ITableRow,
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

    getTableRowsCollection() {
      /* Деструктуризация Props, в котором лежит  UserCollection */
      const { userCollection } = this.props;

      const tableRowsCollection: ITableRow[] = userCollection.map((row) => {
        return [
          this.getRoleStringFromNumber(row['role']),
          row['login'],
          row['last_name'] + ' ' + row['first_name'],
          String(row['age']),
          this.getDate(row['registered_on']),
          this.getStringFromBoolean(row['active']),
        ];
      });
      return tableRowsCollection;
    }

    getDate(timestamp: number): string {
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

    doSort(row: string[][], field: string, direction: boolean, callback: any) {
      let i: number = 0;
      const length: number = row.length;
      if ( length > 0 ) {
        while ( i < length ) {
          let j = i + 1;
          const currentDirection: boolean = callback(row[i][field], row[j][field]);
          if ( currentDirection  == direction ) {
            i++;
          } else {
            if ( row[i][field] != row[j][field] ) {
              let tmp = row[j];
              row[j] = row[i];
              row[i] = tmp;
              if ( i != 0 ) i--;
            } else {
              i++;
            }
          }
        }
      }
    }

    callbackString(a: string, b: string): boolean {
      const endOfWhile: number = ( a.length < b.length ) ? a.length : b.length;
      let i: number = 0;
      while ( i < endOfWhile ) {
        if ( a[i] == b[i] ) {
          i++;
        } else {
          if ( a[i] < b[i] ) return true;
          else return false;
        }
      }
      if ( a.length < b.length || a.length == b.length ) return true;
      else return false;
    }

    callbackBoolean(a, b) {
      if ( b ) return a;
      else return true;
    }

    render() {
      /* Деструктуризация State, в котором лежит коллекция ячеек шапки таблицы */
      const { tableHeadCollection } = this.state;
      
      const tableRowCollection = this.getTableRowsCollection();
      if (tableRowCollection.length > 1) {
        console.log(this.doSort(tableRowCollection, '2', true, this.callbackString));
      }
      /* Таблица не должна отрисовываться, если UserCollection пуста */
      if ( tableRowCollection.length != 0 ) {
        console.log('tableRowCollection:', tableRowCollection);
        if ( tableHeadCollection.length != 0 ) {
          return (
            <table className={css(styles.table)}>
              <thead>
                <tr>
                  {
                    tableHeadCollection.map((item, index) => (
                      <td key={index} className={css(styles.tableCell)}>
                        {item}
                      </td>
                    ))
                  }
                </tr>
              </thead>
              <tbody>
                {
                  tableRowCollection.map((row, i) => {
                    return (
                      <tr key={i}>
                        {
                          row.map((cell, i) => {
                            return (
                              <td key={i} className={css(styles.tableCell)}>
                                {cell}
                              </td>
                            );
                          })
                        }
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