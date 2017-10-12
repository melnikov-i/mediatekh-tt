import * as React from 'react';

import { SFCFormConnected } from '@src/connected';
import { FormRow } from '@src/models';

export default () => (
  <SFCFormConnected 
    items={FormRow}
  />
);