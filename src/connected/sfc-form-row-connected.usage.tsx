import * as React from 'react';

import { IFormRow } from '@src/models';
import { SFCFormRowConnected } from '@src/connected';

export default ({formRow}: {formRow: IFormRow}) => (
  <SFCFormRowConnected items={formRow} />
);
