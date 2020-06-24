"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingStep = void 0;
var react_1 = __importDefault(require("react"));
var css = ".loadingAnimation {\n    animation: loading 1.4s infinite both;\n}\n@keyframes loading {\n    0% {\n        opacity: 0.2;\n    }\n    20% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0.2;\n    }\n}\n";
exports.LoadingStep = function (_a) {
    var children = _a.children, delay = _a.delay;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("style", null, css),
        react_1.default.createElement("span", { style: {
                animationDelay: "" + delay
            }, className: "loadingAnimation" }, children)));
};
