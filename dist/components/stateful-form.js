"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var no_important_1 = require("aphrodite/no-important");
var sfc_form_row_connected_usage_1 = require("@src/connected/sfc-form-row-connected.usage");
var form_styles_1 = require("@src/styles/form-styles");
var error_styles_1 = require("@src/styles/error-styles");
exports.StatefulForm = (_a = (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                formRowsCollection: _this.props.initialFormRowsCollection,
            };
            _this.formButtonHandler = function (e) {
                e.preventDefault();
                var _a = _this.props, filledFieldsCollection = _a.filledFieldsCollection, filledField = _a.filledField, clearField = _a.clearField, addUserInCollection = _a.addUserInCollection;
                var formRowsCollection = _this.state.formRowsCollection;
                var checkFields = function () {
                    var items = {};
                    var itemsCount = 0;
                    var valid;
                    formRowsCollection.forEach(function (formRow) {
                        if (filledFieldsCollection.length != 0) {
                            var itemFound_1 = false;
                            filledFieldsCollection.forEach(function (field) {
                                if (formRow.htmlId == field.htmlId) {
                                    itemFound_1 = true;
                                    if (field.isCorrect == true) {
                                        items[field.htmlId] = field.value;
                                        itemsCount++;
                                    }
                                }
                            });
                            if (!itemFound_1) {
                                filledField({
                                    htmlId: formRow.htmlId,
                                    isCorrect: false,
                                    value: ''
                                });
                            }
                        }
                        else {
                            filledField({
                                htmlId: formRow.htmlId,
                                isCorrect: false,
                                value: ''
                            });
                        }
                    });
                    if (('active' in items) == false) {
                        filledField({
                            htmlId: 'active',
                            isCorrect: true,
                            value: '1',
                        });
                        items['active'] = true;
                        itemsCount++;
                    }
                    if (itemsCount == formRowsCollection.length) {
                        items['registered_on'] = new Date();
                        valid = true;
                    }
                    else {
                        valid = false;
                    }
                    return { valid: valid, items: items };
                };
                var fieldsAreChecked = checkFields();
                if (fieldsAreChecked.valid) {
                    addUserInCollection(fieldsAreChecked.items);
                    clearField();
                    _this.form.reset();
                }
            };
            return _this;
        }
        class_1.prototype.componentWillReceiveProps = function (_a) {
            var initialFormRowsCollection = _a.initialFormRowsCollection;
            if (initialFormRowsCollection != null
                && initialFormRowsCollection !== this.props.initialFormRowsCollection) {
                this.setState({ formRowsCollection: initialFormRowsCollection });
            }
        };
        class_1.prototype.render = function () {
            var _this = this;
            var formButtonHandler = this.formButtonHandler;
            var formRowsCollection = this.state.formRowsCollection;
            if (formRowsCollection.length != 0) {
                return (React.createElement("form", { action: '', ref: function (ref) { return _this.form = ref; } },
                    formRowsCollection.map(function (item, index) {
                        return (React.createElement(sfc_form_row_connected_usage_1.default, { key: index, formRow: item }));
                    }),
                    React.createElement("div", { className: no_important_1.css(form_styles_1.default.formButtonWrapper) },
                        React.createElement("button", { className: no_important_1.css(form_styles_1.default.formButton), onClick: formButtonHandler }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"))));
            }
            else {
                return (React.createElement("span", { className: no_important_1.css(error_styles_1.default.errorMessage) }, "\u041E\u0448\u0438\u0431\u043A\u0430! \u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u043E\u043B\u044F \u0444\u043E\u0440\u043C\u044B."));
            }
        };
        return class_1;
    }(React.Component)),
    _a.defaultProps = {
        initialFormRowsCollection: [],
    },
    _a);
var _a;
//# sourceMappingURL=stateful-form.js.map