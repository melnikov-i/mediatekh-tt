import { ISelectModel } from '@src/models';

export const SelectRoleCollection: ISelectModel[] = [
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

export const SelectActiveCollection: ISelectModel[] = [
  {
    value: '1',
    label: 'Yes',
  },
  {
    value: '0',
    label: 'No',
  }
];