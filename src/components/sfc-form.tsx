/* Импорт библиотек */
import * as React from 'react';
import { css } from 'aphrodite/no-important';

/* Импорт интерфейсов */
import {
  IFormRowsStaticParamsModel,
} from '@src/models';

/* Импорт дочернего компонента */
import SFCFormRowConnected from '@src/connected/sfc-form-row-connected.usage';

/* Импорт стилей */
import styles from '@src/styles/form-styles';
import errors from '@src/styles/error-styles';

/* Интерфейс передаваемых в интерфейс параметров */
export interface SFCFormProps {
  formRowsStaticCollection: IFormRowsStaticParamsModel[], // Прокидывается в дочерний компонент
  addFilledFieldsInUserCollection: (payload: boolean) => any,
}


/* Компонент */
export const SFCForm: React.SFC<SFCFormProps> = (props) => {
  /* Деструктуризация props, в котором лежит коллекция всех полей формы */
  const { 
    formRowsStaticCollection,
    addFilledFieldsInUserCollection
  } = props;

  /* Обработчик события нажатия кнопки "Добавить" */
  const formButtonHandler = (e) => {
    e.preventDefault();
    addFilledFieldsInUserCollection(true);
  }
  
  /* Проверка содержимого коллекции */
  if ( formRowsStaticCollection.length != 0 ) {
    /* В случае успеха генерирует поля формы */
    return (
      <form action={''}>
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
        {/* Кнопка формы */console.log('[RENDER]')}
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