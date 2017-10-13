"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var no_important_1 = require("aphrodite/no-important");
var form_row_field_select_styles_1 = require("@src/styles/form-row-field-select-styles");
exports.SFCFormRowFieldSelect = function (props) {
    var _a = props.properties, options = _a.options, htmlId = _a.htmlId;
    var selectHandler = function (e) {
        console.log(e);
    };
    return (React.createElement("select", { className: no_important_1.css(form_row_field_select_styles_1.default.formSelect), id: htmlId, onBlur: selectHandler }, options.map(function (item, index) {
        return (React.createElement("option", { key: index, className: no_important_1.css(form_row_field_select_styles_1.default.formOption), value: item.value }, item.label));
    })));
};
//# sourceMappingURL=sfc-form-row-field-select.js.map