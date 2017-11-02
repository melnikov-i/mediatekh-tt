import { StyleSheet } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  table: {
    margin: '40px 0',
    borderCollapse: 'collapse',
  },
  tableCell: {
    fontSize: '12px',
    padding: '5px',
    borderCollapse: 'inherit',
    border: '1px solid #ccc',
  },
  tableHeadCell: {
    position: 'relative',
  },
  tableSortUp: {
    display: 'inline-block',
    width: 0,
    height: 0,
    borderRight: '6px solid transparent',
    borderLeft: '6px solid transparent',
    borderBottom: '12px solid #ccc',
    ':hover': {
      borderBottom: '12px solid #999',
    },
    position: 'absolute',
    right: '18px',
  },
  tableSortDown: {
    display: 'inline-block',
    width: 0,
    height: 0,
    borderTop: '12px solid #ccc',
    borderRight: '6px solid transparent',
    borderLeft: '6px solid transparent',
    ':hover': {
      borderTop: '12px solid #999',
    },
    position: 'absolute',
    right: '5px',
  },
  tableSortUpActive: {
    borderBottom: '12px solid #999',
  },
  tableSortDownActive: {
    borderTop: '12px solid #999',
  },
  role: {
    width: '80px',
  },
  login: {
    width: '120px',
  },
  last_name: {
    width: '120px',
  },
  age: {
    width: '60px',
  },
  registered_on: {
    width: '120px',
  },
  active: {
    width: '40px',
  },
  center: {
    textAlign: 'center',
  }
});

export default styles;