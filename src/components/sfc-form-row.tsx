import * as React from 'react';
import { css } from 'aphrodite/no-important';

/* Импорт интерфейсов */
import {
  IFormRowsStaticParamsModel,
  IFormRowsDynamicParamsModel,
  IFormRowsDynamicDispatchModel,
} from '@src/models';

/* Импорт стиля по умолчанию и для сообщения об ошибке */
import styles from '@src/styles/form-styles';
import errors from '@src/styles/error-styles';

/* Интерфейс передаваемых в компонент параметров */
export interface SFCFormRowProps {
  items: IFormRowsStaticParamsModel,
  formRowsDynamicCollection: IFormRowsDynamicParamsModel,
  addValueInDynamicCollection: 
  (payload: IFormRowsDynamicDispatchModel) => any,
}


/* Компонент */
export const SFCFormRow: React.SFC<SFCFormRowProps> = (props) => {
  const { id, label, type, hint, regExpTemplate } = props.items;
  const { addValueInDynamicCollection } = props;
  const { value, isCorrect } = props.formRowsDynamicCollection;

  /* Выводит сообщение об ошибке при рендеринге элемента формы */
  const getError = (): JSX.Element => (
      <span className={css(errors.errorMessage)}>
        Ошибка! Нет информации о поле.
      </span>
    )

  /* Определяет цвет рамки при редактировании ее содержимого */
  const getCurrentStyle = () => {
    switch ( isCorrect ) {
      case true: return styles.formInputGreen;
      case false: return styles.formInputRed;
      default: return styles.formInputDefault;
    }
  }

  /* Отрисовывает поле ввода */
  const getInput = (): JSX.Element => {
    return (
      <input
        type={'text'}
        className={css(styles.formInput, getCurrentStyle())}
        name={id}
        id={id}
        onChange={updateInputHandler}
        onBlur={fieldHandler}
        value={value}
      />
    );
  }

  /* Отрисовывает поле выбора */
  const getSelect = (): JSX.Element => {
    const { selectOptions } = props.items;
    if ( selectOptions !== undefined && selectOptions.length != 0 ) {
      return (
        <select
          className={css(styles.formSelect, getCurrentStyle())}
          id={id}
          onBlur={fieldHandler}>
            {
              selectOptions.map((item, index) => {
                return (
                  <option
                    key={index}
                    className={css(styles.formOption)}
                    value={item.value}>
                      {item.label}
                  </option>
                );
              })
            }
        </select>
      );
    } else {
      return getError();
    }
  }

  /* Определяет отрисовываемый элемент по его типу */
  const getFormElement = (): JSX.Element => {
    switch ( type ) {
      case 'text': return getInput();
      case 'select': return getSelect();
      default: return getError();
    }
  }

  /* Отрисовывает подсказку при необходимости */
  const getHint = (): JSX.Element | null => {
    if ( isCorrect === false ) {
      return <span className={css(styles.formHint)}>{hint}</span>;
    } else {
      return null;
    }
  }

  /* Отправляет в reducer введенные в поле символы */
  const updateInputHandler = (e) => {
    addValueInDynamicCollection({
      id: id,
      value: e.currentTarget.value,
      isCorrect: undefined,
    });
  }

  /* Обработчик события редактирования поля формы */
  const fieldHandler = (e) => {
    if ( regExpTemplate.test(e.target.value) ) {
      addValueInDynamicCollection({
        id: id,
        value: e.target.value,
        isCorrect: true,
      });
    } else {
      addValueInDynamicCollection({
        id: id,
        value: e.target.value,
        isCorrect: false,
      });
    }
  }

  return (
    <div className={css(styles.formRow)}>
      {/* Метка поля */console.log('render:', id)}
      <label
        htmlFor={id}
        className={css(styles.formLabel)}>
          {label}
      </label>
      {/* Элемент формы */
        getFormElement()}
      {/* Подсказка в случае ввода некорректных данных */
        getHint()
      }
    </div>
  );
};