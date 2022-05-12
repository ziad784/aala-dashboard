import React from 'react'

function Input({txt,type,value,onchange}) {
  return (
    <div style={{marginTop:"20px"}}>
        <div style={{marginRight:"5px"}}>{txt}</div>
        <input type={type} onChange={onchange} required value={value} autoComplete='off' style={{border:"none",outline:"none",backgroundColor:"#ebebeb",width:"100%",borderRadius:"5px",padding:"4%",marginTop:"5px"}}/>
    </div>
  )
}

export default Input