import React from "react";

const css = `.imageAnimation {
    animation: scale 0.3s ease forwards;
}

@keyframes scale {
    100% {
        transform: scale(1);
    }
}
`;

const Image = (p: {isUser: boolean; src: string}) => {
    return (
        <>
            <style>{css}</style>
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
        </>
    );
};

export default Image;
