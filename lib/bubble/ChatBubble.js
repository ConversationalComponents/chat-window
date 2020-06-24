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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatBubble = void 0;
var react_1 = __importStar(require("react"));
var mobx_1 = require("mobx");
var BubbleContentContainer_1 = require("./BubbleContentContainer");
var Loading_1 = __importDefault(require("./loading/Loading"));
var ImageContainer_1 = __importDefault(require("./ImageContainer"));
var Image_1 = __importDefault(require("./Image"));
var BubbleImageContainer_1 = __importDefault(require("./BubbleImageContainer"));
var getAsMessageContent_1 = require("../utils/getAsMessageContent");
exports.ChatBubble = function (p) {
    var avatar = p.entry.avatar;
    var isRtl = p.isRtl;
    var _a = react_1.useState(p.entry.id), id = _a[0], setId = _a[1];
    var _b = react_1.useState(getAsMessageContent_1.getAsMessageContent(p.entry.message)), messages = _b[0], setMessage = _b[1];
    var _c = react_1.useState(!!p.entry.isLoading), isLoading = _c[0], setIsLoading = _c[1];
    var _d = react_1.useState(p.entry.isUser), isUser = _d[0], setIsUser = _d[1];
    var _e = react_1.useState(true), isFirst = _e[0], setIsFirst = _e[1];
    var _f = react_1.useState(true), isLast = _f[0], setIsLast = _f[1];
    var _g = react_1.useState(), bubbles = _g[0], setBubbles = _g[1];
    var ref = react_1.useRef(null);
    react_1.useEffect(function () { return mobx_1.autorun(function () { return setIsLoading(!!p.entry.isLoading); }); }, []);
    react_1.useEffect(function () {
        setId(p.entry.id);
    }, [p.entry.id]);
    react_1.useEffect(function () {
        renderBubbles();
    }, [p.entry.message]);
    react_1.useEffect(function () {
        setIsUser(p.entry.isUser);
    }, [p.entry.isUser]);
    react_1.useEffect(function () {
        setIsFirst(true);
        setIsLast(true);
    }, []);
    react_1.useEffect(function () {
        return mobx_1.autorun(function () {
            setMessage(getAsMessageContent_1.getAsMessageContent(p.entry.message));
            var r = ref.current && ref.current.parentElement ? ref.current.parentElement : undefined;
            r &&
                setTimeout(function () {
                    return r.scrollTo({
                        top: r.scrollHeight,
                        behavior: "smooth",
                    });
                }, 1000);
        });
    }, []);
    var renderBubbles = function () {
        if (isLoading) {
            var loading = (react_1.default.createElement(BubbleContentContainer_1.BubbleContentContainer, { id: id, isUser: isUser, isFirst: isFirst, isLast: isLast },
                react_1.default.createElement(Loading_1.default, null)));
            setBubbles([loading]);
        }
        else {
            var bubbles_1 = messages.map(function (msg, i) {
                var msgText = msg.text !== "" ? (react_1.default.createElement(BubbleContentContainer_1.BubbleContentContainer, { id: id, isUser: isUser, isFirst: isFirst, isLast: isLast, key: "c_" + i }, msg.text)) : ("");
                var msgImage = !!msg.image ? (react_1.default.createElement(BubbleImageContainer_1.default, { src: msg.image, key: "image_" + i })) : ("");
                return (react_1.default.createElement(react_1.default.Fragment, null,
                    msgText,
                    msgImage));
            });
            setBubbles(bubbles_1);
        }
    };
    return (react_1.default.createElement("div", { ref: ref, style: {
            alignItems: "flex-end",
            display: "flex",
            justifyContent: "" + (isUser ? "flex-end" : "flex-start"),
        } },
        react_1.default.createElement(ImageContainer_1.default, { isUser: isUser },
            react_1.default.createElement(Image_1.default, { isUser: isUser, src: avatar })),
        react_1.default.createElement("div", { style: {
                direction: isRtl ? "rtl" : "ltr",
                textAlign: isRtl ? "right" : "left",
                display: "flex",
                flexDirection: "column",
                alignItems: isUser ? "end" : "start",
                maxWidth: "calc( 100% - 104px )",
            } }, bubbles && bubbles.map(function (b, i) { return react_1.default.createElement("div", { key: "bubble_inner_" + i }, b); })),
        p.endElement));
};
