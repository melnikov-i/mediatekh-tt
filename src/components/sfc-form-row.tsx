import * as React from 'react';
import { css } from 'aphrodite/no-important';

import { 
  IFormRowModel, 
  IFieldOptionsModel 
} from '@src/models';
import styles from '@src/styles/form-row-styles';
import SFCFormRowFieldConnected from '@src/connected/sfc-form-row-field-connected.usage';

export interface SFCFormRowProps {
  items: IFormRowModel,
}

export const SFCFormRow: React.SFC<SFCFormRowProps> = (props) => {
  const { htmlId, label, type, regExpTemplate, hint, isHintActive } = props.items;
  const fieldOptions: IFieldOptionsModel = { 
    htmlId, type, regExpTemplate, hint, isHintActive 
  };

  return (
    <div className={css(styles.formRow)}>
      {/* Метка поля */}
      <label
        htmlFor={htmlId}
        className={css(styles.formLabel)}>
          {label}
      </label>
      {/* Элемент формы */}
      <SFCFormRowFieldConnected options={fieldOptions} />
    </div>
  );
};

/* А должен ли этот компонент обладать mapStateToProps и mapDispatchToProps ??? */