import {MessageContent} from "../../types";

export const getAsMessageContent = (v: MessageContent[] | string) => (typeof v === "string" ? [{text: v}] : v);
