"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var ActionButton_1 = require("./ActionButton");
exports.ConfirmTextButton = function (p) {
    var _a = react_1.useState(!!p.inputInvalid), inputInvalid = _a[0], setInputInvalid = _a[1];
    var _b = react_1.useState(!!p.disabled), disabled = _b[0], setDisabled = _b[1];
    react_1.useEffect(function () { return setDisabled(!!p.disabled); }, [p.disabled]);
    react_1.useEffect(function () { return setInputInvalid(!!p.inputInvalid); }, [p.inputInvalid]);
    var onTouchStart = function () { };
    var onTouchCancel = function () { };
    var onTouchEnd = function () {
        return p.onSubmit ? p.onSubmit() : "";
    };
    return (react_1.default.createElement(ActionButton_1.ActionButton, __assign({}, { color: undefined, disabled: disabled, invalid: inputInvalid, onTouchStart: onTouchStart, onTouchCancel: onTouchCancel, onTouchEnd: onTouchEnd }),
        react_1.default.createElement("svg", { style: { minWidth: "24px", height: "24px" } },
            react_1.default.createElement("path", { d: "M2,21L23,12L2,3V10L17,12L2,14V21Z" }))));
};
