import * as React from 'react';

import { IFieldOptions } from '@src/models';
import { SFCFormRowFieldConnected } from '@src/connected';

export default ({ options }: { options: IFieldOptions }) => (
  <SFCFormRowFieldConnected options={options} />
);