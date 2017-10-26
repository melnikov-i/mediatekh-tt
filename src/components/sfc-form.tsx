/* Импорт библиотек */
import * as React from 'react';
import { css } from 'aphrodite/no-important';

/* Импорт интерфейсов */
import {
  IFormRowsStaticParamsModel,
  // ISelectModel,
  // IUser,
  // IFilledField
} from '@src/models';

/* Импорт коллекций для пунктов полей выбора (Select) */
// import {
//   SelectActiveCollection,
//   SelectRoleCollection,
// } from '@src/collections';

/* Импорт стилей */
import styles from '@src/styles/form-styles';
// import errors from '@src/styles/error-styles';

/* Интерфейс передаваемых в интерфейс параметров */
export interface SFCFormProps {
  formRowsStaticCollection: IFormRowsStaticParamsModel[],
}

/* Компонент */
export const SFCForm: React.SFC<SFCFormProps> = (props) => {
  const { formRowsStaticCollection } = props;

  /* Сообщение об ошибке */
  // const error: JSX.Element = (
  //   <span className={css(errors.errorMessage)}>
  //     Ошибка! Нет информации о поле.
  //   </span>
  // );
  
  /**
   * Создает экземпляр поля по заданному типу. 
   * Конкретизирует поле, придавая ему индивидуальность.
   *
   * @param{string} type - тип поля, полученный из props
   * @return{JSX.Element}
   */
  // const getFormField = (type: string, htmlId: string, value: string): JSX.Element => {
  //   switch ( type ) {
  //     case 'text': /* Поле ввода текстовой информации */
  //       return (
  //         <input
  //           type={type}
  //           className={css(styles.formInput, styles.formInputDefault)}
  //           name={htmlId}
  //           id={htmlId}
  //           value={}
  //         />
  //       );
  //     case 'select': /* Поле выбора значения из списка */
  //       /* Получение результата выполнения функции в константу */
  //       const options: ISelectModel[] = getOptions(htmlId);
  //       if ( options.length != 0 ) {
  //         return (
  //           <select
  //             className={css(styles.formSelect, styles.formInputDefault)}
  //             id={htmlId}>
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

  /**
   * Генерирует пункты для поля с типом select
   *
   * @param{string} htmlId - строковый идентификатор, присвоенный полю
   * @return{ISelectModel[]}
   */
  // const getOptions = (htmlId: string): ISelectModel[] => {
  //   switch ( htmlId ) {
  //     case 'active': return SelectActiveCollection;
  //     case 'role': return SelectRoleCollection;
  //     default: return [];
  //   }
  // };



  return (
    <form action={''}>
      {/* Поля формы */}
      {
        formRowsStaticCollection.map((item, index) => {
          const { id, htmlId, /*type, */label } = item;
          return (
            <div key={id} className={css(styles.formRow)}>
              {/* Метка поля */}
              <label
                htmlFor={htmlId}
                className={css(styles.formLabel)}>
                  {label}
              </label>
              {/* Элемент формы */}
              {/* getFormField(type, htmlId) */}
              {/* Подсказка в случае ввода некорректных данных */}
              {/* customParams.hintContainer */}
            </div>
          );
        })
      }
      {/* Кнопка формы */}
      <div className={css(styles.formButtonWrapper)}>
        <button className={css(styles.formButton)}>{'Добавить'}</button>
      </div>
    </form>
  );
}


//             <div className={css(styles.formRow)}>
//               {/* Метка поля */}
//               <label
//                 htmlFor={htmlId}
//                 className={css(styles.formLabel)}>
//                   {label}
//               </label>
//               {/* Элемент формы */}
//               { formField(type) }
//               {/* Подсказка в случае ввода некорректных данных */}
//               { customParams.hintContainer }
//             </div>

            // <SFCFormRowConnected
            //   key={index}
            //   formRow={item}
            // />