// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { RootState } from '@src/redux'; // Dispatch !!!
// import { actionCreators } from '@src/redux/form';
import { SFCForm } from '@src/components';
import { IFormRow } from '@src/models';

const mapStateToProps = (state: RootState, items: IFormRow[]) => ({
  test: state.form.test,
});

// const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({

// }, dispatch);

export const SFCFormConnected = connect(mapStateToProps, {})(SFCForm);