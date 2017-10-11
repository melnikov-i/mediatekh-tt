import * as React from 'react';
import { css } from 'aphrodite/no-important';

import styles from '@src/styles/table-styles';

export const SFCTable: React.SFC = (props) => {
  return (
    <table className={css(styles.table)}>
      <thead>
        <tr>
          <td className={css(styles.tableCell)}>
            Role
          </td>
          <td className={css(styles.tableCell)}>
            Login
          </td>
          <td className={css(styles.tableCell)}>
            Full name
          </td>
          <td className={css(styles.tableCell)}>
            Age
          </td>
          <td className={css(styles.tableCell)}>
            Registered_on
          </td>
          <td className={css(styles.tableCell)}>
            Active
          </td>
        </tr>
      </thead>
    </table>
  );
}