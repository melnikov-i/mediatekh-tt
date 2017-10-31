import * as React from 'react';

import { IUser } from '@src/models';

import { SFCTableBodyConnected } from '@src/connected';

export default ({user}: {user: IUser}) => (
  <SFCTableBodyConnected user={user} />
);
