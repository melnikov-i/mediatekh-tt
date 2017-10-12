import * as React from 'react';
import { css } from 'aphrodite/no-important';

import { ITableHead } from '@src/models';
import styles from '@src/styles/table-styles';

export interface SFCTableProps {
  tableHead: ITableHead,
}

export const SFCTable: React.SFC<SFCTableProps> = (props) => {
  const { tableHead } = props;
  return (
    <table className={css(styles.table)}>
      <thead>
        <tr>
          {
            tableHead.map((item, index) => (
              <td key={index} className={css(styles.tableCell)}>{item}</td>
            ))
          }
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={css(styles.tableCell)}>Administrator</td>
          <td className={css(styles.tableCell)}>login</td>
          <td className={css(styles.tableCell)}>Petr Ivanov</td>
          <td className={css(styles.tableCell)}>32</td>
          <td className={css(styles.tableCell)}>12.10.2017 - 10:32</td>
          <td className={css(styles.tableCell)}>Yes</td>
        </tr>
      </tbody>
    </table>
  );
}