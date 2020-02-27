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
exports.ChatBody = function (p) {
    var container = react_1.useRef(null);
    react_1.useEffect(function () {
        container &&
            container.current &&
            container.current.scrollTo({
                top: container.current.scrollHeight,
                behavior: "smooth"
            });
    }, [p.children]);
    return (react_1.default.createElement("div", { ref: container, style: {
            flex: 1,
            overflowY: "auto",
            height:"calc(100% - 122px)"
        } }, p.children));
};
