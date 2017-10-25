"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var collections_1 = require("@src/collections");
var _1 = require("./");
exports.reducer = redux_1.combineReducers({
    tableRowsCollection: function (state, action) {
        if (state === void 0) { state = []; }
        switch (action.type) {
            case _1.ADD_USER_TO_ROWS:
                var getTableRowsCollection = function (payload) {
                    var tableRowsCollection = payload.map(function (row) {
                        return [
                            getRoleStringFromNumber_1(row['role']),
                            row['login'],
                            row['last_name'] + ' ' + row['first_name'],
                            String(row['age']),
                            getDate_1(row['registered_on']),
                            getStringFromBoolean_1(row['active']),
                        ];
                    });
                    return tableRowsCollection;
                };
                var getDate_1 = function (timestamp) {
                    var date = new Date(timestamp);
                    var out = '';
                    var month = String(date.getMonth());
                    var minutes = String(date.getMinutes());
                    out += String(date.getDate()) + '.';
                    out += (month.length < 2) ? '0' + month + '.' : month + '.';
                    out += String(date.getFullYear()) + ' - ';
                    out += String(date.getHours()) + ':';
                    out += (minutes.length < 2) ? '0' + minutes : minutes;
                    return out;
                };
                var getRoleStringFromNumber_1 = function (index) {
                    var localIndex = String(index);
                    for (var i in collections_1.SelectRoleCollection) {
                        if (collections_1.SelectRoleCollection[i].value == localIndex) {
                            return collections_1.SelectRoleCollection[i].label;
                        }
                    }
                    return 'error';
                };
                var getStringFromBoolean_1 = function (b) {
                    if (b) {
                        return 'Yes';
                    }
                    else {
                        return 'No';
                    }
                };
                return getTableRowsCollection(action.payload);
            default:
                return state;
        }
    }
});
//# sourceMappingURL=reducer.js.map