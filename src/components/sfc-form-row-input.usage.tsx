import * as React from 'react';

import { SFCFormRowInput } from '@src/components';
import { IInputOptions } from '@src/models';

export default ({ options }: { options: IInputOptions }) => (
  <SFCFormRowInput options={options} />
);