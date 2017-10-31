import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  tableHeadCollectionSelector,
  userCollectionLengthSelector,
} from '@src/selectors';

import { SFCTableHead } from '@src/components';

const mapStateToProps = createStructuredSelector({
  tableHeadCollection: tableHeadCollectionSelector,
  userCollectionLength: userCollectionLengthSelector,
});

export const SFCTableHeadConnected = 
  connect(mapStateToProps, {})(SFCTableHead);