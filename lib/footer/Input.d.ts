import React from "react";
declare type Input = {
    inputInvalid: boolean;
    inputPlaceholder: string;
    onKeyPress: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    disabled: boolean;
    value: string;
    isRefocusing: boolean;
    minRows?: number;
    maxRows?: number;
};
declare const Input: (p: Input) => JSX.Element;
export default Input;
