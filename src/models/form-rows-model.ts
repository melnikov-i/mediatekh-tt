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

export interface IFormRowsDynamicDispatchModel {
  id: string,
  value: string,
  isCorrect?: boolean,
}

export interface ISelectModel {
  value: string,
  label: string,
}

export interface IOptionsModel {
  role: ISelectModel,
  active: ISelectModel,
}