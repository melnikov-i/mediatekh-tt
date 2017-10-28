import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { RootState, Dispatch } from '@src/redux';
import { actionCreators } from '@src/redux/form';
import { SFCForm } from '@src/components';

const mapStateToProps = (state: RootState) => ({
  formRowsStaticCollection: state.form.formRowsStaticCollection,
  formRowsDynamicCollection: state.form.formRowsDynamicCollection,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  addFilledFieldsInUserCollection: 
    actionCreators.addFilledFieldsInUserCollection,
  addValueInDynamicCollection: 
    actionCreators.addValueInDynamicCollection,
}, dispatch);

export const SFCFormConnected =
  connect(mapStateToProps, mapDispatchToProps)(SFCForm);