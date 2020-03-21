import React, {useState, useEffect} from "react";
import Input from "./Input";
import {ConfirmTextButton} from "./ConfirmTextButton";

type FooterInput = {
    onSubmit: (value: string) => void;
    onChange?: (value: string) => void;
    onFocus?: (e:React.FocusEvent) => void;
    onBlur?: (e:React.FormEvent) => void;
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

    useEffect(() => {

        setDisabled(!!p.disabled);

    }, [p.disabled]);

    useEffect(() => {

        setInputPlaceholder(p.inputPlaceholder);

    }, [p.inputPlaceholder]);


    // onSubmit hanlder
    const onSubmitHandler = (e:React.FormEvent) => {

        e.preventDefault();
        p.onSubmit(value); 
        setValue("");

    };

    // onFocus handler
    const onFocusHandler = (e:React.FocusEvent) => {

        return p.onFocus ? p.onFocus(e) : ""

    }

    // onBlur handler
    const onBlurHandler = (e:React.FormEvent) => {

        return p.onBlur ? p.onBlur(e) : ""

    }

    // onChange handler
    const onChangeHandler = (event: any) => {
        const {value} = event.target

        p.onChange && p.onChange(value);
        setValue(value);

    }

    // onKeyPress Enter submit handler && Enter + shiftKey to create new line
    const onKeyPress = (event: React.KeyboardEvent<any>) => {

        if(event.which === 13 && !event.shiftKey){
            event.preventDefault();
            p.onSubmit(value)
            setValue("")
        }

    };

    // set action button
    const [actionButton, setActionButton] = useState(p.actionButton || <ConfirmTextButton/>);

    useEffect(() => {

        setActionButton(p.actionButton || <ConfirmTextButton/>);
        
    }, [p.actionButton, value]);

    return (
        <form onSubmit={onSubmitHandler} style={{width:"100%", display: "flex",position:"relative",borderTop: "1px solid #eee"}}>

                    <Input
                        {...{
                            inputInvalid,
                            inputPlaceholder,
                            onChangeHandler,
                            onFocusHandler,
                            onKeyPress,
                            onBlurHandler,
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
        </form>
        
    );
};
