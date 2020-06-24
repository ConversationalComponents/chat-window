"use strict";
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
exports.Header = void 0;
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
            padding: "0 10px !important",
            transition: "all 0.2s linear",
        } },
        react_1.default.createElement("h2", { style: {
                margin: 0,
                fontSize: "17px",
            } }, title),
        p.extraContent ? p.extraContent : null));
};
