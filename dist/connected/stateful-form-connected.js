"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
var form_1 = require("@src/redux/form");
var components_1 = require("@src/components");
var mapStateToProps = function (state, ownProps) { return ({
    filledFieldsCollection: state.form.filledFieldsCollection,
}); };
var mapDispatchToProps = function (dispatch) { return redux_1.bindActionCreators({
    filledField: form_1.actionCreators.filledField,
    clearField: form_1.actionCreators.clearField,
    addUserInCollection: form_1.actionCreators.addUserInCollection,
}, dispatch); };
exports.StatefulFormConnected = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(components_1.StatefulForm);
//# sourceMappingURL=stateful-form-connected.js.map