export type ChatEntry = {
    isUser: boolean;
    message: string;
    avatar: string;
    id: string;
    isLoading?: boolean;
};

export type HeaderParams = {title: string; extraContent?: JSX.Element; height : number | string};

export type ChatBubbleParams = {entry: ChatEntry; endElement?: JSX.Element; bubbleExtraParams?: any};
