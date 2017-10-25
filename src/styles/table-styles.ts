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
  tableSortUp: {
    display: 'inline-block',
    width: 0,
    height: 0,
    marginLeft: '5px',
    borderRight: '5px solid transparent',
    borderLeft: '5px solid transparent',
    borderBottom: '10px solid #ccc',
    ':hover': {
      borderBottom: '10px solid #999',
    },
  },
  tableSortDown: {
    display: 'inline-block',
    width: 0,
    height: 0,
    marginLeft: '5px',
    borderTop: '10px solid #ccc',
    borderRight: '5px solid transparent',
    borderLeft: '5px solid transparent',
    ':hover': {
      borderTop: '10px solid #999',
    },
  },
  tableSortUpActive: {
    borderBottom: '10px solid #999',
  },
  tableSortDownActive: {
    borderTop: '10px solid #999',
  },
});

export default styles;