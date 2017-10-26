import * as React from 'react';
import { css } from 'aphrodite/no-important';

/* Импорт интерфейсов */
import { IFormRowsStaticParamsModel, IFormRowsDynamicParamsModel } from '@src/models';

/* Импорт стиля по умолчанию и для сообщения об ошибке */
import styles from '@src/styles/form-styles';
// import errors from '@src/styles/error-styles';

/* Интерфейс передаваемых в компонент параметров */
export interface SFCFormRowProps {
  items: IFormRowsStaticParamsModel, // Получены от родительского компонента
  formRowsDynamicCollection: IFormRowsDynamicParamsModel[],
  addValueIntoDynamicCollection: (payload: {id: string, value: string}) => any
}

/* Компонент */
export const SFCFormRow: React.SFC<SFCFormRowProps> = (props) => {
  const { id, label } = props.items;
  const { formRowsDynamicCollection, addValueIntoDynamicCollection } = props;

  const updateInputHandler = (e) => {
    addValueIntoDynamicCollection({id: id, value: e.currentTarget.value});
  }



  const getInput = (): JSX.Element => {
    return (
      <input
        type={'text'}
        className={css(styles.formInput)}
        name={id}
        id={id}
        value={(formRowsDynamicCollection.length > 0) ? formRowsDynamicCollection[id].value : ''}
        onChange={updateInputHandler}
      />
    );
  }


  return (
    <div className={css(styles.formRow)}>
      {/* Метка поля */}
      <label
        htmlFor={id}
        className={css(styles.formLabel)}>
          {label}
      </label>
      {/* Элемент формы */
        getInput()
      /* Подсказка в случае ввода некорректных данных */

      }
    </div>
  );
};