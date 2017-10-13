import * as React from 'react';
import { css } from 'aphrodite/no-important';

import { IFormRow } from '@src/models';
import SFCFormRow from '@src/components/sfc-form-row.usage';
import styles from '@src/styles/form-styles';
import errors from '@src/styles/error-styles';

export interface StatefulFormProps {
  initialFormRowsCollection?: IFormRow[],
}

interface DefaultProps {
  initialFormRowsCollection: IFormRow[],
}

type PropsWithDefaults = StatefulFormProps & DefaultProps;

interface State {
  formRowsCollection: IFormRow[],
}

export const StatefulForm: React.ComponentClass<StatefulFormProps> =
  class extends React.Component<PropsWithDefaults, State> {
    static defaultProps: DefaultProps = {
      initialFormRowsCollection: [],
    };

    state: State = {
      formRowsCollection: this.props.initialFormRowsCollection,
    };
    
    componentWillReceiveProps({ initialFormRowsCollection }: PropsWithDefaults) {
      if ( initialFormRowsCollection != null && initialFormRowsCollection !== this.props.initialFormRowsCollection ) {
        this.setState({ formRowsCollection: initialFormRowsCollection });
      }
    }

    formButtonHandler = (e) => {
      console.log(new Date());
      e.preventDefault();
    }

    render() {
      const { formButtonHandler } = this;
      const { formRowsCollection } = this.state;
      if ( formButtonHandler.length != 0 ) {
        return (
          <form action="">
            {/* Поля формы */}
            {
              formRowsCollection.map((item, index) => {
                return <SFCFormRow key={index} formRow={item} />
              })
            }
            {/* Кнопка формы */}
            <div className={css(styles.formButtonWrapper)}>
              <button className={css(styles.formButton)} onClick={formButtonHandler}>Добавить</button>
            </div>
          </form>
        );  
      } else {
        return <span className={css(errors.errorMessage)}>Ошибка! Не удалось получить поля формы.</span>
      }
      
    }
  };