"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_2 = require("@src/redux");
function confugureStore(initialState) {
    return redux_1.createStore(redux_2.rootReducer, initialState);
}
var store = confugureStore();
exports.default = store;
//# sourceMappingURL=store.js.map