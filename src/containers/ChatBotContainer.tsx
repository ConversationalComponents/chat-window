import React from "react";

const ChatBotContainer = (p: {children: any}) => {
    return (
        <div
            style={{
                backgroundColor: "#f5f8fb",
                borderRadius: "10px",
                boxShadow: "0 12px 24px 0 rgba(0, 0, 0, 0.15)",
                fontFamily: "sans-serif",
                overflow: "hidden",
                position: "relative",
                bottom: "initial",
                top: "initial",
                right: "initial",
                left: "initial",
                zIndex: 999,
                transform: "scale(1)",
                transformOrigin: "bottom right",
                transition: "transform 0.3s ease",
                height: "100%",
                width: "100%"
            }}>
            {p.children}
        </div>
    );
};

export default ChatBotContainer;
