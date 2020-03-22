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
var mobx_1 = require("mobx");
var BubbleContentContainer_1 = require("./BubbleContentContainer");
var Loading_1 = __importDefault(require("./loading/Loading"));
var ImageContainer_1 = __importDefault(require("./ImageContainer"));
var Image_1 = __importDefault(require("./Image"));
var BubbleImageContainer_1 = __importDefault(require("./BubbleImageContainer"));
var getAsMessageContent_1 = require("../utils/getAsMessageContent");
exports.ChatBubble = function (p) {
    var _a;
    var avatar = p.entry.avatar;
    var _b = react_1.useState(p.entry.id), id = _b[0], setId = _b[1];
    var _c = react_1.useState(getAsMessageContent_1.getAsMessageContent(p.entry.message)), messages = _c[0], setMessage = _c[1];
    var _d = react_1.useState(!!p.entry.isLoading), isLoading = _d[0], setIsLoading = _d[1];
    var _e = react_1.useState(p.entry.isUser), isUser = _e[0], setIsUser = _e[1];
    var _f = react_1.useState(true), isFirst = _f[0], setIsFirst = _f[1];
    var _g = react_1.useState(true), isLast = _g[0], setIsLast = _g[1];
    var _h = react_1.useState(), bubbles = _h[0], setBubbles = _h[1];
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
                        behavior: "smooth"
                    });
                }, 200);
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
            justifyContent: "" + (isUser ? "flex-end" : "flex-start")
        } },
        react_1.default.createElement(ImageContainer_1.default, { isUser: isUser },
            react_1.default.createElement(Image_1.default, { isUser: isUser, src: avatar })),
        react_1.default.createElement("div", { style: { display: "flex", width: "100%" } },
            react_1.default.createElement("div", { style: { display: "flex", flexDirection: "column", width: "100%" } }, (_a = bubbles) === null || _a === void 0 ? void 0 : _a.map(function (b, i) { return (react_1.default.createElement("div", { key: i }, b)); })),
            p.endElement)));
};
