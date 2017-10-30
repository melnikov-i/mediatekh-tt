import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { /*RootState, */Dispatch } from '@src/redux';
import { actionCreators } from '@src/redux/form';
import { SFCForm } from '@src/components';
import {
  formRowsDynamicCollectionFormSelector,
  formRowsStaticCollectionSelector,
} from '@src/selectors';

const mapStateToProps = createStructuredSelector({
  formRowsStaticCollection: formRowsStaticCollectionSelector,
  formRowsDynamicCollection: formRowsDynamicCollectionFormSelector,
});

// const mapStateToProps = (state: RootState) => ({
  // formRowsStaticCollection: formRowsStaticCollectionSelector(state),
  //state.form.formRowsStaticCollection,
  // formRowsDynamicCollection: formRowsDynamicCollectionFormSelector(state),
  //state.form.formRowsDynamicCollection,
// });

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  addFilledFieldsInUserCollection: 
    actionCreators.addFilledFieldsInUserCollection,
  addValueInDynamicCollection: 
    actionCreators.addValueInDynamicCollection,
}, dispatch);

export const SFCFormConnected =
  connect(mapStateToProps, mapDispatchToProps)(SFCForm);