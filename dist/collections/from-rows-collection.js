"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormRowsCollection = [
    {
        id: 0,
        htmlId: 'first_name',
        label: 'Имя',
        type: 'text',
        regExpTemplate: /^.{3,15}$/,
        hint: 'от 3 до 15 символов',
    }, {
        id: 1,
        htmlId: 'last_name',
        label: 'Фамилия',
        type: 'text',
        regExpTemplate: /^.{3,25}$/,
        hint: 'от 3 до 25 символов',
    }, {
        id: 2,
        htmlId: 'active',
        label: 'Активен',
        type: 'select',
        regExpTemplate: /^[01]{1}$/,
        hint: '',
    }, {
        id: 3,
        htmlId: 'age',
        label: 'Возраст',
        type: 'text',
        regExpTemplate: /^(5[0-5]|[2-4][0-9]|1[89])$/,
        hint: 'от 18 до 55 лет',
    }, {
        id: 4,
        htmlId: 'login',
        label: 'Логин',
        type: 'text',
        regExpTemplate: /^[a-z0-9_-]+$/,
        hint: 'a-z, 0-9, \'_\' и \'*\'',
    }, {
        id: 5,
        htmlId: 'password',
        label: 'Пароль',
        type: 'text',
        regExpTemplate: /^.{8,}$/,
        hint: 'Минимум 8 символов',
    }, {
        id: 6,
        htmlId: 'role',
        label: 'Роль',
        type: 'select',
        regExpTemplate: /^[1-4]{1}$/,
        hint: 'Выберите',
    }
];
//# sourceMappingURL=from-rows-collection.js.map