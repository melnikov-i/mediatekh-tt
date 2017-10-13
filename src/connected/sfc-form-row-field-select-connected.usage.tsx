import * as React from 'react';

import { ISelectProperties } from '@src/models';
import { SFCFormRowFieldSelectConnected } from '@src/connected';

export default ({properties}: { properties: ISelectProperties }) => (
  <SFCFormRowFieldSelectConnected properties={properties} />
); 
