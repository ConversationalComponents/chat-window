/// <reference types="react" />
export declare type ChatEntry = {
    isUser: boolean;
    message: MessageContent[];
    avatar: string;
    id: string;
    isLoading?: boolean;
};
export type MessageContent = {
    text:string;
    image?:string | File;
}
export declare type HeaderParams = {
    title: string;
    extraContent?: JSX.Element;
    height : number | string;
};
export declare type ChatBubbleParams = {
    entry: ChatEntry;
    endElement?: JSX.Element;
    bubbleExtraParams?: any;
};
