import { ChatEntry, MessageContent } from "../../types";
export declare const useBotTyping: (content: ChatEntry[], setContent: (content: ChatEntry[]) => void, lastInputValue: MessageContent[] | string, avatarString?: string | undefined) => boolean;
