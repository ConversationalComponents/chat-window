"use strict";
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
var react_autosize_textarea_1 = __importDefault(require("react-autosize-textarea"));
var Input = function (p) {
    var inputInvalid = p.inputInvalid, inputPlaceholder = p.inputPlaceholder, onKeyPress = p.onKeyPress, onChange = p.onChange, disabled = p.disabled, value = p.value;
    var inputRef = react_1.useRef(null);
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
    return (react_1.default.createElement(react_autosize_textarea_1.default, { contentEditable: "true", style: {
            border: 0,
            borderRadius: 0,
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            minHeight: "22px",
            maxHeight: "180px",
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
        }, ref: inputRef, value: value, disabled: disabled, placeholder: inputInvalid ? "" : inputPlaceholder, onKeyPress: onKeyPress, onChange: onChange }));
};
exports.default = Input;
