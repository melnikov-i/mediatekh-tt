import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { RootState, Dispatch } from '@src/redux';
import { actionCreators } from '@src/redux/form';
import { SFCFormRow } from '@src/components';

const mapStateToProps = (state: RootState) => ({
  filledFieldsCollection: state.form.filledFieldsCollection,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  filledField: actionCreators.filledField,
}, dispatch);

export const SFCFormRowConnected = connect(mapStateToProps, mapDispatchToProps)(SFCFormRow);