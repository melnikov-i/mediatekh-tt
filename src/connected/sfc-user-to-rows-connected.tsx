import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { RootState, Dispatch } from '@src/redux';
import { actionCreators } from '@src/redux/table';
import { SFCUserToRows } from '@src/components';

const mapStateToProps = (state: RootState) => ({
  userCollection: state.form.userCollection,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  addUserToRows: actionCreators.addUserToRows,
}, dispatch);

export const SFCUserToRowsConnected = 
  connect(mapStateToProps, mapDispatchToProps)(SFCUserToRows);