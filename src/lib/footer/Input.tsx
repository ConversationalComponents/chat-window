import React, {useRef, useEffect} from "react";

const Input = (p: {
    inputInvalid: boolean;
    inputPlaceholder: string;
    onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled: boolean;
    value: string;
    isRefocusing: boolean;
}) => {
    const {inputInvalid, inputPlaceholder, onKeyPress, onChange, disabled, value} = p;
    const inputRef = useRef<HTMLInputElement>(null);

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
        <input
            style={{
                border: 0,
                borderRadius: 0,
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                borderTop: "1px solid #eee",
                boxShadow: "none",
                boxSizing: "border-box",
                fontSize: "16px",
                opacity: disabled && !inputInvalid ? 0.5 : 1,
                outline: "none",
                padding: "16px 10px",
                width: "100%",
                WebkitAppearance: "none",
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
