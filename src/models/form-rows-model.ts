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
}

export interface IFieldOptionsModel {
  htmlId: string,
  type: string,
  regExpTemplate: RegExp,
  hint: string,
  isHintActive: boolean,
}