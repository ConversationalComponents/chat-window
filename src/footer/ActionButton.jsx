import React, {useEffect, useRef} from "react";

export const ActionButton = ({color, children, invalid, disabled, onTouchStart, onTouchCancel, onTouchEnd}) => {
    const ref = useRef();
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
                position: "absolute",
                right: 0,
                top: 0,
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
            {children}
        </button>
    );
};
