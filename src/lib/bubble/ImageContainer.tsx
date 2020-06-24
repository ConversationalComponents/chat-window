import React, {ReactNode} from "react";

const ImageContainer = (p: {children?: ReactNode; isUser: boolean}) => {
    return (
        <div
            style={{
                display: "inline-block",
                order: p.isUser ? 1 : 0,
                padding: "6px 6px 0 6px !important",
            }}>
            {p.children}
        </div>
    );
};

export default ImageContainer;
