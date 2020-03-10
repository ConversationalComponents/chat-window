import React, {useRef, useEffect} from "react";
// @ts-ignore
import TextareaAutosize from "react-autosize-textarea";

type Input = {
    inputInvalid: boolean;
    inputPlaceholder: string;
    onKeyPress: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    disabled: boolean;
    value: string;
    isRefocusing: boolean;
    minRows?: number;
    maxRows?: number;
    maxHeight?: number;
    minHeight?: number;
};

const Input = (p: Input) => {
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
            rows={p.minRows || 1}
            maxRows={p.maxRows || 4}
            style={{
                borderRadius: 0,
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                border: "none",
                minHeight: p.minHeight ? `${p.minHeight}px` : "56px",
                maxHeight: p.maxHeight ? `${p.maxHeight}px` : p.minHeight ? `${p.minHeight}px` : "180px",
                height: `${p.minHeight}px` || "56px",
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
