"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var no_important_1 = require("aphrodite/no-important");
var form_row_styles_1 = require("@src/styles/form-row-styles");
var sfc_form_row_field_usage_1 = require("@src/components/sfc-form-row-field.usage");
exports.SFCFormRow = function (props) {
    var _a = props.items, htmlId = _a.htmlId, label = _a.label, type = _a.type, hint = _a.hint;
    var fieldOptions = { htmlId: htmlId, type: type };
    console.log(hint);
    return (React.createElement("div", { className: no_important_1.css(form_row_styles_1.default.formRow) },
        React.createElement("label", { htmlFor: htmlId, className: no_important_1.css(form_row_styles_1.default.formLabel) }, label),
        React.createElement(sfc_form_row_field_usage_1.default, { options: fieldOptions })));
};
//# sourceMappingURL=sfc-form-row.js.map