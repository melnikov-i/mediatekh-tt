import { StyleSheet } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  formInput: {
    boxSizing: 'border-box',
    width: '200px',
    height: '30px',
    fontSize: '16px',
    padding: '0 2px',
  },
  formInputDefault: {
    border: '#ccc 1px solid',
  },
  formInputGreen: {
    border: 'green 1px solid',
  },
  formInputRed: {
    border: 'red 1px solid',
  },
  formHint: {
    fontSize: '10px',
    fontStyle: 'italic',
    paddingLeft: '5px',
    color: 'red',
    display: 'inline-block',
  },
});

export default styles;