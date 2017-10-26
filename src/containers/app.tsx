import * as React from 'react';
import { css } from 'aphrodite/no-important';

// import StatefulFormConnected from '@src/connected/stateful-form-connected.usage';
import SFCFormConnected from '@src/connected/sfc-form-connected.usage';
// import StatefulTableWrapperConnected from '@src/connected/stateful-table-wrapper-connected.usage';
import styles from '@src/styles/app-styles';

export const App = () => {
  return (
    <div className={css(styles.wrapper)}>
      {/*<StatefulFormConnected />*/}
      <SFCFormConnected />
      {/*<StatefulTableWrapperConnected />*/}
    </div>
  );
};