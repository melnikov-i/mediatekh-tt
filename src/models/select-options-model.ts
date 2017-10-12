export interface ISelectOption {
  value: string,
  label: string,
}

export interface ISelectFieldId {
  htmlId: string,
}

export interface ISelectProperties {
  options: ISelectOption[],
  htmlId: string,
}

export const RoleOptions: ISelectOption[] = [
  {
    value: '0',
    label: 'Choose',
  },
  {
    value: '1',
    label: 'Administrator',
  },
  {
    value: '2',
    label: 'Technician',
  },
  {
    value: '3',
    label: 'Manager',
  },
  {
    value: '4',
    label: 'Supervisor',
  }
];

export const ActiveOptions: ISelectOption[] = [
  {
    value: '1',
    label: 'Yes',
  },
  {
    value: '0',
    label: 'No',
  }
];