import * as React from 'react';
import { css } from 'aphrodite/no-important';

import SFCForm from '@src/components/sfc-form.usage';
import styles from '@src/styles/app-styles';

export const App = () => {
  return (
    <div className={css(styles.wrapper)}>
      <SFCForm />
    </div>
  );
};