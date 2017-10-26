import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { RootState, Dispatch } from '@src/redux';
import { actionCreators } from '@src/redux/form';
import { SFCFormRow } from '@src/components';

const mapStateToProps = (state: RootState) => ({
  // formRowsStaticCollection: state.form.formRowsStaticCollection,
  formRowsDynamicCollection: state.form.formRowsDynamicCollection,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  addValueIntoDynamicCollection: actionCreators.addValueIntoDynamicCollection,
}, dispatch);

export const SFCFormRowConnected =
  connect(mapStateToProps, mapDispatchToProps)(SFCFormRow);