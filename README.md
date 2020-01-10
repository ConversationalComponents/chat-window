# chat-window-core

Basic chat window functionality

install with ```npm install coco-chat-window-core```

example:
```
import React from "react";
import {ChatWindow} from "coco-chat-window-core";

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
```

import React, {useState, useEffect} from "react";
import {ChatWindow} from "coco-chat-window-core";

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
            content={content}
            onSubmit={(text: string) => setContent([...content, makeMessage(true, text, content.length)])}
        />
    );
};


```
