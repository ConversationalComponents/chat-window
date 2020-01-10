/// <reference types="react" />
import { ChatEntry, ChatBubbleParams } from "./types";
/**
 *
 * @param p {
 *     content: ChatEntry[]; // array of entries to build body from
    title?: string; // title for the header, if using default header
    onSubmit?: (text: string) => void; // to be called on user submit if using default footer
    header?: JSX.Element; // header to replace default
    bubble?: (p: ChatBubbleParams) => JSX.Element; // buble rendering function
    footer?: JSX.Element; // footer to replace default
    headerAdditionalContent?: JSX.Element; // additional header content
    bubbleExtraParams?: any; // additional params to pass to bubbles}
 */
export declare const ChatWindow: (p: {
    content: ChatEntry[];
    title?: string | undefined;
    onSubmit?: ((text: string) => void) | undefined;
    header?: JSX.Element | undefined;
    bubble?: ((p: ChatBubbleParams) => JSX.Element) | undefined;
    footer?: JSX.Element | undefined;
    headerAdditionalContent?: JSX.Element | undefined;
    bubbleExtraParams?: any;
}) => JSX.Element;
