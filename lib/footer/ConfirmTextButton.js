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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmTextButton = void 0;
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
