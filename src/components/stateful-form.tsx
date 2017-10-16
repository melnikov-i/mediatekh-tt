import * as React from 'react';
import { css } from 'aphrodite/no-important';

import { IFormRowModel } from '@src/models';
import SFCFormRowConnected from '@src/connected/sfc-form-row-connected.usage';
import styles from '@src/styles/form-styles';
import errors from '@src/styles/error-styles';

export interface StatefulFormProps {
  initialFormRowsCollection?: IFormRowModel[],
  // hintCollection: string[],
}

interface DefaultProps {
  initialFormRowsCollection: IFormRowModel[],
}

type PropsWithDefaults = StatefulFormProps & DefaultProps;

interface State {
  formRowsCollection: IFormRowModel[],
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
      if ( initialFormRowsCollection != null 
           && initialFormRowsCollection !== this.props.initialFormRowsCollection ) {
        this.setState({ formRowsCollection: initialFormRowsCollection });
      }
    }

    formButtonHandler = (e) => {
      console.log(new Date()); // не забудь убрать эту строку
      e.preventDefault();
    }

    render() {
      const { formButtonHandler } = this;
      const { formRowsCollection } = this.state;
      // const { hintCollection } = this.props;
      if ( formRowsCollection.length != 0 ) {
        return (
          <form action="">
            {/* Поля формы */}
            {
              formRowsCollection.map((item, index) => {
                // console.log(hintCollection);
                // if ( hintCollection.length != 0 ) {
                //   hintCollection.forEach((element) => {
                //     if ( element == item.htmlId ) {
                //       item.isHintActive = true;
                //     }
                //   })
                // }
                return <SFCFormRowConnected key={index} formRow={item} />
              })
            }
            {/* Кнопка формы */}
            <div className={css(styles.formButtonWrapper)}>
              <button className={css(styles.formButton)} onClick={formButtonHandler}>Добавить</button>
            </div>
          </form>
        );  
      } else {
        return (
          <span className={css(errors.errorMessage)}>
            Ошибка! Не удалось получить поля формы.
          </span>
        );
      }
      
    }
  };