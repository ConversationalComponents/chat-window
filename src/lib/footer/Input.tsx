import React, {useRef, useEffect, useState} from "react";
import {isMobile} from "react-device-detect";

// @ts-ignore
type Input = {
    inputInvalid: boolean;
    inputPlaceholder: string;
    onKeyPress?: (event: React.KeyboardEvent) => void;
    onChangeHandler: (event: React.ChangeEvent) => void;
    onFocusHandler: (event: React.FocusEvent) => void;
    onBlurHandler: (event: React.FormEvent) => void;
    disabled: boolean;
    value: string;
    minRows?: number;
    maxRows?: number;
    maxHeight?: number;
    minHeight?: number;
    padding?: string;
    isRtl?: boolean;
};

const Input = (p: Input) => {
    const {inputInvalid, inputPlaceholder, onKeyPress, onChangeHandler, disabled, value, onFocusHandler, isRtl} = p;

    const textAreaRef = useRef<any>();
    const [height, setHeight] = useState(p.minHeight || 56);

    useEffect(() => {
        setHeight(textAreaRef?.current.scrollHeight);

        if (value === "") {
            setHeight(p.minHeight || 56);
        }
    }, [value]);

    const onBlurHandler = (e: React.FormEvent) => {
        return p.onBlurHandler ? p.onBlurHandler(e) : "";
    };

    useEffect(() => {
        if (disabled === false && !isMobile) {
            textAreaRef.current.focus();
        }
    }, [disabled]);

    return (
        <textarea
            style={{
                direction: isRtl ? "rtl" : "ltr",
                borderBottomLeftRadius: isRtl ? "0px" : "10px",
                borderBottomRightRadius: isRtl ? "10px" : "0px",
                width: "100%",
                border: "none",
                boxShadow: "none",
                boxSizing: "border-box",
                fontSize: "16px",
                padding: `${p.padding || 18}px`,
                paddingRight: isRtl ? `${p.padding || 18}px` : "55px",
                paddingLeft: isRtl ? "55px" : `${p.padding || 18}px`,
                height: `${height}px`,
                maxHeight: `${p.maxHeight || 110}px`,
                lineHeight: "20px",
                fontFamily: "sans-serif",
                scrollbarWidth: "thin",
                opacity: disabled && !inputInvalid ? 0.5 : 1,
                outline: "none",
                overflow: "auto",
                resize: "none",
                // @ts-ignore
                "&:disabled": {
                    background: "#fff",
                },
            }}
            ref={textAreaRef}
            rows={1}
            value={value}
            disabled={disabled}
            placeholder={inputInvalid ? "" : inputPlaceholder}
            onKeyPress={onKeyPress}
            onChange={onChangeHandler}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            autoFocus={false}
            wrap="true"
            autoComplete="false"
            spellCheck="true"
            id="coco_chat_window_textarea"
        />
    );
};

export default Input;
