import { ChatEntry, MessageContent } from "../../types";
export declare const useUserTyping: (content: ChatEntry[], setContent: (content: ChatEntry[]) => void, lastUnsubmittedValue: MessageContent[] | string, lastInputValue: MessageContent[] | string, avatarString?: string | undefined) => void;
