import React from "react";
import "./imageAnimation.css";

const Image = (p: {isUser: boolean; src: string}) => {
    return (
        <img
            src={p.src}
            style={{
                boxShadow: "rgba(0, 0, 0, 0.15) 0px 1px 2px 0px",
                height: "40px",
                minWidth: "40px",
                padding: "3px",
                width: "40px",
                transform: "scale(0)",
                borderRadius: `${p.isUser ? "50% 50% 50% 0" : "50% 50% 0 50%"}`,
                transformOrigin: `${p.isUser ? "bottom left" : "bottom right"}`
            }}
            className="imageAnimation"
            alt="avatar"
        />
    );
};

export default Image;
