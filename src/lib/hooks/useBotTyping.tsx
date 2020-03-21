import {useEffect, useState} from "react";
import {observable} from "mobx";
import {uuid} from "../utils/uuid";
import {randomInt} from "../utils/randomInt";
import {ChatEntry,MessgaeContent} from "../../types";

const defaultAvatar =
    "data:image/svg+xml,%3csvg version='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3e%3cpath d='M303 70a47 47 0 1 0-70 40v84h46v-84c14-8 24-23 24-40z' fill='%2393c7ef'/%3e%3cpath d='M256 23v171h23v-84a47 47 0 0 0-23-87z' fill='%235a8bb0'/%3e%3cpath fill='%2393c7ef' d='M0 240h248v124H0z'/%3e%3cpath fill='%235a8bb0' d='M264 240h248v124H264z'/%3e%3cpath fill='%2393c7ef' d='M186 365h140v124H186z'/%3e%3cpath fill='%235a8bb0' d='M256 365h70v124h-70z'/%3e%3cpath fill='%23cce9f9' d='M47 163h419v279H47z'/%3e%3cpath fill='%2393c7ef' d='M256 163h209v279H256z'/%3e%3cpath d='M194 272a31 31 0 0 1-62 0c0-18 14-32 31-32s31 14 31 32z' fill='%233c5d76'/%3e%3cpath d='M380 272a31 31 0 0 1-62 0c0-18 14-32 31-32s31 14 31 32z' fill='%231e2e3b'/%3e%3cpath d='M186 349a70 70 0 1 0 140 0H186z' fill='%233c5d76'/%3e%3cpath d='M256 349v70c39 0 70-31 70-70h-70z' fill='%231e2e3b'/%3e%3c/svg%3e";

const minStartDelay = 100;
const maxStartDelay = 300;
const maxEndAdditionalDelay = 500;
const minEndAdditionalDelay = 1000;

export const useBotTyping = (
    content: ChatEntry[],
    setContent: (content: ChatEntry[]) => void,
    lastInputValue: MessgaeContent[],
    avatarString?: string
) => {

    const [isDoneTyping, setIsDoneTyping] = useState(true);
    const [avatar, setAvatar] = useState(avatarString || defaultAvatar);
    
    const startTypingDelay = randomInt(minStartDelay, maxStartDelay);
    const endTypingDelay = startTypingDelay + randomInt(maxEndAdditionalDelay, minEndAdditionalDelay);

    useEffect(() => setAvatar(avatarString || defaultAvatar), [avatarString]);

    useEffect(() => {

        if (!lastInputValue) return;

        setIsDoneTyping(false);

        const botReply = observable({
            isUser: false,
            isLoading: true,
            message: lastInputValue,
            avatar: avatar,
            id: uuid()
        });

        setTimeout(() => setContent([...content, botReply]), startTypingDelay);
        setTimeout(() => setIsDoneTyping(true), endTypingDelay);

    }, [lastInputValue]);

    return isDoneTyping;
};
