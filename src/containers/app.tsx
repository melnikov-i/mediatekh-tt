import * as React from 'react';
import { css } from 'aphrodite';

import SFCForm from '@src/components/sfc-form.usage';
import { AppStyles as styles } from '@src/styles';


export const App = () => {
  return (
    <div className={css(styles.wrapper)}>
      <SFCForm />
    </div>
  );
};