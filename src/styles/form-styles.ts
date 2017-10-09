import { StyleSheet } from 'aphrodite/no-important';

import SelectorMaker from '@src/styles/template-maker';

// const test = new SelectorMaker({height: '100px'});
// console.log(test.generate([
//   ['width', '200px']
// ]));

const formWrapperTemplate = new SelectorMaker({
  width: '100%',
  height: 30,
  lineHeight: '30px',
  marginBottom: 0,
});

const styles = StyleSheet.create({
  from__button: {
    display: 'block',
    width: 200,
    height: 30,
    lineHeight: '30px',
    fontSize: 18,
    color: '#fff',
    backgroundColor: 'green',
    textAlign: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
    '::selection': {
      backgroundColor: 'transparent',
    },
  },
  form__buttonWrapper: formWrapperTemplate.generate(),
  form__row: formWrapperTemplate.generate([['marginBottom', 10]]),
});

export default styles; 


