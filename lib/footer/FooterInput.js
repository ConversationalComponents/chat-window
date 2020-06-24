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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterInput = void 0;
var react_1 = __importStar(require("react"));
var Input_1 = __importDefault(require("./Input"));
var ConfirmTextButton_1 = require("./ConfirmTextButton");
var rtlAction = { position: "absolute", left: -10, height: "100%", transform: "rotateY(180deg)" };
var ltrAction = { position: "absolute", right: 0, height: "100%" };
exports.FooterInput = function (_a) {
    var inputPlaceholder = _a.inputPlaceholder, disabled = _a.disabled, onSubmit = _a.onSubmit, onFocus = _a.onFocus, onBlur = _a.onBlur, onChange = _a.onChange, _b = _a.actionButton, actionButton = _b === void 0 ? react_1.default.createElement(ConfirmTextButton_1.ConfirmTextButton, null) : _b, isRtl = _a.isRtl, minRows = _a.minRows, maxRows = _a.maxRows, maxHeight = _a.maxHeight, minHeight = _a.minHeight;
    var _c = react_1.useState(""), value = _c[0], setValue = _c[1];
    var onSubmitHandler = function (e) {
        e.preventDefault();
        onSubmit(value);
        setValue("");
    };
    var onFocusHandler = function (e) { return onFocus && onFocus(e); };
    var onBlurHandler = function (e) { return onBlur && onBlur(e); };
    var onChangeHandler = function (event) {
        var value = event.target.value;
        onChange && onChange(value);
        setValue(value);
    };
    var onKeyPress = function (event) {
        if (event.which === 13 && !event.shiftKey) {
            event.preventDefault();
            onSubmit(value);
            setValue("");
        }
    };
    return (react_1.default.createElement("form", { onSubmit: onSubmitHandler, style: { width: "100%", display: "flex", position: "relative", borderTop: "1px solid #eee" } },
        isRtl && react_1.default.createElement("div", { style: rtlAction }, actionButton),
        react_1.default.createElement(Input_1.default, __assign({}, {
            inputInvalid: false,
            inputPlaceholder: inputPlaceholder,
            onChangeHandler: onChangeHandler,
            onFocusHandler: onFocusHandler,
            onKeyPress: onKeyPress,
            onBlurHandler: onBlurHandler,
            value: value,
            disabled: !!disabled,
            minRows: minRows,
            maxRows: maxRows,
            minHeight: minHeight,
            maxHeight: maxHeight,
            isRtl: isRtl,
        })),
        !isRtl && react_1.default.createElement("div", { style: ltrAction }, actionButton)));
};
