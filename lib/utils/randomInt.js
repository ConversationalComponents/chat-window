"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomInt = void 0;
function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.randomInt = randomInt;
