import * as React from 'react';

import { SFCFormRowLabel } from '@src/components';
import { ILabelOptions } from '@src/models';

export default ({ options }: { options: ILabelOptions }) => (
  <SFCFormRowLabel options={options} />
);