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
    return (react_1.default.createElement("input", { style: {
            border: 0,
            borderRadius: 0,
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            borderTop: "1px solid #eee",
            boxShadow: "none",
            boxSizing: "border-box",
            fontSize: "16px",
            opacity: disabled && !inputInvalid ? 0.5 : 1,
            outline: "none",
            padding: "16px 10px",
            width: "100%",
            WebkitAppearance: "none",
            "&:disabled": {
                background: "#fff"
            }
        }, ref: inputRef, value: value, onChange: onChange, onKeyPress: onKeyPress, type: "textarea", disabled: disabled, placeholder: inputInvalid ? "" : inputPlaceholder }));
};
exports.default = Input;
