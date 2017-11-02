import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectOptionsCollectionSelector,
} from '@src/selectors';
import { SFCTableBody } from '@src/components';

const mapStateToProps = createStructuredSelector({
  selectOptionsCollection: selectOptionsCollectionSelector,
});

export const SFCTableBodyConnected =
  connect(mapStateToProps, {})(SFCTableBody);