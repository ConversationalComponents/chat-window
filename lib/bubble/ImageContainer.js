"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ImageContainer = function (p) {
    return (react_1.default.createElement("div", { style: {
            display: "inline-block",
            order: p.isUser ? 1 : 0,
            padding: "6px 6px 0 6px !important",
        } }, p.children));
};
exports.default = ImageContainer;
