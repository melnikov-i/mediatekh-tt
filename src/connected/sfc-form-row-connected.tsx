import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { RootState, Dispatch } from '@src/redux';
import { actionCreators } from '@src/redux/form';
import { SFCFormRow } from '@src/components';

const mapStateToProps = (state: RootState) => ({
  filledFieldsCollection: state.form.filledFieldsCollection,
  // formRowsCollection: state.form.formRowsCollection,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  filledField: actionCreators.filledField,
// incorrectFilling: actionCreators.incorrectFilling,
}, dispatch);

export const SFCFormRowConnected = connect(mapStateToProps, mapDispatchToProps)(SFCFormRow);