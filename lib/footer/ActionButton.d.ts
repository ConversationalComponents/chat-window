import React from "react";
export declare const ActionButton: (p: {
    color?: string | undefined;
    children?: any;
    invalid: boolean;
    disabled: boolean;
    onTouchStart: (event: React.PointerEvent<HTMLButtonElement>) => void;
    onTouchCancel: (event: React.PointerEvent<HTMLButtonElement>) => void;
    onTouchEnd: (event: React.PointerEvent<HTMLButtonElement>) => void;
}) => JSX.Element;
