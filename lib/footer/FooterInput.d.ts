/// <reference types="react" />
export declare const FooterInput: (p: {
    onSubmit: (value: string) => void;
    onChange?: ((value: string) => void) | undefined;
    invalidate?: ((value: string) => boolean) | undefined;
    inputPlaceholder: string;
    disabled?: boolean | undefined;
    actionButton?: JSX.Element | undefined;
    minRows?: number | undefined;
    maxRows?: number | undefined;
}) => JSX.Element;
