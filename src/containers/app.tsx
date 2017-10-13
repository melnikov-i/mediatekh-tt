import * as React from 'react';
import { css } from 'aphrodite/no-important';

import StatefulFormConnected from '@src/connected/stateful-form-connected.usage';
import SFCTable from '@src/components/sfc-table.usage';
import styles from '@src/styles/app-styles';

export const App = () => {
  return (
    <div className={css(styles.wrapper)}>
      <StatefulFormConnected />
      <SFCTable />
    </div>
  );
};