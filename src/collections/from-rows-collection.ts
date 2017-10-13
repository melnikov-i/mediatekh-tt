import { IFormRow } from '@src/models';

export const FormRowsCollection: IFormRow[] = [
  {
    id: 0,
    htmlId: 'first_name',
    label: 'Имя',
    type: 'text',
    hint: 'от 3 до 15 символов'
  }, {
    id: 1,
    htmlId: 'last_name',
    label: 'Фамилия',
    type: 'text',
    hint: 'от 3 до 25 символов'
  }, {
    id: 2,
    htmlId: 'active',
    label: 'Активен',
    type: 'select',
    hint: ''
  }, {
    id: 3,
    htmlId: 'age',
    label: 'Возраст',
    type: 'text',
    hint: 'от 18 до 55 лет'
  }, {
    id: 4,
    htmlId: 'login',
    label: 'Логин',
    type: 'text',
    hint: 'a-z, 0-9, \'_\' и \'*\''
  }, {
    id: 5,
    htmlId: 'password',
    label: 'Пароль',
    type: 'text',
    hint: 'Минимум 8 символов'
  }, {
    id: 6,
    htmlId: 'role',
    label: 'Роль',
    type: 'select',
    hint: 'Выберите'
  }
];