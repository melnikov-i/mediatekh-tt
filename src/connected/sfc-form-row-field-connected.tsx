// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { RootState } from '@src/redux'; // Dispatch !!!
// import { actionCreators } from '@src/redux/form';
import { SFCFormRowField } from '@src/components';

const mapStateToProps = (state: RootState) => ({
  isHintActive: state.form.isHintActive,
});

// const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({

// }, dispatch);

export const SFCFormRowFieldConnected = connect(mapStateToProps, {})(SFCFormRowField);