# chat-window

Basic chat window functionality

install with ```npm install @conversationalcomponents/chat-window```

example:
```js
import React from "react";
import {ChatWindow} from "@conversationalcomponents/chat-window";

export const Example = () => (
    <ChatWindow
        content={[
            {
                isUser: false,
                message: "Hi, this is an example",
                avatar: "https://img.icons8.com/color/search/96",
                id: "message_0",
                isLoading: false
            }
        ]}
    />
);


```


An example with fake conversation:
```js

import React, {useState, useEffect} from "react";
import {ChatWindow} from "@conversationalcomponents/chat-window";

const makeMessage = (isUser: boolean, text: string, id: number) => ({
    isUser,
    message: text,
    avatar: isUser ? "https://img.icons8.com/color/search/0" : "https://img.icons8.com/color/search/96",
    id: `message_${id}`,
    isLoading: false
});

const botReplies = ["Wow!", "Fascinating, please do go on", "Amazing!", "Really?", "If you say so..."];

export const Example = () => {
    const [content, setContent] = useState([makeMessage(false, "Hello and welcome to the example!", 0)]);
    useEffect(() => {
        const lastEntry = content.length && content[content.length - 1];
        lastEntry &&
            lastEntry.isUser &&
            setContent([...content, makeMessage(false, botReplies[Math.floor(Math.random() * botReplies.length)], 0)]);
    }, [content]);
    return (
        <ChatWindow
            title="Example"
            content={content}
            onSubmit={(text: string) => setContent([...content, makeMessage(true, text, content.length)])}
        />
    );
};


```

An example with custom header, typing animations (Typescript):
```js
import React, {useState, useEffect} from "react";
import {useUserTyping, useBotTyping, ChatWindow} from "@conversationalcomponents/chat-window";
import {ChatEntry} from "@conversationalcomponents/chat-window/types";

const botReplies = ["Wow!", "Fascinating, please do go on", "Amazing!", "Really?", "If you say so..."];
const getBotReply = () => botReplies[Math.floor(Math.random() * botReplies.length)];
const userAvatar = "https://img.icons8.com/color/search/0";
const botAvatar = "https://img.icons8.com/color/search/1";

export const Example = () => {
    const [content, setContent] = useState<ChatEntry[]>([]);
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

    useUserTyping(content, setContent, lastUnsubmittedInput, lastInputValue, userAvatar);
    const isBotDoneTyping = useBotTyping(content, setContent, lastInputValue, botAvatar);

    useEffect(() => {
        if (!isBotDoneTyping) return;
        const lastEntry = content.length && content[content.length - 1];
        if (!lastEntry || lastEntry.isUser) return;
        lastEntry.message = getBotReply();
        lastEntry.isLoading = false;
    }, [isBotDoneTyping]);

    return (
        <ChatWindow
            headerAdditionalContent={<div style={{flex: 1, display: "flex", justifyContent: "center"}}>HEADER</div>}
            content={content}
            onChange={(text: string) => setLastUnsubmittedInput(text)}
            onSubmit={(text: string) => setLastInputValue(text)}
        />
    );
};

```
