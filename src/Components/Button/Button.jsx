import React from 'react'
import './Button.css'

function Button({txt,color,width,padding="4%"}) {
  return (
    <div style={{backgroundColor:color,width:width,padding:padding}} className="btn">
        {txt}
    </div>
  )
}

export default Button