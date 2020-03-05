import React, {useState, useEffect, useCallback} from "react";
import Input from "./Input";
import {ConfirmTextButton} from "./ConfirmTextButton";

export const FooterInput = (p: {
    onSubmit: (value: string) => void;
    onChange?: (value: string) => void;
    invalidate?: (value: string) => boolean;
    inputPlaceholder: string;
    disabled?: boolean;
    actionButton?: JSX.Element;
    minRows?: number;
    maxRows?: number;
    maxHeight?: number;
    minHeight?: number;
}) => {
    const defaultInvalidate = (value: string) => false;

    const validate = (value: string) => {
        const isInvalid = (p.invalidate || defaultInvalidate)(value);
        setIsInputInvalid(isInvalid);
        return isInvalid;
    };
    const [inputInvalid, setIsInputInvalid] = useState<boolean>(false);
    const [inputPlaceholder, setInputPlaceholder] = useState(p.inputPlaceholder);
    const [value, setValue] = useState("");
    const [disabled, setDisabled] = useState(!!p.disabled);
    const [isRefocusing, setisRefocusing] = useState(false);

    useEffect(() => {
        p.onChange && p.onChange(value);
    }, [value]);

    useEffect(() => {
        setDisabled(!!p.disabled);
    }, [p.disabled]);

    useEffect(() => {
        setInputPlaceholder(p.inputPlaceholder);
    }, [p.inputPlaceholder]);

    const onClickSubmit = () => {
        value && onSubmit(value);
    };

    const onSubmit = (value: string) => {
        setValue("");
        p.onSubmit(value);
        setisRefocusing(true);
    };

    const [actionButton, setActionButton] = useState(p.actionButton || <ConfirmTextButton onSubmit={onClickSubmit} />);
    useEffect(() => {
        setActionButton(p.actionButton || <ConfirmTextButton onSubmit={onClickSubmit} />);
    }, [p.actionButton, value]);

    const onKeyPress = (event: React.KeyboardEvent<any>) => {
        const isInvalid = validate(event.currentTarget.value);
        if (isInvalid) return;
        const key = event.key;
        if (key === "Enter") {
            onSubmit(event.currentTarget.value);
        }
    };

    const onChange = useCallback((event: React.ChangeEvent<any>) => {
        setValue(event.currentTarget.value);
    }, []);

    return (
        <div
            style={{
                position: "relative",
                display: "flex",
                width: "100%",
                height: "fit-content",
                borderTop: "1px solid #eee"
            }}>
            <Input
                {...{
                    isRefocusing,
                    inputInvalid,
                    inputPlaceholder,
                    onKeyPress,
                    onChange,
                    value,
                    disabled,
                    minRows: p.minRows,
                    maxRows: p.maxRows,
                    minHeight: p.minHeight,
                    maxHeight: p.maxHeight
                }}
            />
            {actionButton}
        </div>
    );
};
