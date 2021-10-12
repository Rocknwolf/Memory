import React from 'react'

function Button({handleClick, title}) {
    
    return <button onClick={handleClick} >{title}</button> 
}

export default Button
