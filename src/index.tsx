/**
 * Точка входа в приложение
 */

/* Подключение библиотек */
import * as React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
/* Подключение корневого компонента */
import App from './containers/App';
/* Подключение Store */
import configureStore from './store/configureStore';

const store = configureStore({});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);