export type ITableRow = string[];

export interface ITableHeader {
  header: string,
}

export interface ISortingParamsModel {
  field: string,
  direction: boolean,
}