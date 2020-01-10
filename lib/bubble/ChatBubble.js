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
exports.ChatBubble = function (p) {
    var avatar = p.entry.avatar;
    var _a = react_1.useState(p.entry.id), id = _a[0], setId = _a[1];
    react_1.useEffect(function () {
        setId(p.entry.id);
    }, [p.entry.id]);
    var _b = react_1.useState(!!p.entry.isLoading), isLoading = _b[0], setIsLoading = _b[1];
    react_1.useEffect(function () { return mobx_1.autorun(function () { return setIsLoading(!!p.entry.isLoading); }); }, []);
    var _c = react_1.useState(p.entry.message), message = _c[0], setMessage = _c[1];
    react_1.useEffect(function () {
        return mobx_1.autorun(function () {
            setMessage(p.entry.message);
            var r = ref.current && ref.current.parentElement ? ref.current.parentElement : undefined;
            r &&
                setTimeout(function () {
                    return r.scrollTo({
                        top: r.scrollHeight,
                        behavior: "smooth"
                    });
                }, 1);
        });
    }, []);
    var _d = react_1.useState(p.entry.isUser), isUser = _d[0], setIsUser = _d[1];
    react_1.useEffect(function () {
        setIsUser(p.entry.isUser);
    }, [p.entry.isUser]);
    var _e = react_1.useState(true), isFirst = _e[0], setIsFirst = _e[1];
    react_1.useEffect(function () {
        setIsFirst(true);
    }, []);
    var _f = react_1.useState(true), isLast = _f[0], setIsLast = _f[1];
    react_1.useEffect(function () {
        setIsLast(true);
    }, []);
    var ref = react_1.useRef(null);
    return (react_1.default.createElement("div", { ref: ref, style: {
            alignItems: "flex-end",
            display: "flex",
            justifyContent: "" + (isUser ? "flex-end" : "flex-start")
        } },
        react_1.default.createElement(ImageContainer_1.default, { isUser: isUser }, react_1.default.createElement(Image_1.default, { isUser: isUser, src: avatar })),
        react_1.default.createElement(BubbleContentContainer_1.BubbleContentContainer, { id: id, isUser: isUser, isFirst: isFirst, isLast: isLast }, isLoading ? react_1.default.createElement(Loading_1.default, null) : message),
        p.endElement));
};
