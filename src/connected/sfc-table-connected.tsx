import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  sortingParamsSelector,
  userCollectionSelector,
  userCollectionLengthSelector,
} from '@src/selectors';

import { SFCTable } from '@src/components';

const mapStateToProps = createStructuredSelector({
  userCollection: userCollectionSelector,
  userCollectionLength: userCollectionLengthSelector,
  sortingParams: sortingParamsSelector,
});

export const SFCTableConnected =
  connect(mapStateToProps, {})(SFCTable);