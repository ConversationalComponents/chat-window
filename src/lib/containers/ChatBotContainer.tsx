import React from "react";

const ChatBotContainer = (p: { children: any }) => {


  return (
    <div
      style={{
        backgroundColor: "#f5f8fb",
        borderRadius: "10px",
        fontFamily: "sans-serif",
        overflow: "hidden",
        position: "relative",
        bottom: "0 !important",
        top: "initial !important",
        right: "0 !important",
        left: "initial",
        zIndex: 999,
        transform: "scale(1)",
        transformOrigin: "bottom right",
        transition: "transform 0.3s ease",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {p.children}
    </div>
  );
};

export default ChatBotContainer;
