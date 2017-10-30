import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  tableHeadCollectionSelector,
} from '@selectors';

import { SFCTableHead } from '@src/components';

const mapStateToProps = createStructuredSelector({
  tableHeadCollection: tableHeadColelctionSelector,
});

export const SFCTableHeadConnected = 
  connect(mapStateToProps, {})(SFCTableHead);