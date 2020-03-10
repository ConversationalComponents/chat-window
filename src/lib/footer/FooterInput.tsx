import React, {useState, useEffect, useCallback} from "react";
import Input from "./Input";
import {ConfirmTextButton} from "./ConfirmTextButton";

type FooterInput = {
    onSubmit: (value: string) => void;
    onChange?: (value: string) => void;
    onFocus?: (e:React.FocusEvent) => void;
    invalidate?: (value: string) => boolean;
    inputPlaceholder: string;
    disabled?: boolean;
    actionButton?: JSX.Element;
    minRows?: number;
    maxRows?: number;
    maxHeight?: number;
    minHeight?: number;
}

export const FooterInput = (p: FooterInput) => {
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
    const [isRefocusing, setIsRefocusing] = useState(false);

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
        setIsRefocusing(true);                        
    };

    const onFocus = (e:React.FocusEvent) => {
       return p.onFocus ? p.onFocus(e) : ""
    }

    const [actionButton, setActionButton] = useState(p.actionButton || <ConfirmTextButton onSubmit={onClickSubmit} />);

    useEffect(() => {
        setActionButton(p.actionButton || <ConfirmTextButton onSubmit={onClickSubmit} />);
    }, [p.actionButton, value]);


    const onKeyPress = (event: React.KeyboardEvent<any>) => {
        const {value} =  event.currentTarget   
        const {key} = event           
        const isInvalid = validate(value);

        setIsRefocusing(false);         

        if (!isInvalid) {
        
            if (key === "Enter") {
                if(value.length !== 0) onSubmit(value);
            }
        }
    };

    const onChange = useCallback((event: React.ChangeEvent<any>) => {
        setValue(event.currentTarget.value);
    }, []);

    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                position:"relative",
                borderTop: "1px solid #eee"
            }}>
            <Input
                {...{
                    isRefocusing,
                    inputInvalid,
                    inputPlaceholder,
                    onKeyPress,
                    onChange,
                    onFocus,
                    value,
                    disabled,
                    minRows: p.minRows,
                    maxRows: p.maxRows,
                    minHeight: p.minHeight,
                    maxHeight: p.maxHeight
                }}
            />
            <div style={{position:"absolute", right : 0,height:"100%"}}>
                   {actionButton}
            </div>
        </div>
    );
};
