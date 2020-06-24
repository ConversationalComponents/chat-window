"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuid = void 0;
exports.uuid = function () {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
        return (((c ^ crypto.getRandomValues(new Uint8Array(1))[0]) & 15) >> (c / 4)).toString(16);
    });
};
