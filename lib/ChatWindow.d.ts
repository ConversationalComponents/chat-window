/// <reference types="react" />
import { ChatEntry, ChatBubbleParams } from "../types";
export declare const ChatWindow: (p: {
    content: ChatEntry[];
    title?: string | undefined;
    onSubmit?: ((text: string) => void) | undefined;
    onChange?: ((text: string) => void) | undefined;
    header?: JSX.Element | undefined;
    bubble?: ((p: ChatBubbleParams) => JSX.Element) | undefined;
    footer?: JSX.Element | undefined;
    headerAdditionalContent?: JSX.Element | undefined;
    bubbleExtraParams?: any;
}) => JSX.Element;
