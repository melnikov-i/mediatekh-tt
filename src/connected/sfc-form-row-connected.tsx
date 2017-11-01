import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Dispatch } from '@src/redux';
import { actionCreators } from '@src/redux/form';
import { SFCFormRow } from '@src/components';
import { formRowsDynamicCollectionSelector } from '@src/selectors';


const mapStateToProps = createStructuredSelector({
  formRowsDynamicCollection: formRowsDynamicCollectionSelector,
})

const mapDispatchToProps = 
(dispatch: Dispatch) => bindActionCreators({
  addValueInDynamicCollection: 
    actionCreators.addValueInDynamicCollection,
}, dispatch);

export const SFCFormRowConnected =
  connect(mapStateToProps, mapDispatchToProps)(SFCFormRow);