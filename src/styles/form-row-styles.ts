import { StyleSheet } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  formRow: {
    width: '100%',
    height: '30px',
    lineHeight: '30px',
    marginBottom: '10px',
  },
  formLabel: {
    display: 'inline-block',
    verticalAlign: 'top',
    width: '100px',
    fontSize: '14px',
    height: '30px',
    lineHeight: '30px',
  },
  formHintVisible: {
    display: 'inline-block',
  },
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
  formSelect: {
    fontSize: '16px',
    height: '30px',
  },
  formOption: {
    fontSize: '16px',
  },
});

export default styles;  
