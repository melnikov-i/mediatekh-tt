/**
 * Корневой Stateless компонент. 
 *
 * Функция connect - помогает получить в качестве props для компонента
 * данные из store. Принимает на вход две функции:
 *   - mapStateToProps(state) 
 */

import * as React from 'react';
import { connect } from 'react-redux';

export const App: React.SFC<undefined> = () => {
  return (
    <div>App-123</div>
  );
}

// function App(props): JSX.Element {
//   return (
//     <div>App, {console.log(props)}</div>
//   );
// };

function mapStateToProps(state) {
  return {
    form: state.form
  };
}

export default connect(mapStateToProps)(App);