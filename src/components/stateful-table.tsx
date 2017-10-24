import * as React from 'react';
import { css } from 'aphrodite/no-important';

/* Импорт интерфейсов */
import { ITableRow } from '@src/models';

/* Импорт стилей */
import styles from '@src/styles/table-styles';

/* Интерфейс передаваемых в компонент параметров */
export interface StatefulTableProps {
  tableHeadCollection: ITableRow, // имена ячеек шапки таблицы
  tableRowsCollection: ITableRow[],
}

interface DefaultProps {
  tableRowsCollection: ITableRow[],
}

type PropsWithDefaults = StatefulTableProps & DefaultProps;

interface State {
  tableRowsStateCollection: ITableRow[],
}

export const StatefulTable: React.ComponentClass<StatefulTableProps> =
  class extends React.Component<PropsWithDefaults, State> {
    static defaultProps: DefaultProps = {
      tableRowsCollection: [],
    }
  
    state: State = {
      tableRowsStateCollection: this.props.tableRowsCollection,
    }

    componentWillReceiveProps({ tableRowsCollection }: PropsWithDefaults) {
      if ( tableRowsCollection != null && tableRowsCollection !== this.props.tableRowsCollection ) {
        this.setState({ tableRowsStateCollection: tableRowsCollection })
      }
    }

    // shouldComponentUpdate({ tableRowsCollection }: PropsWithDefaults): boolean {
    //   return tableRowsCollection.length > this.props.tableRowsCollection.length; // temporary
    // }

    render() {
      /* Деструктуризация данных, полученных из props */
      const { tableHeadCollection } = this.props;
      /* Деструктуризация данных, полученных из state */
      const { tableRowsStateCollection } = this.state;
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
              tableRowsStateCollection.map((row, i) => {
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
    }
  };


// export const SFCTable: React.SFC<SFCTableProps> = (props) => {
  /* Деструктуризация данных, полученных из props */
  // const { tableHeadCollection, tableRowsCollection } = props;
  
  
// }

/* У меня изменилось поле сортировки, но данные остались те же самые.
  в state можно хранить поле сортировки и направление. Которое можно менять по хэндлеру

 */



    // doSort(tableRows: ITableRow[], field: string, direction: boolean, callback: any) {
    //   let i: number = 0;
    //   const length: number = row.length;
    //   if ( length > 0 ) {
    //     while ( i < length ) {
    //       let j = i + 1;
    //       const currentDirection: boolean = callback(row[i][field], row[j][field]);
    //       if ( currentDirection  == direction ) {
    //         i++;
    //       } else {
    //         if ( row[i][field] != row[j][field] ) {
    //           let tmp = row[j];
    //           row[j] = row[i];
    //           row[i] = tmp;
    //           if ( i != 0 ) i--;
    //         } else {
    //           i++;
    //         }
    //       }
    //     }
    //   }
    // }

    // callbackString(a: string, b: string): boolean {
    //   const endOfWhile: number = ( a.length < b.length ) ? a.length : b.length;
    //   let i: number = 0;
    //   while ( i < endOfWhile ) {
    //     if ( a[i] == b[i] ) {
    //       i++;
    //     } else {
    //       if ( a[i] < b[i] ) return true;
    //       else return false;
    //     }
    //   }
    //   if ( a.length < b.length || a.length == b.length ) return true;
    //   else return false;
    // }

    // callbackBoolean(a, b) {
    //   if ( b ) return a;
    //   else return true;
    // }

    // render() {

      /* Деструктуризация State, в котором лежит коллекция ячеек шапки таблицы */
      // const { tableHeadCollection } = this.state;
      
      // const tableRowCollection = this.getTableRowsCollection();

      // /* Таблица не должна отрисовываться, если UserCollection пуста */
      // if ( tableRowCollection.length != 0 ) {
      //   console.log('tableRowCollection:', tableRowCollection);
      //   if ( tableHeadCollection.length != 0 ) {
      //     return (
      //       <table className={css(styles.table)}>
      //         <thead>
      //           <tr>
      //             {
      //               tableHeadCollection.map((item, index) => (
      //                 <td key={index} className={css(styles.tableCell)}>
      //                   {item}
      //                 </td>
      //               ))
      //             }
      //           </tr>
      //         </thead>
      //         <tbody>
      //           {
      //             tableRowCollection.map((row, i) => {
      //               return (
      //                 <tr key={i}>
      //                   {
      //                     row.map((cell, i) => {
      //                       return (
      //                         <td key={i} className={css(styles.tableCell)}>
      //                           {cell}
      //                         </td>
      //                       );
      //                     })
      //                   }
      //                 </tr>
      //               );
      //             })
      //           }
      //         </tbody>
      //       </table>
      //     );
      //   } else {
      //     return (
      //       <span className={css(errors.errorMessage)}>
      //         Ошибка! Не удалось построить таблицу.
      //       </span>
      //     );
      //   }
      // } else {
      //   return null;
      // }

  //   }
  // }