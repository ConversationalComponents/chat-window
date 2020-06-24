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
exports.ChatBody = void 0;
var react_1 = __importStar(require("react"));
exports.ChatBody = function (p) {
    var container = react_1.useRef(null);
    react_1.useEffect(function () {
        container &&
            container.current &&
            container.current.scrollTo({
                top: container.current.scrollHeight,
                behavior: "smooth",
            });
    }, [p.children]);
    return (react_1.default.createElement("div", { ref: container, style: {
            flex: 1,
            overflowY: "auto",
            scrollbarWidth: "thin",
            position: "relative",
            height: "auto",
            paddingTop: "12px !important",
        }, id: "coco_chat_window_body" }, p.children));
};
