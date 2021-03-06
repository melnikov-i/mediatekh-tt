import * as React from 'react';
import { css } from 'aphrodite/no-important';

import SFCFormConnected from '@src/connected/sfc-form-connected.usage';
import SFCTableConnected from '@src/connected/sfc-table-connected.usage';
import styles from '@src/styles/app-styles';

export const App = () => {
  return (
    <div className={css(styles.wrapper)}>
      <SFCFormConnected />
      <SFCTableConnected />
    </div>
  );
};