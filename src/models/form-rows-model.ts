/* Модель всех параметров строки формы */
export interface IFormRowsStaticParamsModel {
  id: string,
  label: string,
  type: string,
  regExpTemplate: RegExp,
  hint: string,
  selectOptions?: ISelectModel[],
}

export interface IFormRowsDynamicParamsModel {
  value: string,
  isCorrect?: boolean,
}

export interface ISelectModel {
  value: string,
  label: string,
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
