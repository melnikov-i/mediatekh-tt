import * as React from 'react';

import { IFormRowModel } from '@src/models';
import { SFCFormRowConnected } from '@src/connected';

export default ({formRow}: {formRow: IFormRowModel}) => (
  <SFCFormRowConnected items={formRow} />
);
