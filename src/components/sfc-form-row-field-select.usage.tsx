import * as React from 'react';

import { ISelectFieldId } from '@src/models';
import { SFCFormRowFieldSelect } from '@src/components';

export default ({id}: {id: ISelectFieldId }) => (
  <SFCFormRowFieldSelect id={id} />
); 
