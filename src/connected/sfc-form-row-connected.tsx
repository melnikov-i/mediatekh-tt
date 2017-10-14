// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { RootState } from '@src/redux'; // Dispatch !!!
// import { actionCreators } from '@src/redux/form';
import { SFCFormRow } from '@src/components';
import { IFormRowModel } from '@src/models';

export interface SFCFormRowConnected {
  initialFormRowsCollection: IFormRowModel[],
}

const mapStateToProps = (state: RootState) => ({
  // formRowsCollection: state.form.formRowsCollection,
});

// const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({

// }, dispatch);

export const SFCFormRowConnected = connect(mapStateToProps, {})(SFCFormRow);