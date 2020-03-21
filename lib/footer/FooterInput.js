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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Input_1 = __importDefault(require("./Input"));
var ConfirmTextButton_1 = require("./ConfirmTextButton");
exports.FooterInput = function (p) {
    var defaultInvalidate = function (value) { return false; };
    var validate = function (value) {
        var isInvalid = (p.invalidate || defaultInvalidate)(value);
        setIsInputInvalid(isInvalid);
        return isInvalid;
    };
    var _a = react_1.useState(false), inputInvalid = _a[0], setIsInputInvalid = _a[1];
    var _b = react_1.useState(p.inputPlaceholder), inputPlaceholder = _b[0], setInputPlaceholder = _b[1];
    var _c = react_1.useState(""), value = _c[0], setValue = _c[1];
    var _d = react_1.useState(!!p.disabled), disabled = _d[0], setDisabled = _d[1];
    react_1.useEffect(function () {
        setDisabled(!!p.disabled);
    }, [p.disabled]);
    react_1.useEffect(function () {
        setInputPlaceholder(p.inputPlaceholder);
    }, [p.inputPlaceholder]);
    var onSubmitHandler = function (e) {
        e.preventDefault();
        p.onSubmit(value);
        setValue("");
    };
    var onFocusHandler = function (e) {
        return p.onFocus ? p.onFocus(e) : "";
    };
    var onBlurHandler = function (e) {
        return p.onBlur ? p.onBlur(e) : "";
    };
    var onChangeHandler = function (event) {
        var value = event.target.value;
        p.onChange && p.onChange(value);
        setValue(value);
    };
    var onKeyPress = function (event) {
        if (event.which === 13 && !event.shiftKey) {
            event.preventDefault();
            p.onSubmit(value);
            setValue("");
        }
    };
    var _e = react_1.useState(p.actionButton || react_1.default.createElement(ConfirmTextButton_1.ConfirmTextButton, null)), actionButton = _e[0], setActionButton = _e[1];
    react_1.useEffect(function () {
        setActionButton(p.actionButton || react_1.default.createElement(ConfirmTextButton_1.ConfirmTextButton, null));
    }, [p.actionButton, value]);
    return (react_1.default.createElement("form", { onSubmit: onSubmitHandler, style: { width: "100%", display: "flex", position: "relative", borderTop: "1px solid #eee" } },
        react_1.default.createElement(Input_1.default, __assign({}, {
            inputInvalid: inputInvalid,
            inputPlaceholder: inputPlaceholder,
            onChangeHandler: onChangeHandler,
            onFocusHandler: onFocusHandler,
            onKeyPress: onKeyPress,
            onBlurHandler: onBlurHandler,
            value: value,
            disabled: disabled,
            minRows: p.minRows,
            maxRows: p.maxRows,
            minHeight: p.minHeight,
            maxHeight: p.maxHeight
        })),
        react_1.default.createElement("div", { style: { position: "absolute", right: 0, height: "100%" } }, actionButton)));
};
