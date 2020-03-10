import React, { useEffect, useRef, ReactNode, useState } from "react";

export const ChatBody = (p: { children?: ReactNode}) => {
  const container = useRef<HTMLDivElement | null>(null);
  const [height,setHeight] = useState()

  useEffect(() => {
    container &&
      container.current &&
      container.current.scrollTo({
        top: container.current.scrollHeight,
        behavior: "smooth"
      });
  });

  useEffect(() => {
    const textArea = document.querySelector("#coco_chat_window_textarea");
    const header = 56;

   if(textArea?.clientHeight){

      setHeight(window.innerHeight -  textArea?.clientHeight + header)
    }
  })

  return (
    <div
      ref={container}
      style={{
        flex: 1,
        overflowY: "auto",
        scrollbarWidth:"thin",
        position:"relative",
        height:`${height}px`,
        paddingTop : "12px"
      }}
      id="coco_chat_window_body"
    >
      {p.children}
    </div>
  );
};
