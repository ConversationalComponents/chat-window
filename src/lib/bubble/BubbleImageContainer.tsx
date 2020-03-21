import React from 'react'

type BubbleiImage = {
    src:string
}

const BubbleImageContainer = (p:BubbleiImage) => {
    return (
        <img src={`${p.src}`} style={{maxHeight:"300px",maxWidth:"calc(100% - 104px)", marginBottom:"10px"}} alt="GIF NOT LOADING"/> 
    )
}

export default BubbleImageContainer