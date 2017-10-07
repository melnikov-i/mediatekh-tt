import * as React from 'react';

export interface SFCFormProps {
  label: string,
}

export const SFCForm: React.SFC<SFCFormProps> = (props) => {
  const { label } = props;
  return (
    <div>{label}</div>
  );
}