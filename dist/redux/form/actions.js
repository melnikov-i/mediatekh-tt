"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FILLED_FIELD = 'FILLED_FIELD';
exports.CLEAR_FIELD = 'CLEAR_FIELD';
exports.ADD_USER_IN_COLLECTION = 'ADD_USER_IN_COLLECTION';
exports.actionCreators = {
    filledField: function (payload) { return ({
        type: exports.FILLED_FIELD, payload: payload,
    }); },
    clearField: function () { return ({
        type: exports.CLEAR_FIELD,
    }); },
    addUserInCollection: function (payload) { return ({
        type: exports.ADD_USER_IN_COLLECTION, payload: payload,
    }); },
};
//# sourceMappingURL=actions.js.map