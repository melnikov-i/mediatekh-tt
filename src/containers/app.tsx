import * as React from 'react';
import { css } from 'aphrodite/no-important';

import StatefulFormConnected from '@src/connected/stateful-form-connected.usage';
import StatefulTableConnected from '@src/connected/stateful-table-connected.usage';
import styles from '@src/styles/app-styles';

export const App = () => {
  return (
    <div className={css(styles.wrapper)}>
      <StatefulFormConnected />
      <StatefulTableConnected />
    </div>
  );
};