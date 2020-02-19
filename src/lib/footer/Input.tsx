import React, {useRef, useEffect} from "react";
import TextareaAutosize from "react-autosize-textarea";

const Input = (p: {
    inputInvalid: boolean;
    inputPlaceholder: string;
    onKeyPress: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    disabled: boolean;
    value: string;
    isRefocusing: boolean;
}) => {
    const {inputInvalid, inputPlaceholder, onKeyPress, onChange, disabled, value} = p;
    const inputRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (!disabled) {
            inputRef.current && inputRef.current.focus();
        } else {
            inputRef.current && inputRef.current.blur();
        }
    }, [disabled]);

    useEffect(() => {
        p.isRefocusing && inputRef.current && inputRef.current.focus();
    }, [p.isRefocusing]);

    return (
        <TextareaAutosize
            contentEditable="true"
            style={{
                border: 0,
                borderRadius: 0,
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                minHeight: "22px",
                maxHeight: "180px",
                boxShadow: "none",
                boxSizing: "border-box",
                fontSize: "16px",
                fontFamily: "sans-serif",
                opacity: disabled && !inputInvalid ? 0.5 : 1,
                outline: "none",
                flex: 1,
                padding: "16px 10px",
                overflow: "hidden",
                WebkitAppearance: "none",
                resize: "none",
                // @ts-ignore
                "&:disabled": {
                    background: "#fff"
                }
            }}
            ref={inputRef}
            value={value}
            disabled={disabled}
            placeholder={inputInvalid ? "" : inputPlaceholder}
            onKeyPress={onKeyPress}
            onChange={onChange}
        />
    );
};

export default Input;
