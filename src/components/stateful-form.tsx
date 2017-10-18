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
  addUserInCollection: (payload: IUser) => any,
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
        // addUserInCollection,
      } = this.props;
      
      const { formRowsCollection } = this.state;
      
      const checkFields = (): {valid: boolean, items: IUser} => {
        let items: IUser | {} = {};
        let itemsCount: number = 0;
        let valid: boolean;
        formRowsCollection.forEach((formRow) => {
          /* Для каждого элемента коллекции известных полей */
          if ( filledFieldsCollection.length != 0 ) {
            /* Если количество заполненных полей не равно 0 */
            let itemFound: boolean = false;
            filledFieldsCollection.forEach((field) => {
              /* Найти соответствующий элемент в коллекции заполненных полей */
              if ( formRow.htmlId == field.htmlId ) {
                /* Если элемент найден */
                itemFound = true;
                if ( field.isCorrect == true ) {
                  /* И если он заполнен корректно, 
                  добавить элемент в локальную коллекцию */
                  items[field.htmlId] = field.value;
                  itemsCount++;
                }
              }
            });
            /* Если элемент не найден - поле не заполнялось */
            if ( !itemFound ) {
              filledField({
                htmlId: formRow.htmlId,
                isCorrect: false,
                value: '' 
              });              
            }
          } else {
            /* Каждое незаполненное поле */
            filledField({
              htmlId: formRow.htmlId,
              isCorrect: false,
              value: '' 
            });              
          }
        });
        /* Все заполненные поля обработаны, но среди них нет active */
        if ( !items['active'] ) {
          /* поле active по умолчанию true */
          filledField({
            htmlId: 'active',
            isCorrect: true,
            value: '1',
          });
          items['active'] = '1';
          itemsCount++;
        }

        if ( itemsCount == formRowsCollection.length ) {
          items['registered_on'] = ''
          valid = true;
        } else {
          valid = false;
        }

        // И, наконец, вы можете определить своего защитника, используя предикат. 
        // Этот вариант предпочтительнее, если вы часто будете просить свою рыбку 
        // плавать, а птичку – летать. В коде ниже происходит буквально следующее: 
        // так как на вход функции может прийти экземпляр класса Fish или Bird – 
        // компилятор затрудняется определить какой класс ему использовать для 
        // проверки кода. То есть, конструкция instanceof внутри функции ему ничего 
        // не говорит – это простое возвращение true или false. Однако, так как мы 
        // указали предикат pet is Fish, компилятор начинает догадоваться, что, если
        // функция возвращает true, то сейчас он имеет место с экземпляром класса Fish,
        // иначе, если false – экземпляром класса Bird.

        //   function isFish(pet: Fish | Bird): pet is Fish {
        //       return pet instanceof Fish;
        //   }

        //   if (isFish(pet)) {
        //       pet.swim();
        //   } else {
        //       pet.fly();
        //   }


        return {valid, items};
      }

      const fieldsAreChecked = checkFields();
      
      if ( fieldsAreChecked.valid ) {
        // const user = fieldsAreChecked.items;

        // console.log(addUserInCollection(user))
      //   const items = {...fieldsAreChecked.items, , registered_on: 0};
      //   const user: IUser = <IUser>items;
        
      //   addUserInCollection(user);
      // console.log('user:', user);
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