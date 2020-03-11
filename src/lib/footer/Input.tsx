import React, {useRef, useEffect,useState} from "react";

// @ts-ignore

type Input = {
    inputInvalid: boolean;
    inputPlaceholder: string;
    onKeyPress: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onFocus: (event:React.FocusEvent<HTMLTextAreaElement>) => void;
    disabled: boolean;
    value: string;
    isRefocusing: boolean;
    minRows?: number;
    maxRows?: number;
    maxHeight?: number;
    minHeight?: number;
};

const Input = (p: Input) => {

    const {inputInvalid, inputPlaceholder, onKeyPress, onChange, disabled, value,isRefocusing,onFocus} = p;

    const textAreaRef = useRef<any>()
    const [height, setHeight] = useState("56");


    useEffect(() => {

        setHeight(textAreaRef.current.scrollHeight)

    },[textAreaRef?.current?.scrollHeight])

    
    useEffect(() => {

        if(isRefocusing) {

            setHeight("56");
            textAreaRef.current.focus();

        }

    },[isRefocusing])

    return (
        <textarea    
            style={{
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                    width:"100%",
                    border: "none",
                    boxShadow: "none",
                    boxSizing: "border-box",
                    fontSize: "16px",
                    padding:"18px",
                    paddingRight:"55px",
                    height:`${height}px`,
                    maxHeight:"110px",
                    lineHeight:"18px",
                    fontFamily: "sans-serif",
                    opacity: disabled && !inputInvalid ? 0.5 : 1,
                    outline: "none",
                    overflow: "auto",
                    scrollbarWidth:"thin",
                    resize: "none",
                    // @ts-ignore
                    "&:disabled": {
                        background: "#fff"
                    }
                }}
                    ref={textAreaRef}
                    value={value}
                    disabled={disabled}
                    placeholder={inputInvalid ? "" : inputPlaceholder}
                    onKeyPress={onKeyPress}
                    onChange={onChange} 
                    onFocus={onFocus}
                    autoFocus={false}
                    spellCheck="true" 
                    id="coco_chat_window_textarea"            
                />
    );
};

export default Input;
