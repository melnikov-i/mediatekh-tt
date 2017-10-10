import * as React from 'react';

import {
  IInputOptions,
} from '@src/models';

export interface SFCFormRowMiddleSelectProps {
  options: IInputOptions,
}

export const SFCFormRowMiddleSelect: React.SFC<SFCFormRowMiddleSelectProps> = (props) => {
  switch ( typeof props.options ) {
    case 'IInputOptions'
  }


  return (
    <div>middle</div>
  );
};

  // const text: JSX.Element = (
  //   <input
  //     type={type}
  //     className={css(styles.form__input)}
  //     name={htmlId}
  //     id={htmlId}
  //   />
  // );

  // const select: JSX.Element = (
  //   <select
  //     className={css(styles.form__select)}
  //     id={htmlId}>
    
  //     </select>
  // );

  // switch ( type ) {
  //   case 'select': middle = select; break;
  //   default: middle = text;
  // }