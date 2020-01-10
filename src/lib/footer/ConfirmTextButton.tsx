import React, {useState, useEffect} from "react";
import {ActionButton} from "./ActionButton";

export const ConfirmTextButton = (p: {onSubmit: () => void; disabled?: boolean; inputInvalid?: boolean}) => {
    const [inputInvalid, setInputInvalid] = useState(!!p.inputInvalid);
    const [disabled, setDisabled] = useState(!!p.disabled);

    useEffect(() => setDisabled(!!p.disabled), [p.disabled]);
    useEffect(() => setInputInvalid(!!p.inputInvalid), [p.inputInvalid]);

    const onTouchStart = () => {};

    const onTouchCancel = () => {};

    const onTouchEnd = () => {
        p.onSubmit();
    };

    return (
        <ActionButton {...{color: undefined, disabled, invalid: inputInvalid, onTouchStart, onTouchCancel, onTouchEnd}}>
            <svg style={{height: "24px", width: "24px"}}>
                <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
            </svg>
        </ActionButton>
    );
};
