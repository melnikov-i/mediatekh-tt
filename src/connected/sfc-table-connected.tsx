import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  userCollectionSelector,
  userCollectionLengthSelector,
} from '@src/selectors';

import { SFCTable } from '@src/components';

const mapStateToProps = createStructuredSelector({
  userCollection: userCollectionSelector,
  userCollectionLength: userCollectionLengthSelector,
});

export const SFCTableConnected =
  connect(mapStateToProps, {})(SFCTable);