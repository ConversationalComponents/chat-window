"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var MAX_HEIGHT = 180;
var Input = function (p) {
    var inputInvalid = p.inputInvalid, inputPlaceholder = p.inputPlaceholder, onKeyPress = p.onKeyPress, onChange = p.onChange, disabled = p.disabled, value = p.value;
    var inputRef = react_1.useRef(null);
    react_1.useEffect(function () {
        if (!inputRef.current)
            return;
        inputRef.current.style.height = "22px";
        inputRef.current.oninput = function () {
            if (!inputRef.current)
                return;
            inputRef.current.style.height = "22px";
            inputRef.current.style.height = Math.min(inputRef.current.scrollHeight, MAX_HEIGHT) + "px";
        };
    }, [inputRef.current]);
    react_1.useEffect(function () {
        if (!disabled) {
            inputRef.current && inputRef.current.focus();
        }
        else {
            inputRef.current && inputRef.current.blur();
        }
    }, [disabled]);
    react_1.useEffect(function () {
        p.isRefocusing && inputRef.current && inputRef.current.focus();
    }, [p.isRefocusing]);
    return (react_1.default.createElement("textarea", { rows: 1, style: {
            border: 0,
            borderRadius: 0,
            height: "22px",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            boxShadow: "none",
            boxSizing: "border-box",
            fontSize: "16px",
            fontFamily: "sans-serif",
            opacity: disabled && !inputInvalid ? 0.5 : 1,
            outline: "none",
            flex: 1,
            padding: "16px 10px",
            overflow: "hidden",
            WebkitAppearance: "none",
            resize: "none",
            "&:disabled": {
                background: "#fff"
            }
        }, ref: inputRef, value: value, onChange: onChange, onKeyPress: onKeyPress, type: "textarea", disabled: disabled, placeholder: inputInvalid ? "" : inputPlaceholder }));
};
exports.default = Input;
