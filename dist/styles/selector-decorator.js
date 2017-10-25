"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SelectorDecorator = function (sourceSelector, additionalParameters) {
    var selector = sourceSelector;
    var parameters = additionalParameters;
    for (var item in parameters) {
        selector[item] = parameters[item];
    }
    return selector;
};
exports.default = SelectorDecorator;
//# sourceMappingURL=selector-decorator.js.map