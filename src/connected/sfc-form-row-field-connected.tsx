import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { RootState, Dispatch } from '@src/redux';
import { actionCreators } from '@src/redux/form';
import { SFCFormRowField } from '@src/components';

const mapStateToProps = (state: RootState) => ({
  // isHintActive: state.form.isHintActive,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  changeHintDisplay: actionCreators.changeHintDisplay,
  // doShowHint: actionCreators.showHintSfc,
  // doHideHint: actionCreators.hideHintSfc,
}, dispatch);

export const SFCFormRowFieldConnected = connect(mapStateToProps, mapDispatchToProps)(SFCFormRowField);