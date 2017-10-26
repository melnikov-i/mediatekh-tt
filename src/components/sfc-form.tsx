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
  formRowsStaticCollection: IFormRowsStaticParamsModel[],
}

/* Компонент */
export const SFCForm: React.SFC<SFCFormProps> = (props) => {
  /* Деструктуризация props, в котором лежит коллекция всех полей формы */
  const { formRowsStaticCollection, } = props;

  /* Обработчик события нажатия кнопки "Добавить" */
  const formButtonHandler = (e) => {
    e.preventDefault();
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
        {/* Кнопка формы */}
        <div className={css(styles.formButtonWrapper)}>
          <button
            className={css(styles.formButton)}
            onClick={formButtonHandler}>
              Добавить
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





  /* Сообщение об ошибке */
  // const error: JSX.Element = (
  //   <span className={css(errors.errorMessage)}>
  //     Ошибка! Нет информации о поле.
  //   </span>
  // );
  
  // const customStyle = (isCorrect: boolean | undefined): any => {
  //   if ( isCorrect != undefined ) {
  //     if ( isCorrect ) {
  //       return styles.formInputGreen;
  //     } else {
  //       return styles.formInputRed;
  //     }
  //   }
  // };

  // const updateInputHandler = (e) => {
  //   addInFormRowsDynamic([{id, value}]);
  // }

  // const getInput = (formRowsDynamicCollection: IFormRowsDynamicParamsModel): JSX.Element => {
  //   const { id, value, isCorrect } = formRowsDynamicCollection;
  //   return (
  //     <input
  //       type={'text'}
  //       className={css(styles.formInput, customStyle(isCorrect))}
  //       name={id}
  //       id={id}
  //       value={value}
  //       onChange={updateInputHandler}
  //     />
  //   );
  // }

    // const getFormElement = (type: string, id: string, value: string): JSX.Element => {
  //   switch ( type ) {
  //     case 'text': /* Поле ввода текстовой информации */
  //       return (
  //         <input
  //           type={type}
  //           className={css(styles.formInput, styles.formInputDefault)}
  //           name={id}
  //           id={id}
  //           value={}
  //         />
  //       );
  //     case 'select': /* Поле выбора значения из списка */
  //       /* Получение результата выполнения функции в константу */
  //       const options: ISelectModel[] = getOptions(id);
  //       if ( options.length != 0 ) {
  //         return (
  //           <select
  //             className={css(styles.formSelect, styles.formInputDefault)}
  //             id={id}>
  //             {
  //               options.map((item, index) => {
  //                 return (
  //                   <option
  //                     key={index}
  //                     className={css(styles.formOption)}
  //                     value={item.value}>
  //                       {item.label}
  //                   </option>
  //                 );
  //               })
  //             }
  //           </select>
  //         );  
  //       } else {
  //         return error;
  //       }      
  //     default: return error;
  //   }
  // }