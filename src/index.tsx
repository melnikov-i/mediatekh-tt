import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import {
  App,
} from './containers';


const Root: JSX.Element = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(
  Root, document.getElementById('app')
);