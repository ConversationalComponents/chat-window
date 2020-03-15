"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ChatBotContainer = function (p) {
    return (react_1.default.createElement("div", { style: {
            backgroundColor: "#f5f8fb",
            borderRadius: "10px",
            fontFamily: "sans-serif",
            overflow: "hidden",
            position: "relative",
            bottom: "0 !important",
            top: "initial !important",
            right: "0 !important",
            left: "initial",
            zIndex: 999,
            transform: "scale(1)",
            transformOrigin: "bottom right",
            transition: "transform 0.3s ease",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column"
        } }, p.children));
};
exports.default = ChatBotContainer;
