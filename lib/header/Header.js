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
exports.Header = function (p) {
    var _a = react_1.useState(p.title), title = _a[0], setTitle = _a[1];
    react_1.useEffect(function () {
        setTitle(p.title);
    }, [p.title]);
    return (react_1.default.createElement("div", { style: {
            alignItems: "center",
            backgroundColor: "#01a6e0",
            color: "#fff",
            display: "flex",
            fill: "#fff",
            height: p.height + "px",
            justifyContent: "space-between",
            padding: "0 10px",
            transition: "all 0.2s linear"
        } },
        react_1.default.createElement("h2", { style: {
                margin: 0,
                fontSize: "17px"
            } }, title),
        p.extraContent ? p.extraContent : null));
};
