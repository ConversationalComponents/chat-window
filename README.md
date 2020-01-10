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
