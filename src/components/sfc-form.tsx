/* Импорт библиотек */
import * as React from 'react';
import { css } from 'aphrodite/no-important';

/* Импорт интерфейсов */
import {
  IFormRowsStaticParamsModel,
  IFormRowsDynamicParamsModel,
  IFormRowsDynamicDispatchModel,
} from '@src/models';

/* Импорт дочернего компонента */
import SFCFormRowConnected from 
'@src/connected/sfc-form-row-connected.usage';

/* Импорт стилей */
import styles from '@src/styles/form-styles';
import errors from '@src/styles/error-styles';

/* Интерфейс передаваемых в интерфейс параметров */
export interface SFCFormProps {
  formRowsStaticCollection: IFormRowsStaticParamsModel[],
  formRowsDynamicCollection: IFormRowsDynamicParamsModel,
  addFilledFieldsInUserCollection: 
  (payload: IFormRowsDynamicParamsModel) => any,
  addValueInDynamicCollection: 
  (payload: IFormRowsDynamicDispatchModel) => any,
}


/* Компонент */
export const SFCForm: React.SFC<SFCFormProps> = (props) => {
  /* Деструктуризация props, в котором лежит коллекция полей формы */
  const { 
    formRowsStaticCollection,
  } = props;

  /* Обработчик события нажатия кнопки "Добавить" */
  const formButtonHandler = (e) => {
    e.preventDefault();
    const {
      formRowsDynamicCollection,
      addValueInDynamicCollection,
      addFilledFieldsInUserCollection,
    } = props;


    let valid: boolean = true;

    for ( let i in formRowsDynamicCollection ) {
      if ( i !== 'active' ) {
        if ( formRowsDynamicCollection[i].isCorrect === undefined ) {
          valid = false;
          addValueInDynamicCollection({
            id: i,
            value: '',
            isCorrect: false,
          });
        } else if ( formRowsDynamicCollection[i].isCorrect === false ) {
          valid = false;
        }
      } else {
        if ( formRowsDynamicCollection['active'].isCorrect === undefined ) {
          addValueInDynamicCollection({
            id: 'active',
            value: '1',
            isCorrect: true,
          });
        }
      }
    }

    if ( valid ) {
      addFilledFieldsInUserCollection(formRowsDynamicCollection);
    }
  }
  
  /* Проверка содержимого коллекции */
  if ( formRowsStaticCollection.length != 0 ) {
    /* В случае успеха генерирует поля формы */
    return (
      <form action={''}>
        {console.log('[FORM]')}
        {/* Поля формы */
          formRowsStaticCollection.map((item) => {
            return (
              <SFCFormRowConnected
                key={item.id}
                formRow={item}
              />
            );
          })
        }
        {/* Кнопка формы */}
        <div className={css(styles.formButtonWrapper)}>
          <button
            className={css(styles.formButton)}
            onClick={formButtonHandler}>
              {'Добавить'}
            </button>
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