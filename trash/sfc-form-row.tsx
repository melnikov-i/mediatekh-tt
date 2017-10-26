import * as React from 'react';
import { css } from 'aphrodite/no-important';

/* Импорт интерфейсов */
import { 
  IFormRowModel,
  IFilledField,
  ISelectModel,
  ICustomParams,
} from '@src/models';

/* Импорт коллекций для пунктов полей выбора (Select) */
import {
  SelectActiveCollection,
  SelectRoleCollection,
} from '@src/collections';

/* Импорт стиля по умолчанию и для сообщения об ошибке */
import styles from '@src/styles/form-row-styles';
import errors from '@src/styles/error-styles';

/* Интерфейс передаваемых в компонент параметров */
export interface SFCFormRowProps {
  items: IFormRowModel, // Получены от родительского компонента
  filledFieldsCollection: IFilledField[], // Получены из Store
  filledField: (payload: IFilledField) => any, // Для передачи значений в Store
}

/* Компонент */
export const SFCFormRow: React.SFC<SFCFormRowProps> = (props) => {
  /* Деструктуризация данных, полученных от родительского компонента */
  const { htmlId, label, type, regExpTemplate, hint } = props.items;

  /* Деструктуризация данных из Store */
  const { filledFieldsCollection, filledField } = props;

  /* Сообщение об ошибке */
  const error: JSX.Element = (
    <span className={css(errors.errorMessage)}>
      Ошибка! Нет информации о поле.
    </span>
  );

  /**
   * Генерирует индивидуальные параметры отображения поля:
   *   1. Меняет цвет рамки в зависимости от корректности введенной информации
   *   2. Включает и выключает отображение подсказки в зависимости 
   *      от корректности введенной информации.
   * 
   * @return{ICustomParams}
   */
  const getCustomParams = (): ICustomParams => {
    let index: string = ''; // Индекс поля коллекции заполненных полей

    const items: ICustomParams = {
      borderStyle: {},
      hintContainer: null,
    }

    /* Если такой же индекс поля есть в коллекции, получить этот индекс в переменную */
    for ( let i in filledFieldsCollection ) {
      if ( filledFieldsCollection[i].htmlId == htmlId ) index = i;
    }
    /* Индекс получен или по умолчанию. Выполнение декорирования поля. */
    if ( index !== '' ) {
      if ( filledFieldsCollection[index].isCorrect ) {
        /* Поле заполнено верно */
        items.borderStyle = styles.formInputGreen;
        items.hintContainer =  null;
      }
      else {
        /* Поле заполнено неверно */
        items.borderStyle = styles.formInputRed;
        items.hintContainer = (<span className={css(styles.formHint)}>{hint}</span>);
      }
    } else {
      /* Поле не активировалось */
      items.borderStyle = styles.formInputDefault;
    }

    return items;
  };
  /* Получение результата выполнения функции в константу */
  const customParams: ICustomParams = getCustomParams();

  /**
   * Обработчик события редактирования поля формы.
   */
  const fieldHandler = (e) => {
    if ( regExpTemplate.test(e.target.value) ) {
      filledField({ htmlId: htmlId, isCorrect: true, value: e.target.value });
    } else {
      filledField({ htmlId: htmlId, isCorrect: false, value: e.target.value });
    }
  }
  
  /**
   * Создает экземпляр поля по заданному типу. 
   * Конкретизирует поле, придавая ему индивидуальность.
   *
   * @param{string} type - тип поля, полученный из props
   * @return{JSX.Element}
   */
  const formField = (type: string): JSX.Element => {
    switch ( type ) {
      case 'text': /* Поле ввода текстовой информации */
        return (
          <input
            type={type}
            className={css(styles.formInput, customParams.borderStyle)}
            name={htmlId}
            id={htmlId}
            onBlur={fieldHandler}
          />
        );
      case 'select': /* Поле выбора значения из списка */
        /**
         * Генерирует пункты для поля с типом select
         *
         * @param{string} htmlId - строковый идентификатор, присвоенный полю
         * @return{ISelectModel[]}
         */
        const getOptions = (htmlId: string): ISelectModel[] => {
          switch ( htmlId ) {
            case 'active': return SelectActiveCollection;
            case 'role': return SelectRoleCollection;
            default: return [];
          }
        };
        
        /* Получение результата выполнения функции в константу */
        const options = getOptions(htmlId);

        if ( options.length != 0 ) {
          return (
            <select
              className={css(styles.formSelect, customParams.borderStyle)}
              id={htmlId}
              onBlur={fieldHandler}>
              {
                options.map((item, index) => {
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
          return error;
        }      
      default: return error;
    }    
  };

  return (
    <div className={css(styles.formRow)}>
      {/* Метка поля */}
      <label
        htmlFor={htmlId}
        className={css(styles.formLabel)}>
          {label}
      </label>
      {/* Элемент формы */}
      { formField(type) }
      {/* Подсказка в случае ввода некорректных данных */}
      { customParams.hintContainer }
    </div>
  );
};