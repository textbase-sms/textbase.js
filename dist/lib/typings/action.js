"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = exports.ActionTypes = void 0;
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["Set"] = "set";
    ActionTypes["Trim"] = "trim";
    ActionTypes["Increment"] = "increment";
    ActionTypes["Append"] = "append";
    ActionTypes["Prepend"] = "prepend";
})(ActionTypes = exports.ActionTypes || (exports.ActionTypes = {}));
class Action {
    constructor(action, value) {
        this.operation = action;
        this.value = value;
    }
}
exports.Action = Action;
