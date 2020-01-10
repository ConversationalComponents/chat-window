import React from "react";
declare const Input: (p: {
    inputInvalid: boolean;
    inputPlaceholder: string;
    onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled: boolean;
    value: string;
    isRefocusing: boolean;
}) => JSX.Element;
export default Input;
