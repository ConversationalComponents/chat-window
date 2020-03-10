import React, {useState, useEffect} from "react";
import {HeaderParams} from "../../types";
import {isMobile} from 'react-device-detect'

export const Header = (p: HeaderParams) => {
    const [title, setTitle] = useState(p.title);

    useEffect(() => {
        setTitle(p.title);
    }, [p.title]);

    return (
        <div
            style={{
                alignItems: "center",
                backgroundColor: "#01a6e0",
                color: "#fff",
                display: "flex",
                fill: "#fff",
                height: "56px",
                zIndex:99999,
                justifyContent: "space-between",
                padding: "0 10px"
            }}>
            <h2
                style={{
                    margin: 0,
                    fontSize: "17px"
                }}>
                {title}
            </h2>
            {p.extraContent ? p.extraContent : null}
        </div>
    );
};
