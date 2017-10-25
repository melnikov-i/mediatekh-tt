"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var no_important_1 = require("aphrodite/no-important");
var table_styles_1 = require("@src/styles/table-styles");
exports.StatefulTable = (_a = (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                tableRowsStateCollection: _this.props.tableRowsCollection,
            };
            return _this;
        }
        class_1.prototype.componentWillReceiveProps = function (_a) {
            var tableRowsCollection = _a.tableRowsCollection;
            if (tableRowsCollection != null && tableRowsCollection !== this.props.tableRowsCollection) {
                this.setState({ tableRowsStateCollection: tableRowsCollection });
            }
        };
        class_1.prototype.render = function () {
            var tableHeadCollection = this.props.tableHeadCollection;
            var tableRowsStateCollection = this.state.tableRowsStateCollection;
            console.log(tableRowsStateCollection);
            return (React.createElement("table", { className: no_important_1.css(table_styles_1.default.table) },
                React.createElement("thead", null,
                    React.createElement("tr", null, tableHeadCollection.map(function (item, index) { return (React.createElement("td", { key: index, className: no_important_1.css(table_styles_1.default.tableCell) }, item)); }))),
                React.createElement("tbody", null, tableRowsStateCollection.map(function (row, i) {
                    return (React.createElement("tr", { key: i }, row.map(function (cell, i) {
                        return (React.createElement("td", { key: i, className: no_important_1.css(table_styles_1.default.tableCell) },
                            React.createElement("a", { href: "javascript:void();" },
                                React.createElement("span", { className: no_important_1.css(table_styles_1.default.tableSortUp), onClick: "{handlerUp}" })),
                            cell));
                    })));
                }))));
        };
        return class_1;
    }(React.Component)),
    _a.defaultProps = {
        tableRowsCollection: [],
    },
    _a);
var _a;
//# sourceMappingURL=stateful-table.js.map