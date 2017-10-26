// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { RootState, /*Dispatch*/ } from '@src/redux';
// import { actionCreators } from '@src/redux/form';
import { SFCForm } from '@src/components';

const mapStateToProps = (state: RootState) => ({
  formRowsStaticCollection: state.form.formRowsStaticCollection,
  // filledFieldsCollection: state.form.filledFieldsCollection,
});

// const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
//   filledField: actionCreators.filledField,
// }, dispatch);

export const SFCFormConnected =
  connect(mapStateToProps, {} /*mapDispatchToProps*/)(SFCForm); 
