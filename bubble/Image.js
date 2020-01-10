"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var css = ".imageAnimation {\n    animation: scale 0.3s ease forwards;\n}\n\n@keyframes scale {\n    100% {\n        transform: scale(1);\n    }\n}\n";
var Image = function (p) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("style", null, css),
        react_1.default.createElement("img", { src: p.src, style: {
                boxShadow: "rgba(0, 0, 0, 0.15) 0px 1px 2px 0px",
                height: "40px",
                minWidth: "40px",
                padding: "3px",
                width: "40px",
                transform: "scale(0)",
                borderRadius: "" + (p.isUser ? "50% 50% 50% 0" : "50% 50% 0 50%"),
                transformOrigin: "" + (p.isUser ? "bottom left" : "bottom right")
            }, className: "imageAnimation", alt: "avatar" })));
};
exports.default = Image;
