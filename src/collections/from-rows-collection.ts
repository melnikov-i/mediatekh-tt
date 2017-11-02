import {
  ISelectModel,
  IFormRowsStaticParamsModel,
  IFormRowsDynamicParamsModel,
} from '@src/models';

export const ActiveSelectOptions: ISelectModel[] = [
  {
    value: '1',
    label: 'Yes',
  },
  {
    value: '0',
    label: 'No'
  },
];

export const RoleSelectOptions: ISelectModel[] = [
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
  },
];

export const FormRowsCollection: IFormRowsStaticParamsModel[] = [
  {
    id: 'first_name',
    label: 'Имя',
    type: 'text',
    regExpTemplate: /^.{3,15}$/,
    hint: 'от 3 до 15 символов',
  }, {
    id: 'last_name',
    label: 'Фамилия',
    type: 'text',
    regExpTemplate: /^.{3,25}$/,
    hint: 'от 3 до 25 символов',
  }, {
    id: 'active',
    label: 'Активен',
    type: 'select',
    regExpTemplate: /^[01]{1}$/,
    hint: '',
    selectOptions: ActiveSelectOptions,
  }, {
    id: 'age',
    label: 'Возраст',
    type: 'text',
    regExpTemplate: /^(5[0-5]|[2-4][0-9]|1[89])$/,
    hint: 'от 18 до 55 лет',
  }, {
    id: 'login',
    label: 'Логин',
    type: 'text',
    regExpTemplate: /^[a-z0-9_-]+$/,
    hint: 'a-z, 0-9, \'_\' и \'*\'',
  }, {
    id: 'password',
    label: 'Пароль',
    type: 'text',
    regExpTemplate: /^.{8,}$/,
    hint: 'Минимум 8 символов',
  }, {
    id: 'role',
    label: 'Роль',
    type: 'select',
    regExpTemplate: /^[1-4]{1}$/,
    hint: 'Выберите',
    selectOptions: RoleSelectOptions,
  }
];

const doFormRowsDynamicCollection = 
(FormRowsCollection: IFormRowsStaticParamsModel[]): IFormRowsDynamicParamsModel => {
  let out = {};
  for ( let i in FormRowsCollection ) {
    let defaultValue: string = '';
    switch ( FormRowsCollection[i].id ) {
      case 'active': defaultValue = '1'; break;
      case 'role': defaultValue = '0'; break;
      default: defaultValue = '';
    }
    out = {
      ...out,
      [FormRowsCollection[i].id]: {
        value: defaultValue,
        isCorrect: undefined,  
      },
    };
  }
  return out;
};

export const FormRowsDynamicCollection = 
  doFormRowsDynamicCollection(FormRowsCollection);