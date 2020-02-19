import React, {useEffect, useRef, useState} from "react";

export const ActionButton = (p: {
    color?: string;
    children?: any;
    invalid: boolean;
    disabled: boolean;
    onTouchStart: (event: React.PointerEvent<HTMLButtonElement>) => void;
    onTouchCancel: (event: React.PointerEvent<HTMLButtonElement>) => void;
    onTouchEnd: (event: React.PointerEvent<HTMLButtonElement>) => void;
}) => {
    const {onTouchStart, onTouchCancel, onTouchEnd} = p;

    const [color, setColor] = useState(p.color);
    useEffect(() => setColor(p.color), [p.color]);
    const [invalid, setInvalid] = useState(p.invalid);
    useEffect(() => setInvalid(p.invalid), [p.invalid]);
    const [disabled, setDisabled] = useState(p.disabled);
    useEffect(() => setDisabled(p.disabled), [p.disabled]);

    const ref = useRef<HTMLButtonElement | null>(null);
    useEffect(() => {
        if (!ref.current) return;
        ref.current.oncontextmenu = event => {
            event.preventDefault();
            event.stopPropagation(); // not necessary in my case, could leave in case stopImmediateProp isn't available?
            event.stopImmediatePropagation();
            return false;
        };
    }, [ref.current]);
    return (
        <button
            ref={ref}
            onPointerDown={onTouchStart}
            onPointerOut={onTouchCancel}
            onPointerUp={onTouchEnd}
            style={{
                pointerEvents: disabled ? "none" : "all",
                backgroundColor: "transparent",
                border: 0,
                borderBottomRightRadius: "10px",
                boxShadow: "none",
                cursor: `${disabled ? "default" : "pointer"}`,
                fill: `${invalid ? "#E53935" : color ? color : "#4a4a4a"}`,
                opacity: `${disabled && !invalid ? ".5" : "1"}`,
                outline: "none",
                padding: "14px 16px 12px 16px",
                background: "white",
                right: 0,
                top: 0,
                // @ts-ignore
                "&:before": {
                    content: "",
                    position: "absolute",
                    width: "23px",
                    height: "23px",
                    borderRadius: "50%"
                },
                "&:not(:disabled):hover": {
                    opacity: "0.7"
                }
            }}
            disabled={disabled}>
            {p.children}
        </button>
    );
};
