// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { RootState/*, Dispatch*/ } from '@src/redux';
// import { actionCreators } from '@src/redux/table';
import { SFCTable } from '@src/components';

const mapStateToProps = ( state: RootState ) => ({
  tableHeadCollection: state.table.tableHeadCollection,
  userCollection: state.form.userCollection,
  options: state.table.selectOptionsCollection,
});

// const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({

// }, dispatch);

export const SFCTableConnected =
  connect(mapStateToProps, {} /*mapDispatchToProps*/)(SFCTable);