import { StyleSheet } from 'aphrodite/no-important';

// import SelectorDecorator from '@src/styles/template-maker';

const styles = StyleSheet.create({
  form__label: {
    display: 'inline-block',
    verticalAlign: 'top',
    width: '100px',
    fontSize: '14px',
    height: '30px',
    lineHeight: '30px',
  },
  form__input: {
    boxSizing: 'border-box',
    width: '200px',
    height: '30px',
    fontSize: '16px',
    padding: '0 2px',
    border: '#ccc 1px solid',
  },
  form__input_green: {
    border: 'green 1px solid',
  },
  form__input_red: {
    border: 'red 1px solid',
  },
  form__select: {
    fontSize: '16px',
    height: '30px',
  },
  form__option: {
    fontSize: '16px',
  },
  form__hint: {
    fontSize: '10px',
    fontStyle: 'italic',
    paddingLeft: '5px',
    display: 'none',
    color: 'red',
  },
  form__hint_visible: {
    display: 'inline-block',
  }
});

export default styles;  
