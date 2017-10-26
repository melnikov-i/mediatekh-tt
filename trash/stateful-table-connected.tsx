// import { bindActionCreator } from 'redux';
import { connect } from 'react-redux';

import { RootState, /*Dispatch*/ } from '@src/redux';
// import { actionCreators } from '@src/redux/form';
import { StatefulTable } from '@src/components';
import { ITableRow } from '@src/models';

export interface StatefulTableConnected {
  tableHeadCollection: ITableRow,
}

const mapStateToProps = (state: RootState, ownProps: StatefulTableConnected) => ({
  tableRowsCollection: state.table.tableRowsCollection,
});

// const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreator({
  
// }, dispatch);

export const StatefulTableConnected =
  connect(mapStateToProps, /*mapDispatchToProps*/ {})(StatefulTable);