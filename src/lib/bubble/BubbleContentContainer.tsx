import React, {ReactNode} from "react";
import Linkify from "react-linkify";

const css = `.bubbleAnimation {
    animation: bubble 0.3s ease forwards;
}
@keyframes bubble {
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}
`;

export const BubbleContentContainer = (p: {
    id: string;
    children?: ReactNode;
    isUser: boolean;
    isFirst: boolean;
    isLast: boolean;
}) => {
    return (
        <Linkify
            componentDecorator={(decoratedHref: string, decoratedText: string, key: number) => (
                <a href={decoratedHref} key={key} target="_blank">
                    {decoratedText}
                </a>
            )}>
            <style>{css}</style>
            <div
                className="bubbleAnimation"
                style={{
                    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.15)",
                    fontSize: "14px",
                    position: "relative",
                    paddingTop: "4px",
                    wordBreak: "break-word",
                    maxWidth: "100%",
                    paddingLeft: "7px",
                    paddingRight: "7px",
                    paddingBottom: "4px",
                    backgroundColor: `${p.isUser ? "#fff" : "#01A6E0"}`,
                    transformOrigin: `${
                        p.isFirst ? (p.isUser ? "bottom right" : "bottom left") : p.isUser ? "top right" : "top left"
                    }`,
                    margin: `${!p.isFirst ? (p.isUser ? "-8px 46px 10px 0" : "-8px 0 10px 46px") : "0 0 10px 0"}`,
                    borderRadius: `${
                        !p.isFirst && !p.isLast
                            ? p.isUser
                                ? "18px 0 18px 18px"
                                : "0 18px 18px 18px"
                            : !p.isFirst && p.isLast
                            ? p.isUser
                                ? "18px 0 18px 18px"
                                : "0 18px 18px 18px"
                            : p.isUser
                            ? "18px 18px 0 18px"
                            : "18px 18px 18px 0"
                    }`,
                    color: `${p.isUser ? "#4a4a4a" : "#fff"}`,
                }}>
                {p.children}
            </div>
        </Linkify>
    );
};
