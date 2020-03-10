import React, { useState, useEffect } from "react";
import { ChatEntry } from "../types";
import { ChatWindow } from "./ChatWindow";
import { useUserTyping } from "./hooks/useUserTyping";
import { useBotTyping } from "./hooks/useBotTyping";
import {isMobile} from 'react-device-detect'

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

  useEffect(() => {
    const lastEntry = content.length && content[content.length - 1];
    if (!lastEntry || lastEntry.isUser) return;
    setLastInputValue("");
  }, [content]);

  useEffect(() => {
    lastInputValue && setLastUnsubmittedInput("");
  }, [lastInputValue]);

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
        height:isMobile ? window.innerHeight : "calc(100vh - 40px)",
        position:isMobile ? "fixed" : "relative",
        bottom:0,
        left : 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems : "center",
        transition : "height 0.3s linear"
    }}>

    <div
        style={{
            height:"100%",
            width: "360px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: "10px",
            boxShadow: "rgba(0,0,0,0.5) 0px 0px 3px 3px"
        }}>
    <ChatWindow
      headerAdditionalContent={
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          HEADER
        </div>
      }
      content={content}
      onChange={(text: string) => setLastUnsubmittedInput(text)}
      onSubmit={(text: string) => setLastInputValue(text)}
    />
    </div>
    </div>
  );
};
