import * as React from 'react';

import {
  IInputOptions,
} from '@src/models';
import { SFCFormRowMiddleSelect } from '@src/components';

export default ({options}: {options: IInputOptions}) => (
  <SFCFormRowMiddleSelect options={options} />
);