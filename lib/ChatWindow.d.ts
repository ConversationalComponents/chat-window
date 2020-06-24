import React from "react";
import { ChatEntry, ChatBubbleParams } from "../types";
export declare const ChatWindow: (p: {
    onBlur?: ((e: React.FormEvent) => void) | undefined;
    headerHeight?: number | undefined;
    content: ChatEntry[];
    title?: string | undefined;
    onSubmit?: ((text: string) => void) | undefined;
    onChange?: ((text: string) => void) | undefined;
    header?: JSX.Element | undefined;
    onFocus?: ((e: any) => void) | undefined;
    bubble?: ((p: ChatBubbleParams) => JSX.Element) | undefined;
    footer?: JSX.Element | undefined;
    headerAdditionalContent?: JSX.Element | undefined;
    bubbleExtraParams?: any;
    isRtl?: boolean | undefined;
}) => JSX.Element;
