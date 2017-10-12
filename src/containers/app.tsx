import * as React from 'react';
import { css } from 'aphrodite/no-important';

// import SFCForm from '@src/components/sfc-form.usage';
import SFCForm from '@src/connected/sfc-form-connected.usage';
import SFCTable from '@src/components/sfc-table.usage';
import styles from '@src/styles/app-styles';

export const App = () => {
  return (
    <div className={css(styles.wrapper)}>
      <SFCForm />
      <SFCTable />
    </div>
  );
};