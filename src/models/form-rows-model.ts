export interface IFormRow {
  id: number,
  htmlId: string,
  label: string,
  type: string,
  regExpTemplate: RegExp,
  hint: string,
}

export interface IFieldOptions {
  htmlId: string,
  type: string,
}