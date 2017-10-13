// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { RootState } from '@src/redux'; // Dispatch !!!
// import { actionCreators } from '@src/redux/form';
import { SFCFormRowField } from '@src/components';
import { IFormRow } from '@src/models';

export interface SFCFormRowFieldConnected {
  initialFormRowsCollection: IFormRow[],
}

const mapStateToProps = (state: RootState) => ({
  // formRowsCollection: state.form.formRowsCollection,
});

// const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({

// }, dispatch);

export const SFCFormRowFieldConnected = connect(mapStateToProps, {})(SFCFormRowField);