import React, { useState, useEffect,useRef } from "react";
import { ChatEntry } from "../types";
import { ChatWindow } from "./ChatWindow";
import { useUserTyping } from "./hooks/useUserTyping";
import { useBotTyping } from "./hooks/useBotTyping";
import {isMobile} from 'react-device-detect'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

const botReplies = [
  "Wow!",
  "Fascinating, please do go on",
  "Amazing!",
  "Really?",
  "If you say so..."
];

const getBotReply = () =>
  botReplies[Math.floor(Math.random() * botReplies.length)];
const userAvatar = "https://img.icons8.com/color/search/0";
const botAvatar = "https://img.icons8.com/color/search/1";

export const Example = () => {
  const [content, setContent] = useState<ChatEntry[]>([
    {
      isUser: false,
      message: "welcome to demo",
      avatar: botAvatar,
      id: "intro message"
    }
  ]);
  const [lastInputValue, setLastInputValue] = useState("");
  const [lastUnsubmittedInput, setLastUnsubmittedInput] = useState("");
  const [headerHeight,setHeaderHeight] = useState<number>(56);
  const [height,setHeight] = useState(window.innerHeight);
  const [windowHeight,setWindowHeight] = useState<number>();


  useEffect(() => {
    const lastEntry = content.length && content[content.length - 1];
    if (!lastEntry || lastEntry.isUser) return;
    setLastInputValue("");
  }, [content]);

  useEffect(() => {
    setWindowHeight(window.innerHeight)
  },[])

  useEffect(() => {
    lastInputValue && setLastUnsubmittedInput("");
  }, [lastInputValue]);

  useEffect(() => {
    return () => {
      clearAllBodyScrollLocks()
    }
  },[])

  useUserTyping(
    content,
    setContent,
    lastUnsubmittedInput,
    lastInputValue,
    userAvatar
  );

  const isBotDoneTyping = useBotTyping(
    content,
    setContent,
    lastInputValue,
    botAvatar
  );

  const getCurrentWindowHeight = () => {
    return window.innerHeight;
  }

  const chatBody = document.getElementById("coco_chat_window_body") as HTMLElement;
  const textarea = document.getElementById("coco_chat_window_textarea") as HTMLElement;

  const onFocus = () => {
    if(isMobile){

      setTimeout(() => {
        setHeight(() => getCurrentWindowHeight())
        setHeaderHeight(() => 40);
        disableBodyScroll(chatBody);
        disableBodyScroll(textarea);
      },150)
      
    }
  }

  const onBlur = () => {
    if(isMobile){

      if(typeof windowHeight === "number") setHeight(windowHeight);
      enableBodyScroll(chatBody);
      enableBodyScroll(textarea)
      setTimeout(() => {
        setHeaderHeight(() => 56);   
      },350)
    } 
  }


  useEffect(() => {
    if (!isBotDoneTyping) return;
    const lastEntry = content.length && content[content.length - 1];
    if (!lastEntry || lastEntry.isUser) return;
      lastEntry.message = getBotReply();
      lastEntry.isLoading = false;

  }, [isBotDoneTyping]);


  return (
    
        <div
        style={{
          height: `${height}px `,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          position: isMobile ? "absolute" : "relative",
          left : "0",
          bottom : "0",
          transition : "all 0.3s linear"         
      }}          
      id="boxContainer"
      >
      <div
          style={{
              height: "100%",
              width:isMobile ? "100%" : "360px",
              borderRadius: "10px",
              boxShadow:isMobile ? "none" : "rgba(0,0,0,0.5) 0px 0px 3px 3px"
          }}>
              <ChatWindow
                headerAdditionalContent={
                  <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                    HEADER
                  </div>
                }
                headerHeight={headerHeight}
                content={content}
                onChange={(text: string) => setLastUnsubmittedInput(text)}
                onSubmit={(text: string) => setLastInputValue(text)}
                onFocus={onFocus}
                onBlur={onBlur}
           />
           </div>
        </div>
  );
};
