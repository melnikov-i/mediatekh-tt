import * as React from 'react';

import { StatefulTableConnected } from '@src/connected';
import { TableHeadCollection } from '@src/collections';

export default () => (
  <StatefulTableConnected
    tableHeadCollection={TableHeadCollection}
  />
);