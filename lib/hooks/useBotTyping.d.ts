import { ChatEntry, MessageContent } from "../../types";
export declare const useBotTyping: (content: ChatEntry[], setContent: (content: ChatEntry[]) => void, lastInputValue: string | MessageContent[], avatarString?: string | undefined) => boolean;
