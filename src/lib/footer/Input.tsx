import React, {useRef, useEffect} from "react";

const MAX_HEIGHT = 180;

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
        if (!inputRef.current) return;
        inputRef.current.style.height = "22px";
        inputRef.current.oninput = () => {
            if (!inputRef.current) return;
            inputRef.current.style.height = "22px";
            inputRef.current.style.height = Math.min(inputRef.current.scrollHeight, MAX_HEIGHT) + "px";
        };
    }, [inputRef.current]);

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
        <textarea
            rows={1}
            style={{
                border: 0,
                borderRadius: 0,
                height: "22px",
                minHeight: "22px",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
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
            onChange={onChange}
            onKeyPress={onKeyPress}
            type="textarea"
            disabled={disabled}
            placeholder={inputInvalid ? "" : inputPlaceholder}
        />
    );
};

export default Input;
