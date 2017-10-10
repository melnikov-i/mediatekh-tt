import { StyleSheet } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  form__button: {
    display: 'block',
    width: '200px',
    height: '30px',
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
  form__buttonWrapper: {
    width: '100%',
    height: '30px',
    lineHeight: '30px',
    marginBottom: 0,
  },
});

export default styles; 


