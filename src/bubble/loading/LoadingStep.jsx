import React from "react";
import "./loadingAnimation.css";

export const LoadingStep = ({children, delay}) => {
    return (
        <span
            style={{
                animationDelay: `${delay}`
            }}
            className="loadingAnimation">
            {children}
        </span>
    );
};
