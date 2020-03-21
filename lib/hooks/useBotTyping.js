"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var mobx_1 = require("mobx");
var uuid_1 = require("../utils/uuid");
var randomInt_1 = require("../utils/randomInt");
var defaultAvatar = "data:image/svg+xml,%3csvg version='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3e%3cpath d='M303 70a47 47 0 1 0-70 40v84h46v-84c14-8 24-23 24-40z' fill='%2393c7ef'/%3e%3cpath d='M256 23v171h23v-84a47 47 0 0 0-23-87z' fill='%235a8bb0'/%3e%3cpath fill='%2393c7ef' d='M0 240h248v124H0z'/%3e%3cpath fill='%235a8bb0' d='M264 240h248v124H264z'/%3e%3cpath fill='%2393c7ef' d='M186 365h140v124H186z'/%3e%3cpath fill='%235a8bb0' d='M256 365h70v124h-70z'/%3e%3cpath fill='%23cce9f9' d='M47 163h419v279H47z'/%3e%3cpath fill='%2393c7ef' d='M256 163h209v279H256z'/%3e%3cpath d='M194 272a31 31 0 0 1-62 0c0-18 14-32 31-32s31 14 31 32z' fill='%233c5d76'/%3e%3cpath d='M380 272a31 31 0 0 1-62 0c0-18 14-32 31-32s31 14 31 32z' fill='%231e2e3b'/%3e%3cpath d='M186 349a70 70 0 1 0 140 0H186z' fill='%233c5d76'/%3e%3cpath d='M256 349v70c39 0 70-31 70-70h-70z' fill='%231e2e3b'/%3e%3c/svg%3e";
var minStartDelay = 100;
var maxStartDelay = 300;
var maxEndAdditionalDelay = 500;
var minEndAdditionalDelay = 1000;
exports.useBotTyping = function (content, setContent, lastInputValue, avatarString) {
    var _a = react_1.useState(true), isDoneTyping = _a[0], setIsDoneTyping = _a[1];
    var _b = react_1.useState(avatarString || defaultAvatar), avatar = _b[0], setAvatar = _b[1];
    var startTypingDelay = randomInt_1.randomInt(minStartDelay, maxStartDelay);
    var endTypingDelay = startTypingDelay + randomInt_1.randomInt(maxEndAdditionalDelay, minEndAdditionalDelay);
    react_1.useEffect(function () { return setAvatar(avatarString || defaultAvatar); }, [avatarString]);
    react_1.useEffect(function () {
        if (!lastInputValue)
            return;
        var lv = typeof lastInputValue === "string" ? [{ text: lastInputValue }] : lastInputValue;
        setIsDoneTyping(false);
        var botReply = mobx_1.observable({
            isUser: false,
            isLoading: true,
            message: lv,
            avatar: avatar,
            id: uuid_1.uuid()
        });
        setTimeout(function () { return setContent(__spreadArrays(content, [botReply])); }, startTypingDelay);
        setTimeout(function () { return setIsDoneTyping(true); }, endTypingDelay);
    }, [lastInputValue]);
    return isDoneTyping;
};
