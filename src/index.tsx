/**
 * Точка входа в приложение
 *
 * В этом файле необходимо сделать две основные вещи:
 *   - выполнить импорт Store
 *   - выполнить импорт корневого компонента
 */

/* Подключение библиотек */
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
/* Подключение Store */
import store from '@src/store';
/* Подключение корневого компонента */


render(
  <Provider store={store}>
    <div>Hello, World</div>
  </Provider>,
  document.getElementById('app')
);