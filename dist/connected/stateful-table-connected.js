"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var components_1 = require("@src/components");
var mapStateToProps = function (state, ownProps) { return ({
    tableRowsCollection: state.table.tableRowsCollection,
}); };
exports.StatefulTableConnected = react_redux_1.connect(mapStateToProps, {})(components_1.StatefulTable);
//# sourceMappingURL=stateful-table-connected.js.map