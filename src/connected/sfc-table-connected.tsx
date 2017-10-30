// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { RootState/*, Dispatch*/ } from '@src/redux';
import {
  tableHeadCollectionSelector,
  userCollectonSelector,
  optionsSelector,
} from '@src/selectors';
// import { actionCreators } from '@src/redux/table';
import { SFCTable } from '@src/components';

const mapStateToProps = ( state: RootState ) => ({
  tableHeadCollection: tableHeadCollectionSelector(state),
  //state.table.tableHeadCollection,
  userCollection: userCollectonSelector(state),
  // state.form.userCollection
  options: optionsSelector(state),
  // state.table.selectOptionsCollection
});

// const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({

// }, dispatch);

export const SFCTableConnected =
  connect(mapStateToProps, {} /*mapDispatchToProps*/)(SFCTable);