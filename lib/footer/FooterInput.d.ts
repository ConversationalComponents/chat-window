import React from "react";
declare type FooterInput = {
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
export declare const FooterInput: React.FC<FooterInput>;
export {};
