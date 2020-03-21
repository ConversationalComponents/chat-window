"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var BubbleImageContainer = function (p) {
    return (react_1.default.createElement("img", { src: "" + p.src, style: { maxHeight: "300px", maxWidth: "calc(100% - 104px)", marginBottom: "10px" }, alt: "GIF NOT LOADING" }));
};
exports.default = BubbleImageContainer;
