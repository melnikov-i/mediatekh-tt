"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var _1 = require("./");
exports.reducer = redux_1.combineReducers({
    filledFieldsCollection: function (state, action) {
        if (state === void 0) { state = []; }
        switch (action.type) {
            case _1.FILLED_FIELD:
                var typedPayload_1 = function (payload) {
                    var matchingValue = function (htmlId, value) {
                        switch (htmlId) {
                            case 'active': return (value == '1') ? true : false;
                            case 'age': return value * 1;
                            case 'role': return value * 1;
                            case 'registered_on': return value * 1;
                            default: return value + '';
                        }
                    };
                    return {
                        htmlId: payload.htmlId,
                        isCorrect: payload.isCorrect,
                        value: matchingValue(payload.htmlId, payload.value)
                    };
                };
                if (state.length != 0) {
                    var isContain = function () {
                        var answer = false;
                        var index = '';
                        for (var i in state) {
                            if (state[i].htmlId == action.payload.htmlId) {
                                answer = true;
                                index = i;
                            }
                        }
                        return { answer: answer, index: index };
                    };
                    var contain_1 = isContain();
                    if (contain_1.answer) {
                        var current = state.map(function (e, i) {
                            if (i == contain_1.index)
                                return typedPayload_1(action.payload);
                            return e;
                        });
                        return current;
                    }
                    else {
                        return state.concat([typedPayload_1(action.payload)]);
                    }
                }
                else {
                    return state.concat([typedPayload_1(action.payload)]);
                }
            case _1.CLEAR_FIELD:
                return [];
            default:
                return state;
        }
    },
    userCollection: function (state, action) {
        if (state === void 0) { state = []; }
        switch (action.type) {
            case _1.ADD_USER_IN_COLLECTION:
                return state.concat([action.payload]);
            default:
                return state;
        }
    },
});
//# sourceMappingURL=reducer.js.map