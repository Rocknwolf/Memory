import React from 'react'

function Button({handleClick, title}) {
    
    return <button className='mainBtn' onClick={handleClick} >{title}</button> 
}

export default Button
