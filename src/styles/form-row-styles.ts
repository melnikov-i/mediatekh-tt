import { StyleSheet } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  form__row: {
    width: '100%',
    height: '30px',
    lineHeight: '30px',
    marginBottom: '10px',
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
