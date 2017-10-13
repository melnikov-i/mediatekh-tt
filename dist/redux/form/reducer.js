"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
exports.reducer = redux_1.combineReducers({
    formRowsCollection: function (state, action) {
        if (state === void 0) { state = []; }
        switch (action.type) {
            default:
                return state;
        }
    },
});
//# sourceMappingURL=reducer.js.map