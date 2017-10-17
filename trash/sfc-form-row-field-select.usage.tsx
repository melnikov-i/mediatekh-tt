import * as React from 'react';

import { ISelectProperties } from '@src/models';
import { SFCFormRowFieldSelect } from '@src/components';

export default ({properties}: { properties: ISelectProperties }) => (
  <SFCFormRowFieldSelect properties={properties} />
); 
