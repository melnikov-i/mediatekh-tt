import * as React from 'react';

import { StatefulFormConnected } from '@src/connected';
import { FormRow } from '@src/models';

export default () => (
  <StatefulFormConnected 
    initialFormRowsCollection={FormRow}
  />
);