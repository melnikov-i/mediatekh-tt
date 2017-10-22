/* Модель всех параметров строки формы */
export interface IFormRowModel {
  id: number,
  htmlId: string,
  label: string,
  type: string,
  regExpTemplate: RegExp,
  hint: string,
}

export interface IFilledField {
  htmlId: string,
  isCorrect: boolean,
  value: string | boolean | number,
}

export interface ICustomParams {
  borderStyle: {},
  hintContainer: JSX.Element | null,
  clearFieldValue: boolean,
}
