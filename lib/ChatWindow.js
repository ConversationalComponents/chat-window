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
var Header_1 = require("./header/Header");
var ChatBody_1 = require("./containers/ChatBody");
var ChatBubble_1 = require("./bubble/ChatBubble");
var ChatBotContainer_1 = __importDefault(require("./containers/ChatBotContainer"));
var FooterInput_1 = require("./footer/FooterInput");
exports.ChatWindow = function (p) {
    var CustomBubble = p.bubble;
    var content = p.content, title = p.title, header = p.header, isRtl = p.isRtl;
    var _a = react_1.useState([]), bubbles = _a[0], setBubbles = _a[1];
    react_1.useEffect(function () {
        var newBubbles = [];
        content.forEach(function (c, i) {
            var bubbles = CustomBubble ? (react_1.default.createElement(CustomBubble, __assign({}, { entry: c, bubbleExtraParams: p.bubbleExtraParams, endElement: p.endElement, isRtl: isRtl }, { key: c.id }))) : (react_1.default.createElement(ChatBubble_1.ChatBubble, __assign({}, { entry: c, bubbleExtraParams: p.bubbleExtraParams, endElement: p.endElement, isRtl: isRtl }, { key: c.id })));
            newBubbles.push(bubbles);
        });
        setBubbles(newBubbles);
    }, [content]);
    return (react_1.default.createElement(ChatBotContainer_1.default, null,
        header ? (header) : (react_1.default.createElement(Header_1.Header, { title: title || "", extraContent: p.headerAdditionalContent, height: p.headerHeight || 56 })),
        react_1.default.createElement(ChatBody_1.ChatBody, null, bubbles),
        p.footer ? (p.footer) : (react_1.default.createElement(FooterInput_1.FooterInput, __assign({}, {
            onChange: p.onChange ? p.onChange : function (t) { },
            onSubmit: p.onSubmit ? p.onSubmit : function (t) { },
            onFocus: p.onFocus ? p.onFocus : undefined,
            onBlur: p.onBlur ? p.onBlur : undefined,
            inputPlaceholder: "Type here ...",
        })))));
};
