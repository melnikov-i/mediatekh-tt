"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var react_router_redux_1 = require("react-router-redux");
var form_1 = require("@src/redux/form");
var table_1 = require("@src/redux/table");
exports.rootReducer = redux_1.combineReducers({
    router: react_router_redux_1.routerReducer,
    form: form_1.reducer,
    table: table_1.reducer,
});
//# sourceMappingURL=root-reducer.js.map