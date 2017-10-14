// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { RootState } from '@src/redux'; // Dispatch !!!
// import { actionCreators } from '@src/redux/form';
import { SFCFormRowFieldSelect } from '@src/components';
import { IFormRow } from '@src/models';

export interface SFCFormRowFieldSelectConnected {
  initialFormRowsCollection: IFormRow[],
}

const mapStateToProps = (state: RootState) => ({
  // formRowsCollection: state.form.formRowsCollection,
});

// const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({

// }, dispatch);

export const SFCFormRowFieldSelectConnected = 
  connect(mapStateToProps, {})(SFCFormRowFieldSelect);