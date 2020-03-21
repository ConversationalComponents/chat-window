import React from "react";
declare type Input = {
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
};
declare const Input: (p: Input) => JSX.Element;
export default Input;
