"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var css = ".bubbleAnimation {\n    animation: bubble 0.3s ease forwards;\n}\n@keyframes bubble {\n    0% {\n        transform: scale(0);\n    }\n    100% {\n        transform: scale(1);\n    }\n}\n";
exports.BubbleContentContainer = function (p) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("style", null, css),
        react_1.default.createElement("div", { className: "bubbleAnimation", style: {
                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.15)",
                display: "inline-block",
                fontSize: "14px",
                maxWidth: "calc(100% - 104px)",
                overflow: "hidden",
                position: "relative",
                paddingTop: "4px",
                wordBreak: "break-word",
                paddingLeft: "7px",
                paddingRight: "7px",
                paddingBottom: "4px",
                backgroundColor: "" + (p.isUser ? "#fff" : "#01A6E0"),
                transformOrigin: "" + (p.isFirst ? (p.isUser ? "bottom right" : "bottom left") : p.isUser ? "top right" : "top left"),
                margin: "" + (!p.isFirst ? (p.isUser ? "-8px 46px 10px 0" : "-8px 0 10px 46px") : "0 0 10px 0"),
                borderRadius: "" + (!p.isFirst && !p.isLast
                    ? p.isUser
                        ? "18px 0 18px 18px"
                        : "0 18px 18px 18px"
                    : !p.isFirst && p.isLast
                        ? p.isUser
                            ? "18px 0 18px 18px"
                            : "0 18px 18px 18px"
                        : p.isUser
                            ? "18px 18px 0 18px"
                            : "18px 18px 18px 0"),
                color: "" + (p.isUser ? "#4a4a4a" : "#fff")
            } }, p.children)));
};
