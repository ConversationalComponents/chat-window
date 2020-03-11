import React, { useEffect, useRef, ReactNode } from "react";

export const ChatBody = (p: { children?: ReactNode}) => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    container &&
      container.current &&
      container.current.scrollTo({
        top: container.current.scrollHeight,
        behavior: "smooth"
      });
  });

  return (
    <div
      ref={container}
      style={{
        flex: 1,
        overflowY: "auto",
        scrollbarWidth:"thin",
        position:"relative",
        height:"auto",
        paddingTop : "12px"
      }}
      id="coco_chat_window_body"
    >
      {p.children}
    </div>
  );
};
