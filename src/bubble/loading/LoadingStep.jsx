import React from "react";

const css = `.loadingAnimation {
    animation: loading 1.4s infinite both;
}
@keyframes loading {
    0% {
        opacity: 0.2;
    }
    20% {
        opacity: 1;
    }
    100% {
        opacity: 0.2;
    }
}
`;

export const LoadingStep = ({children, delay}) => {
    return (
        <>
            <style>{css}</style>
            <span
                style={{
                    animationDelay: `${delay}`
                }}
                className="loadingAnimation">
                {children}
            </span>
        </>
    );
};
