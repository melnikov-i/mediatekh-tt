import * as React from 'react';

import { IFieldOptionsModel } from '@src/models';
import { SFCFormRowFieldConnected } from '@src/connected';

export default ({ options }: { options: IFieldOptionsModel }) => (
  <SFCFormRowFieldConnected options={options} />
);