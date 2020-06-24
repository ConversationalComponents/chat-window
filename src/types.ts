export type ChatEntry = {
    isUser: boolean;
    message: MessageContent[] | string;
    avatar: string;
    id: string;
    isLoading?: boolean;
};
export type MessageContent = {
    text: string;
    image?: string | File;
};

export type HeaderParams = {title: string; extraContent?: JSX.Element; height: number | string};

export type ChatBubbleParams = {isRtl?: boolean; entry: ChatEntry; endElement?: JSX.Element; bubbleExtraParams?: any};
