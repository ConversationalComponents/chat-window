export type ChatEntry = {
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

export type HeaderParams = {title: string; extraContent?: JSX.Element; height : number | string};

export type ChatBubbleParams = {entry: ChatEntry; endElement?: JSX.Element; bubbleExtraParams?: any};
