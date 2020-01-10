/// <reference types="react" />
export declare type ChatEntry = {
    isUser: boolean;
    message: string;
    avatar: string;
    id: string;
    isLoading?: boolean;
};
export declare type HeaderParams = {
    title: string;
    extraContent?: JSX.Element;
};
export declare type ChatBubbleParams = {
    entry: ChatEntry;
    endElement?: JSX.Element;
    bubbleExtraParams?: any;
};
