/* Модель всех параметров строки формы */
export interface IFormRowsStaticParamsModel {
  id: number,
  htmlId: string,
  label: string,
  type: string,
  regExpTemplate: RegExp,
  hint: string,
}

export interface IFormRowsDynamicParamsModel {
  htmlId: string,
  type: string,
  isCorrect: boolean,
  value: string | boolean | number,  
}




/* Это на удаление */
export interface IFilledField {
  htmlId: string,
  isCorrect: boolean,
  value: string | boolean | number,
}

export interface ICustomParams {
  borderStyle: {},
  hintContainer: JSX.Element | null,
}
