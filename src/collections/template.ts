import { IUser } from '@src/models';

export const UserCollectionTemplate: IUser[] = [
  {
    first_name: 'Ralph',
    last_name: 'Roberts',
    active: true,
    age: 35,
    login: 'robertsr',
    password: 'insomnia',
    role: 1,
    registered_on: 1509364992596,
  },
  {
    first_name: 'Bill',
    last_name: 'McGovern',
    active: true,
    age: 45,
    login: 'mcgovernw',
    password: 'professor',
    role: 2,
    registered_on: 1509364992596,
  },
  {
    first_name: 'Lois',
    last_name: 'Chasse',
    active: false,
    age: 55,
    login: 'chassel',
    password: 'mydearralph',
    role: 3,
    registered_on: 1509364992596,
  },
];