"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
var table_1 = require("@src/redux/table");
var components_1 = require("@src/components");
var mapStateToProps = function (state) { return ({
    userCollection: state.form.userCollection,
}); };
var mapDispatchToProps = function (dispatch) { return redux_1.bindActionCreators({
    addUserToRows: table_1.actionCreators.addUserToRows,
}, dispatch); };
exports.StatefulTableWrapperConnected = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(components_1.StatefulTableWrapper);
//# sourceMappingURL=stateful-table-wrapper-connected.js.map