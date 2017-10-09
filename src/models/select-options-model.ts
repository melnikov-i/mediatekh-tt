export interface ISelectOptions {
  value: string,
  label: string,
}

export const Options: { RoleOptions: ISelectOptions[], ActiveOptions: ISelectOptions[] } = {
  RoleOptions: [
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
  ],
  ActiveOptions: [
    {
      value: '1',
      label: 'Yes',
    },
    {
      value: '0',
      label: 'No',
    }
  ]
}