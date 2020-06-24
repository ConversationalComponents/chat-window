"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleContentContainer = void 0;
var react_1 = __importDefault(require("react"));
var css = ".bubbleAnimation {\n    animation: bubble 0.3s ease forwards;\n}\n@keyframes bubble {\n    0% {\n        transform: scale(0);\n    }\n    100% {\n        transform: scale(1);\n    }\n}\n";
exports.BubbleContentContainer = function (p) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("style", null, css),
        react_1.default.createElement("div", { className: "bubbleAnimation", style: {
                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.15)",
                fontSize: "14px",
                position: "relative",
                wordBreak: "break-word",
                maxWidth: "100%",
                padding: "4px 7px 4px 7px !important",
                backgroundColor: "" + (p.isUser ? "#fff" : "#01A6E0"),
                transformOrigin: "" + (p.isFirst ? (p.isUser ? "bottom right" : "bottom left") : p.isUser ? "top right" : "top left"),
                margin: "" + (!p.isFirst
                    ? p.isUser
                        ? "-8px 46px 10px 0 !important"
                        : "-8px 0 10px 46px !important"
                    : "0 0 10px 0 !important"),
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
                color: "" + (p.isUser ? "#4a4a4a" : "#fff"),
            } }, p.children)));
};
