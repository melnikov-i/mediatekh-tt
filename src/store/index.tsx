/**
 * Store хранит состояние приложения. Единственный путь изменить
 * store - это отправить действие (dispatch action).
 *
 * Store - это не класс, это обычный объект с несколькими методами:
 *   - getState() - позволяет получить состояние приложения
 *   - dispatch(action) - позволяет обновить состояние, путем вызова действия
 *   - subscribe(listener) - регистрирует слушателей
 *   - replaceReducer(nextReducer)
 *
 * createStore( () => {}, {} ) - принимает один обязательный аргумент 
 * (функцию reducer) и пару необязательных: начальное состояние и "усилители".
 *
 * Создадим функцию конфигурации Store. Для этого необходимо предварительно:
 *   - выполнить импорт корневого редьюсера
 */

import { createStore } from 'redux';
import rootReducer from '../reducers';




function configureStore(initialState?) {
  const store = createStore(rootReducer, initialState);
  return store;
}

const store = configureStore();

export default store;