import React from "react";

type BubbleiImage = {
    src: string;
};

const BubbleImageContainer = (p: BubbleiImage) => {
    return (
        <img
            src={`${p.src}`}
            style={{maxHeight: "300px", maxWidth: "100%", marginBottom: "10px !important"}}
            alt="GIF NOT LOADING"
        />
    );
};

export default BubbleImageContainer;
