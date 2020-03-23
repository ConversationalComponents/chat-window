import React, { useState, useEffect } from "react";
import { ChatEntry,MessageContent } from "../types";
import { ChatWindow } from "./ChatWindow";
import { useUserTyping } from "./hooks/useUserTyping";
import { useBotTyping } from "./hooks/useBotTyping";
import {isMobile} from 'react-device-detect'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

const botReplies = [[{text:"Hello",image:"https://media.giphy.com/media/Fn7q3cMgPZmqk/giphy.gif"},{text:"Hi my name is tobi im a human chat bot Hi my name is tobi im a human chat bot Hi my name is tobi im a human chat bot Hi my name is tobi im a human chat bot",image:""},{text:"How are you?",image:""}],[{text:"Hello",image:""},{text:"hi",image:"https://media.giphy.com/media/duzpaTbCUy9Vu/giphy.gif"}] , "This is a string"];

const getBotReply = () => botReplies[Math.floor(Math.random() * botReplies.length)];

const userAvatar = "https://img.icons8.com/color/search/0";
const botAvatar = "https://img.icons8.com/color/search/1";

export const Example = () => {
  const [content, setContent] = useState<ChatEntry[]>([
    {
      isUser: false,
      message: [{text:"Welcome",image:""}],
      avatar: botAvatar,
      id: "intro message"
    }
  ]);

  const [lastInputValue, setLastInputValue] = useState<MessageContent[] | string>();
  const [lastUnsubmittedInput, setLastUnsubmittedInput] = useState<MessageContent[] | string>();
  const [headerHeight,setHeaderHeight] = useState<number>(56);
  const [height,setHeight] = useState(window.innerHeight);
  const [windowHeight,setWindowHeight] = useState<number>();

  useEffect(() => {
    const lastEntry = content.length && content[content.length - 1];
    if (!lastEntry || lastEntry.isUser) return;
    setLastInputValue(undefined);
  }, [content]);

  useEffect(() => {
    setWindowHeight(window.innerHeight)
  },[])

  useEffect(() => {
   lastInputValue !== undefined  && setLastUnsubmittedInput(undefined);
  }, [lastInputValue]);

  useEffect(() => {
    return () => {
      clearAllBodyScrollLocks()
    }
  },[])

  useUserTyping(
    content,
    setContent,
    lastUnsubmittedInput as MessageContent[] | string,
    lastInputValue as MessageContent[] | string,
    userAvatar
  );

  const isBotDoneTyping = useBotTyping(
    content,
    setContent,
    lastInputValue as MessageContent[] | string,
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

  const onBlur = (e:React.FormEvent) => {
    e.preventDefault()
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

  const onSubmit = (text:string) => {
    if(text && !text.match(/^\s*$/)){
      setLastInputValue([{text,image:""}])
    } else {
      setLastInputValue(undefined)
      setLastUnsubmittedInput(undefined)
    }
  }

  const onChange = (text:string) => {
    if (text){
      setLastUnsubmittedInput([{text : text,image:""}])
    } else setLastUnsubmittedInput(undefined)
  }

  return (
    
        <div
        style={{
          height: `${height}px`,
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
                onChange={onChange}
                onSubmit={onSubmit}
                onFocus={onFocus}
                onBlur={onBlur}
           />
           </div>
        </div>
  );
};
