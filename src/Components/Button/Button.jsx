import React from 'react'
import './Button.css'

function Button({txt,color,width,padding="4%",margin="auto"}) {
  return (
    <div style={{backgroundColor:color,width:width,padding:padding,margin:margin,marginTop:"20px"}} className="btn">
        {txt}
    </div>
  )
}

export default Button