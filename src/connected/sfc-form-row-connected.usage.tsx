import * as React from 'react';

import { IFormRowsStaticParamsModel } from '@src/models';
import { SFCFormRowConnected } from '@src/connected';

export default ({formRow}: {formRow: IFormRowsStaticParamsModel}) => (
  <SFCFormRowConnected items={formRow} />
);