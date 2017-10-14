export interface IFormRowModel {
  id: number,
  htmlId: string,
  label: string,
  type: string,
  regExpTemplate: RegExp,
  hint: string,
}

export interface IFieldOptionsModel {
  htmlId: string,
  type: string,
  regExpTemplate: RegExp,
  hint: string,
}