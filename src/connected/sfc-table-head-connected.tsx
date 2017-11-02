import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Dispatch } from '@src/redux';
import { actionCreators } from '@src/redux/table';

import {
  sortingParamsSelector,
  tableHeadCollectionSelector,
  userCollectionLengthSelector,
} from '@src/selectors';
import { SFCTableHead } from '@src/components';

const mapStateToProps = createStructuredSelector({
  tableHeadCollection: tableHeadCollectionSelector,
  userCollectionLength: userCollectionLengthSelector,
  sortingParams: sortingParamsSelector,
});

const mapDispatchToProps = 
( dispatch: Dispatch ) => bindActionCreators({
  addSortingParams: actionCreators.addSortingParams,
}, dispatch)

export const SFCTableHeadConnected = 
  connect(mapStateToProps, mapDispatchToProps)(SFCTableHead);