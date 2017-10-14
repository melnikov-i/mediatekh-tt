export interface ISelectModel {
  value: string,
  label: string,
}

export interface ISelectFieldId {
  htmlId: string,
}

export interface ISelectProperties {
  options: ISelectModel[],
  htmlId: string,
}