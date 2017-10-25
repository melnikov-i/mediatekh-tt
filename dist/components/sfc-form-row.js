"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var no_important_1 = require("aphrodite/no-important");
var collections_1 = require("@src/collections");
var form_row_styles_1 = require("@src/styles/form-row-styles");
var error_styles_1 = require("@src/styles/error-styles");
exports.SFCFormRow = function (props) {
    var _a = props.items, htmlId = _a.htmlId, label = _a.label, type = _a.type, regExpTemplate = _a.regExpTemplate, hint = _a.hint;
    var filledFieldsCollection = props.filledFieldsCollection, filledField = props.filledField;
    var error = (React.createElement("span", { className: no_important_1.css(error_styles_1.default.errorMessage) }, "\u041E\u0448\u0438\u0431\u043A\u0430! \u041D\u0435\u0442 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u043F\u043E\u043B\u0435."));
    var getCustomParams = function () {
        var index = '';
        var items = {
            borderStyle: {},
            hintContainer: null,
            clearFieldValue: false,
        };
        for (var i in filledFieldsCollection) {
            if (filledFieldsCollection[i].htmlId == htmlId)
                index = i;
        }
        if (index !== '') {
            if (filledFieldsCollection[index].isCorrect) {
                items.borderStyle = form_row_styles_1.default.formInputGreen;
                items.hintContainer = null;
            }
            else {
                items.borderStyle = form_row_styles_1.default.formInputRed;
                items.hintContainer = (React.createElement("span", { className: no_important_1.css(form_row_styles_1.default.formHint) }, hint));
            }
        }
        else {
            items.borderStyle = form_row_styles_1.default.formInputDefault;
            items.clearFieldValue = true;
        }
        return items;
    };
    var customParams = getCustomParams();
    var fieldHandler = function (e) {
        if (regExpTemplate.test(e.target.value)) {
            filledField({ htmlId: htmlId, isCorrect: true, value: e.target.value });
        }
        else {
            filledField({ htmlId: htmlId, isCorrect: false, value: e.target.value });
        }
    };
    var formField = function (type) {
        switch (type) {
            case 'text':
                return (React.createElement("input", { type: type, className: no_important_1.css(form_row_styles_1.default.formInput, customParams.borderStyle), name: htmlId, id: htmlId, onBlur: fieldHandler }));
            case 'select':
                var getOptions = function (htmlId) {
                    switch (htmlId) {
                        case 'active': return collections_1.SelectActiveCollection;
                        case 'role': return collections_1.SelectRoleCollection;
                        default: return [];
                    }
                };
                var options = getOptions(htmlId);
                if (options.length != 0) {
                    return (React.createElement("select", { className: no_important_1.css(form_row_styles_1.default.formSelect, customParams.borderStyle), id: htmlId, onBlur: fieldHandler }, options.map(function (item, index) {
                        return (React.createElement("option", { key: index, className: no_important_1.css(form_row_styles_1.default.formOption), value: item.value }, item.label));
                    })));
                }
                else {
                    return error;
                }
            default: return error;
        }
    };
    return (React.createElement("div", { className: no_important_1.css(form_row_styles_1.default.formRow) },
        React.createElement("label", { htmlFor: htmlId, className: no_important_1.css(form_row_styles_1.default.formLabel) }, label),
        formField(type),
        customParams.hintContainer));
};
//# sourceMappingURL=sfc-form-row.js.map