// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { RootState } from '@src/redux'; // Dispatch !!!
// import { actionCreators } from '@src/redux/form';
import { StatefulForm } from '@src/components';
import { IFormRowModel } from '@src/models';

export interface StatefulFormConnected {
  initialFormRowsCollection: IFormRowModel[],
}

const mapStateToProps = (state: RootState, ownProps: StatefulFormConnected) => ({
  // formRowsCollection: state.form.formRowsCollection,
});

// const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({

// }, dispatch);

export const StatefulFormConnected = connect(mapStateToProps, {})(StatefulForm);