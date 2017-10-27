import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { RootState, Dispatch } from '@src/redux';
import { actionCreators } from '@src/redux/form';
import { SFCForm } from '@src/components';

const mapStateToProps = (state: RootState) => ({
  formRowsStaticCollection: state.form.formRowsStaticCollection,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  addFilledFieldsInUserCollection: actionCreators.addFilledFieldsInUserCollection,
}, dispatch);

export const SFCFormConnected =
  connect(mapStateToProps, mapDispatchToProps)(SFCForm);