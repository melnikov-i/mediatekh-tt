import * as React from 'react';

import { ISelectOptions } from '@src/models';
import { SFCFormRowMiddle } from '@src/components';

export default ({options}: {options: ISelectOptions}) => (
  <SFCFormRowMiddle options={options} />
);

// продолжить тут