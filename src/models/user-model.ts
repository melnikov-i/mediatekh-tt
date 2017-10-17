// Модель User
export interface IUser {
  first_name: string,
  last_name: string,
  active: boolean,
  age: number,
  login: string,
  password: string,
  role: number,
  registered_on: number,
}