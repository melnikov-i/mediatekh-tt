"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var no_important_1 = require("aphrodite/no-important");
var table_styles_1 = require("@src/styles/table-styles");
exports.SFCTable = function (props) {
    var tableHead = props.tableHead;
    return (React.createElement("table", { className: no_important_1.css(table_styles_1.default.table) },
        React.createElement("thead", null,
            React.createElement("tr", null, tableHead.map(function (item, index) { return (React.createElement("td", { key: index, className: no_important_1.css(table_styles_1.default.tableCell) }, item)); }))),
        React.createElement("tbody", null,
            React.createElement("tr", null,
                React.createElement("td", { className: no_important_1.css(table_styles_1.default.tableCell) }, "Administrator"),
                React.createElement("td", { className: no_important_1.css(table_styles_1.default.tableCell) }, "login"),
                React.createElement("td", { className: no_important_1.css(table_styles_1.default.tableCell) }, "Petr Ivanov"),
                React.createElement("td", { className: no_important_1.css(table_styles_1.default.tableCell) }, "32"),
                React.createElement("td", { className: no_important_1.css(table_styles_1.default.tableCell) }, "12.10.2017 - 10:32"),
                React.createElement("td", { className: no_important_1.css(table_styles_1.default.tableCell) }, "Yes")))));
};
//# sourceMappingURL=sfc-table.js.map