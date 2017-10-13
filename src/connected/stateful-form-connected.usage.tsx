import * as React from 'react';

import { StatefulFormConnected } from '@src/connected';
import { FormRowsCollection } from '@src/collections';

export default () => (
  <StatefulFormConnected 
    initialFormRowsCollection={FormRowsCollection}
  />
);