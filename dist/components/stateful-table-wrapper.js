"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var stateful_table_connected_usage_1 = require("@src/connected/stateful-table-connected.usage");
exports.StatefulTableWrapper = (_a = (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                userCollectionLength: _this.props.userCollection.length,
            };
            return _this;
        }
        class_1.prototype.componentWillReceiveProps = function (_a) {
            var userCollection = _a.userCollection, addUserToRows = _a.addUserToRows;
            if (userCollection != null && userCollection !== this.props.userCollection) {
                this.setState({ userCollectionLength: userCollection.length });
                addUserToRows(userCollection);
            }
        };
        class_1.prototype.shouldComponentUpdate = function (_a) {
            var userCollection = _a.userCollection;
            return userCollection.length > this.props.userCollection.length;
        };
        class_1.prototype.render = function () {
            if (this.state.userCollectionLength != 0) {
                return React.createElement(stateful_table_connected_usage_1.default, null);
            }
            else {
                return null;
            }
        };
        return class_1;
    }(React.Component)),
    _a.defaultProps = {
        userCollection: [],
    },
    _a);
var _a;
//# sourceMappingURL=stateful-table-wrapper.js.map