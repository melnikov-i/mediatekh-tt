import * as React from 'react';

import { IOptions } from '@src/models';
import { SFCFormRowFieldSelect } from '@src/components';

export default ({ options }: { options: IOptions }) => (
  <SFCFormRowFieldSelect options={options} />
); 
