import * as React from 'react';

import { IFormRow } from '@src/models';
import SFCFormRow from '@src/components/sfc-form-row.usage';

export interface SFCFormProps {
  items: IFormRow[],
}

export const SFCForm: React.SFC<SFCFormProps> = (props) => {
  const { items } = props;
  return (
    <form className={/*продолжить отсюда*/}>
      {
        items.map(( item, index ) => {
          return (
            <div key={index}>
              <SFCFormRow formRow={item} />  
            </div>
          );
        })
      }
    </div>
  );
}