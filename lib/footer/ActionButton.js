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
exports.ActionButton = function (p) {
    var onTouchStart = p.onTouchStart, onTouchCancel = p.onTouchCancel, onTouchEnd = p.onTouchEnd;
    var _a = react_1.useState(p.color), color = _a[0], setColor = _a[1];
    react_1.useEffect(function () { return setColor(p.color); }, [p.color]);
    var _b = react_1.useState(p.invalid), invalid = _b[0], setInvalid = _b[1];
    react_1.useEffect(function () { return setInvalid(p.invalid); }, [p.invalid]);
    var _c = react_1.useState(p.disabled), disabled = _c[0], setDisabled = _c[1];
    react_1.useEffect(function () { return setDisabled(p.disabled); }, [p.disabled]);
    var ref = react_1.useRef(null);
    react_1.useEffect(function () {
        if (!ref.current)
            return;
        ref.current.oncontextmenu = function (event) {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            return false;
        };
    }, [ref.current]);
    return (react_1.default.createElement("button", { ref: ref, onPointerDown: onTouchStart, onPointerOut: onTouchCancel, onPointerUp: onTouchEnd, type: "submit", style: {
            pointerEvents: disabled ? "none" : "all",
            backgroundColor: "transparent",
            border: "none",
            borderBottomRightRadius: "10px",
            boxShadow: "none",
            cursor: "" + (disabled ? "default" : "pointer"),
            fill: "" + (invalid ? "#E53935" : color ? color : "#4a4a4a"),
            opacity: "" + (disabled && !invalid ? ".5" : "1"),
            outline: "none",
            display: "flex",
            alignItems: "center",
            background: "white",
            height: "100%",
            width: "50px",
            justifyContent: "center",
            right: 0,
            top: 0,
            "&:before": {
                content: "",
                position: "absolute",
                width: "23px",
                height: "23px",
                borderRadius: "50%"
            },
            "&:not(:disabled):hover": {
                opacity: "0.7"
            }
        }, disabled: disabled }, p.children));
};
