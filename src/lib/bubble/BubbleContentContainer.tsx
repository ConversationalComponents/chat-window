import React, {ReactNode} from "react";

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
        <>
            <style>{css}</style>
            <div style={{width:"100%",display:"flex", justifyContent:p.isUser ? "flex-end" : "flex-start"}}>
              <div
                className="bubbleAnimation"
                style={{
                    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.15)",
                    display: "inline-block",
                    fontSize: "14px",
                    maxWidth: "calc(100% - 104px)",
                    overflow: "hidden",
                    position: "relative",
                    paddingTop: "4px",
                    wordBreak:"break-word",
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
                    color: `${p.isUser ? "#4a4a4a" : "#fff"}`
                }}>
                {p.children}
              </div>
            </div>
        </>
    );
};