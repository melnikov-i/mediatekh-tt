"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var no_important_1 = require("aphrodite/no-important");
var stateful_form_connected_usage_1 = require("@src/connected/stateful-form-connected.usage");
var sfc_table_usage_1 = require("@src/components/sfc-table.usage");
var app_styles_1 = require("@src/styles/app-styles");
exports.App = function () {
    return (React.createElement("div", { className: no_important_1.css(app_styles_1.default.wrapper) },
        React.createElement(stateful_form_connected_usage_1.default, null),
        React.createElement(sfc_table_usage_1.default, null)));
};
//# sourceMappingURL=app.js.map