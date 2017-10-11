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
  formHint: {
    fontSize: '10px',
    fontStyle: 'italic',
    paddingLeft: '5px',
    display: 'none',
    color: 'red',
  },
  formHintVisible: {
    display: 'inline-block',
  }
});

export default styles;  
