import React, {useEffect, useState, useRef} from "react";
import {autorun} from "mobx";
import {ChatBubbleParams} from "../types";
import {BubbleContentContainer} from "./BubbleContentContainer";
import Loading from "./loading/Loading";
import ImageContainer from "./ImageContainer";
import Image from "./Image";

export const ChatBubble = (p: ChatBubbleParams) => {
    const avatar = p.entry.avatar;
    const [id, setId] = useState(p.entry.id);
    useEffect(() => {
        setId(p.entry.id);
    }, [p.entry.id]);

    const [isLoading, setIsLoading] = useState(!!p.entry.isLoading);
    useEffect(() => autorun(() => setIsLoading(!!p.entry.isLoading)), []);

    const [message, setMessage] = useState(p.entry.message);
    useEffect(
        () =>
            autorun(() => {
                setMessage(p.entry.message);
                const r = ref.current && ref.current.parentElement ? ref.current.parentElement : undefined;
                r &&
                    setTimeout(
                        () =>
                            r.scrollTo({
                                top: r.scrollHeight,
                                behavior: "smooth"
                            }),
                        1 // this is a hack to bypass animation delay. Without it, container doesn't scroll all the way when changing bot response from loading to message
                    );
            }),
        []
    );

    const [isUser, setIsUser] = useState(p.entry.isUser);
    useEffect(() => {
        setIsUser(p.entry.isUser);
    }, [p.entry.isUser]);

    const [isFirst, setIsFirst] = useState(true);
    useEffect(() => {
        setIsFirst(true); // this is here for future implementation
    }, []);

    const [isLast, setIsLast] = useState(true);
    useEffect(() => {
        setIsLast(true); // this is here for future implementation
    }, []);

    const ref = useRef<HTMLDivElement | null>(null);

    return (
        <div
            ref={ref}
            style={{
                alignItems: "flex-end",
                display: "flex",
                justifyContent: `${isUser ? "flex-end" : "flex-start"}`
            }}>
            <ImageContainer isUser={isUser}>{<Image isUser={isUser} src={avatar} />}</ImageContainer>
            <BubbleContentContainer id={id} isUser={isUser} isFirst={isFirst} isLast={isLast}>
                {isLoading ? <Loading /> : message}
            </BubbleContentContainer>
            {p.endElement}
        </div>
    );
};
