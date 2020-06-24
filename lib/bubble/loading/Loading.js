"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var LoadingStep_1 = require("./LoadingStep");
var Loading = function () { return (react_1.default.createElement("span", null,
    react_1.default.createElement(LoadingStep_1.LoadingStep, { delay: "0s" }, "."),
    react_1.default.createElement(LoadingStep_1.LoadingStep, { delay: ".2s" }, "."),
    react_1.default.createElement(LoadingStep_1.LoadingStep, { delay: ".4s" }, "."))); };
exports.default = Loading;
