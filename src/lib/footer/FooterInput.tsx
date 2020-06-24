import React, {useState, CSSProperties} from "react";
import Input from "./Input";
import {ConfirmTextButton} from "./ConfirmTextButton";

type FooterInput = {
    onSubmit: (value: string) => void;
    onChange?: (value: string) => void;
    onFocus?: (e: React.FocusEvent) => void;
    onBlur?: (e: React.FormEvent) => void;
    invalidate?: (value: string) => boolean;
    inputPlaceholder: string;
    disabled?: boolean;
    actionButton?: JSX.Element;
    minRows?: number;
    maxRows?: number;
    maxHeight?: number;
    minHeight?: number;
    isRtl?: boolean;
};

const rtlAction = {position: "absolute", left: -10, height: "100%", transform: `rotateY(180deg)`} as CSSProperties;
const ltrAction = {position: "absolute", right: 0, height: "100%"} as CSSProperties;

export const FooterInput: React.FC<FooterInput> = ({
    inputPlaceholder,
    disabled,
    onSubmit,
    onFocus,
    onBlur,
    onChange,
    actionButton = <ConfirmTextButton />,
    isRtl,
    minRows,
    maxRows,
    maxHeight,
    minHeight,
}) => {
    const [value, setValue] = useState("");

    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(value);
        setValue("");
    };

    const onFocusHandler = (e: React.FocusEvent) => onFocus && onFocus(e);

    const onBlurHandler = (e: React.FormEvent) => onBlur && onBlur(e);

    // onChange handler
    const onChangeHandler = (event: any) => {
        const {value} = event.target;

        onChange && onChange(value);
        setValue(value);
    };

    // onKeyPress Enter submit handler && Enter + shiftKey to create new line
    const onKeyPress = (event: React.KeyboardEvent<any>) => {
        if (event.which === 13 && !event.shiftKey) {
            event.preventDefault();
            onSubmit(value);
            setValue("");
        }
    };

    return (
        <form
            onSubmit={onSubmitHandler}
            style={{width: "100%", display: "flex", position: "relative", borderTop: "1px solid #eee"}}>
            {isRtl && <div style={rtlAction}>{actionButton}</div>}
            <Input
                {...{
                    inputInvalid: false,
                    inputPlaceholder,
                    onChangeHandler,
                    onFocusHandler,
                    onKeyPress,
                    onBlurHandler,
                    value,
                    disabled: !!disabled,
                    minRows,
                    maxRows,
                    minHeight,
                    maxHeight,
                    isRtl,
                }}
            />
            {!isRtl && <div style={ltrAction}>{actionButton}</div>}
        </form>
    );
};
