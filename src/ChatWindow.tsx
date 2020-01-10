import React, {useState, ReactNode, useEffect} from "react";
import {Header} from "./header/Header";
import {ChatBody} from "./containers/ChatBody";
import {ChatBubble} from "./bubble/ChatBubble";
import {FooterInput} from "./footer/FooterInput";
import {ChatEntry, ChatBubbleParams} from "./types";
import ChatBotContainer from "./containers/ChatBotContainer";

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
export const ChatWindow = (p: {
    content: ChatEntry[];
    title?: string;
    onSubmit?: (text: string) => void;
    header?: JSX.Element;
    bubble?: (p: ChatBubbleParams) => JSX.Element;
    footer?: JSX.Element;
    headerAdditionalContent?: JSX.Element;
    bubbleExtraParams?: any;
}) => {
    const CustomBubble = p.bubble;
    const [content, setContent] = useState(p.content);
    useEffect(() => setContent(p.content), [p.content]);
    const [title, setTitle] = useState(p.title);
    useEffect(() => setTitle(p.title), [p.title]);
    const [bubbles, setBubbles] = useState<ReactNode[]>([]);
    useEffect(() => {
        const newBubbles = [] as JSX.Element[];
        content.forEach((c, i) => {
            const bubble = CustomBubble ? (
                <CustomBubble {...{entry: c, bubbleExtraParams: p.bubbleExtraParams}} key={c.id} />
            ) : (
                <ChatBubble {...{entry: c, bubbleExtraParams: p.bubbleExtraParams}} key={c.id} />
            );
            newBubbles.push(bubble);
        });
        setBubbles(newBubbles);
    }, [content]);

    return (
        <ChatBotContainer>
            {p.header ? p.header : <Header title={title || ""} extraContent={p.headerAdditionalContent} />}
            <ChatBody>{bubbles}</ChatBody>
            {p.footer ? (
                p.footer
            ) : (
                <FooterInput
                    {...{onSubmit: p.onSubmit ? p.onSubmit : (t: string) => {}, inputPlaceholder: "Type here"}}
                />
            )}
        </ChatBotContainer>
    );
};
