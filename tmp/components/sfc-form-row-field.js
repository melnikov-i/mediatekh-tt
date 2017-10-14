"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var no_important_1 = require("aphrodite/no-important");
var models_1 = require("@src/models");
var form_row_field_styles_1 = require("@src/styles/form-row-field-styles");
var error_styles_1 = require("@src/styles/error-styles");
var sfc_form_row_field_select_usage_1 = require("@src/components/sfc-form-row-field-select.usage");
exports.SFCFormRowField = function (props) {
    var _a = props.options, htmlId = _a.htmlId, type = _a.type;
    var error = (React.createElement("span", { className: no_important_1.css(error_styles_1.default.errorMessage) }, "\u041D\u0435\u0442 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u043F\u043E\u043B\u0435"));
    switch (type) {
        case 'text':
            return (React.createElement("input", { type: type, className: no_important_1.css(form_row_field_styles_1.default.formInput), name: htmlId, id: htmlId }));
        case 'select':
            var getOptions = function (id) {
                switch (id) {
                    case 'active': return models_1.ActiveOptions;
                    case 'role': return models_1.RoleOptions;
                    default: return [];
                }
            };
            var options = getOptions(htmlId);
            if (options.length != 0) {
                var properties = { options: options, htmlId: htmlId, };
                return (React.createElement(sfc_form_row_field_select_usage_1.default, { properties: properties }));
            }
            else {
                return error;
            }
        default: return error;
    }
};
//# sourceMappingURL=sfc-form-row-field.js.map