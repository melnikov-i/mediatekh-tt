import * as React from 'react';

import { IFormRow } from '@src/models';

export interface SFCFormRowProps {
  items: IFormRow,
}

export const SFCFormRow: React.SFC<SFCFormRowProps> = (props) => {
  const { id, htmlId, label, type, hint } = props.items;
  return (
    <div>
      <p>id - {id}</p>
      <p>htmlId - {htmlId}</p>
      <p>label - {label}</p>
      <p>type - {type}</p>
      <p>hint - {hint}</p>
    </div>
  );
}