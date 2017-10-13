import * as React from 'react';

import { IFormRow } from '@src/models';
import { SFCFormRow } from '@src/components';

export default ({formRow}: {formRow: IFormRow}) => (
  <SFCFormRow items={formRow} />
);
