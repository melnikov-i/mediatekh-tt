import * as React from 'react';
import { css } from 'aphrodite/no-important';

import {
  IFormRowModel,
  IUser,
  IFilledField
} from '@src/models';
import SFCFormRowConnected from '@src/connected/sfc-form-row-connected.usage';
import styles from '@src/styles/form-styles';
import errors from '@src/styles/error-styles';

export interface StatefulFormProps {
  initialFormRowsCollection?: IFormRowModel[],
  userCollection: IUser[], // чтение коллекции (временное)
  filledFieldsCollection: IFilledField[],
  filledField: (payload: IFilledField) => any,
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
      e.preventDefault();
      console.log(new Date()); // не забудь убрать эту строку
      const { 
        userCollection,
        filledFieldsCollection,
        filledField,
      } = this.props;
      console.log('======');
      console.log('filledFieldCollection:', filledFieldsCollection);

      const { formRowsCollection } = this.state;
      
      const checkFields = () => {
        let items = {};
        let itemsCount: number = 0;
        let valid: boolean;
        formRowsCollection.forEach((formRow) => {
          /* Для каждого элемента коллекции известных полей */
          if ( filledFieldsCollection.length != 0 ) {
            /* Если количество заполненных полей не равно 0 */
            filledFieldsCollection.forEach((field) => {
              /* Найти соответствующий элемент в коллекции заполненных полей */
              if ( formRow.htmlId == field.htmlId ) {
                /* Если элемент найден */
                if ( field.isCorrect == true ) {
                  /* И если он заполнен корректно, 
                  добавить элемент в локальную коллекцию */
                  items[field.htmlId] = field.value;
                  itemsCount++;
                }
              } else {
                /* Элемента в коллекции заполненных полей нет, но это
                элемент active */
                // if ( formRow.htmlId == 'active' ) {
                //   filledField({
                //     htmlId: formRow.htmlId,
                //     isCorrect: true,
                //     value: '1',
                //   });
                // }
              }
            });
          } else {
              filledField({
                htmlId: formRow.htmlId,
                isCorrect: false,
                value: '' 
              });              
          }
        });
        
        if ( !items['active'] ) {
          filledField({
            htmlId: 'active',
            isCorrect: true,
            value: '1',
          });
          items['active'] = '1';
          itemsCount++;
        }
        
        if ( itemsCount == formRowsCollection.length ) valid = true;
        else valid = false;

        return {valid, items};
      }
      
      console.log('checkFields', checkFields());

      console.log('userCollection:', userCollection);
    }

    render() {
      const { formButtonHandler } = this;
      const { formRowsCollection } = this.state;
      if ( formRowsCollection.length != 0 ) {
        return (
          <form action="">
            {/* Поля формы */}
            {
              formRowsCollection.map((item, index) => {
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