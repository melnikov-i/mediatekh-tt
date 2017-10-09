import { StyleSheet } from 'aphrodite/no-important';

import SelectorDecorator from '@src/styles/template-maker';

const wrapperTemplate = {
  width: '100%',
  height: 30,
  lineHeight: '30px',
}

const styles = StyleSheet.create({
  form__button: {
    display: 'block',
    width: 200,
    height: 30,
    lineHeight: '30px',
    fontSize: '18px',
    color: '#fff',
    backgroundColor: 'green',
    textAlign: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
    '::selection': {
      backgroundColor: 'transparent',
    },
  },
  form__buttonWrapper: SelectorDecorator(wrapperTemplate, {marginBottom: 0}),
  form__row: SelectorDecorator(wrapperTemplate, {marginBottom: 0}),
});

export default styles; 


