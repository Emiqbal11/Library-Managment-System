import React from 'react'

const CommonButton = ({title,onClick,style}) => {
    return (
        <button onClick={onClick} style={style}>
{title}
        </button>
    )
}

export default CommonButton
