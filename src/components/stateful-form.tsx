import * as React from 'react';
import { css } from 'aphrodite/no-important';
/* Импорт интерфейсов */
import {
  IFormRowModel,
  IUser,
  IFilledField
} from '@src/models';
/* Импорт дочернего компонента */
import SFCFormRowConnected from '@src/connected/sfc-form-row-connected.usage';
/* Импорт стиля по умолчанию и для сообщения об ошибке */
import styles from '@src/styles/form-styles';
import errors from '@src/styles/error-styles';

/* Интерфейс передаваемых в компонент параметров */
export interface StatefulFormProps {
  initialFormRowsCollection?: IFormRowModel[], // Параметры полей формы
  userCollection: IUser[], // чтение коллекции (временное?)
  filledFieldsCollection: IFilledField[], // Массив заполненных полей формы
  filledField: (payload: IFilledField) => any, // Передает в Store заполенную строку
  clearField: () => any, // Очищает массив заполненных полей формы в reducer
  addUserInCollection: (payload: IUser) => any, // Добавляет верно заполненную форму в колекцию
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
    
    /**
     * Обработчик события нажатия кнопки "Добавить"
     */
    formButtonHandler = (e) => {
      e.preventDefault(); // Отмена действия элемента по умолчанию
      /* Деструктуризация данных, полученных из props */
      const { 
        userCollection,
        filledFieldsCollection,
        filledField,
        clearField,
        addUserInCollection,
      } = this.props;
      
      /* Деструктуризация данных, полученных из State ###### */
      const { formRowsCollection } = this.state;
      
      const checkFields = (): {valid: boolean, items: IUser} => {
        let items: IUser | any = {};
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
          items['active'] = true;
          itemsCount++;
        }

        if ( itemsCount == formRowsCollection.length ) {
          items['registered_on'] = new Date();
          valid = true;
        } else {
          valid = false;
        }

        return {valid, items};
      }      
      
      const fieldsAreChecked = checkFields();
      
      if ( fieldsAreChecked.valid ) {
        addUserInCollection(fieldsAreChecked.items);
        clearField();
      }

      console.log('checkFields', fieldsAreChecked);
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