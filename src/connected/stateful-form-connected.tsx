// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { RootState } from '@src/redux'; // Dispatch !!!
// import { actionCreators } from '@src/redux/form';
import { StatefulForm } from '@src/components';
import { IFormRow } from '@src/models';

export interface StatefulFormConnected {
  initialFormRowsCollection: IFormRow[],
}

const mapStateToProps = (state: RootState, ownProps: StatefulFormConnected) => ({
  // formRow: state.form.formRow,
});

// const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({

// }, dispatch);

export const StatefulFormConnected = connect(mapStateToProps, {})(StatefulForm);