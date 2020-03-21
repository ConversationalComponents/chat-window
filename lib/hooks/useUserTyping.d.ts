import { ChatEntry, MessageContent } from "../../types";
export declare const useUserTyping: (content: ChatEntry[], setContent: (content: ChatEntry[]) => void, lastUnsubmittedValue: string | MessageContent[], lastInputValue: string | MessageContent[], avatarString?: string | undefined) => void;
