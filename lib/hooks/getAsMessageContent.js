"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAsMessageContent = void 0;
exports.getAsMessageContent = function (v) { return (typeof v === "string" ? [{ text: v }] : v); };
