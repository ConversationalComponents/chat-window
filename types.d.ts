/// <reference types="react" />
export declare type ChatEntry = {
    isUser: boolean;
    message: MessageContent[] | string;
    avatar: string;
    id: string;
    isLoading?: boolean;
};
export declare type MessageContent = {
    text: string;
    image?: string | File;
};
export declare type HeaderParams = {
    title: string;
    extraContent?: JSX.Element;
    height: number | string;
};
export declare type ChatBubbleParams = {
    entry: ChatEntry;
    endElement?: JSX.Element;
    bubbleExtraParams?: any;
};
