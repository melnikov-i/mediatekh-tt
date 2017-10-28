import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { RootState, Dispatch } from '@src/redux';
import { actionCreators } from '@src/redux/form';
import { SFCFormRow } from '@src/components';
import { IFormRowsStaticParamsModel } from '@src/models';

export interface SFCFormRowConnected {
  items: IFormRowsStaticParamsModel,
}

const mapStateToProps = 
(state: RootState, ownProps: SFCFormRowConnected) => ({
  formRowsDynamicCollection: 
    state.form.formRowsDynamicCollection[ownProps.items.id],
});

const mapDispatchToProps = 
(dispatch: Dispatch) => bindActionCreators({
  addValueInDynamicCollection: 
    actionCreators.addValueInDynamicCollection,
}, dispatch);

export const SFCFormRowConnected =
  connect(mapStateToProps, mapDispatchToProps)(SFCFormRow);