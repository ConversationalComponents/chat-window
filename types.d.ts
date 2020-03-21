/// <reference types="react" />
export declare type ChatEntry = {
    isUser: boolean;
    message: MessgaeContent[];
    avatar: string;
    id: string;
    isLoading?: boolean;
};
export type MessgaeContent = {
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
