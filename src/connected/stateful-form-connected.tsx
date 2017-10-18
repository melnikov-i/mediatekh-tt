import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { RootState, Dispatch } from '@src/redux';
import { actionCreators } from '@src/redux/form';
import { StatefulForm } from '@src/components';
import { IFormRowModel } from '@src/models';

export interface StatefulFormConnected {
  initialFormRowsCollection: IFormRowModel[],
}

const mapStateToProps = (state: RootState, ownProps: StatefulFormConnected) => ({
  userCollection: state.form.userCollection,
  filledFieldsCollection: state.form.filledFieldsCollection,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  filledField: actionCreators.filledField,
}, dispatch);

export const StatefulFormConnected = 
  connect(mapStateToProps, mapDispatchToProps)(StatefulForm);