import { IFormRowModel } from '@src/models';

export const FormRowsCollection: IFormRowModel[] = [
  {
    id: 0,
    htmlId: 'first_name',
    label: 'Имя',
    type: 'text',
    regExpTemplate: /^.{3,15}$/,
    hint: 'от 3 до 15 символов',
    isHintActive: false,
  }, {
    id: 1,
    htmlId: 'last_name',
    label: 'Фамилия',
    type: 'text',
    regExpTemplate: /^.{3,25}$/,
    hint: 'от 3 до 25 символов',
    isHintActive: false,
  }, {
    id: 2,
    htmlId: 'active',
    label: 'Активен',
    type: 'select',
    regExpTemplate: /^[01]{1}$/,
    hint: '',
    isHintActive: false,
  }, {
    id: 3,
    htmlId: 'age',
    label: 'Возраст',
    type: 'text',
    regExpTemplate: /^(5[0-5]|[2-4][0-9]|1[89])$/,
    hint: 'от 18 до 55 лет',
    isHintActive: false,
  }, {
    id: 4,
    htmlId: 'login',
    label: 'Логин',
    type: 'text',
    regExpTemplate: /^[a-z0-9_-]+$/,
    hint: 'a-z, 0-9, \'_\' и \'*\'',
    isHintActive: false,
  }, {
    id: 5,
    htmlId: 'password',
    label: 'Пароль',
    type: 'text',
    regExpTemplate: /^.{8,}$/,
    hint: 'Минимум 8 символов',
    isHintActive: false,
  }, {
    id: 6,
    htmlId: 'role',
    label: 'Роль',
    type: 'select',
    regExpTemplate: /^[1-4]{1}$/,
    hint: 'Выберите',
    isHintActive: false,
  }
];