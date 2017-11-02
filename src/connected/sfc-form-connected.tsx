import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Dispatch } from '@src/redux';
import { actionCreators as formActionCreators } from '@src/redux/form';
import { actionCreators as tableActionCreators } from '@src/redux/table';

import {
  formRowsDynamicCollectionFormSelector,
  formRowsStaticCollectionSelector,
} from '@src/selectors';
import { SFCForm } from '@src/components';


const mapStateToProps = createStructuredSelector({
  formRowsStaticCollection: formRowsStaticCollectionSelector,
  formRowsDynamicCollection: formRowsDynamicCollectionFormSelector,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  addFilledFieldsInUserCollection: 
    tableActionCreators.addFilledFieldsInUserCollection,
  addValueInDynamicCollection: 
    formActionCreators.addValueInDynamicCollection,
  clearDynamicCollection: formActionCreators.clearDynamicCollection,
}, dispatch);

export const SFCFormConnected =
  connect(mapStateToProps, mapDispatchToProps)(SFCForm);