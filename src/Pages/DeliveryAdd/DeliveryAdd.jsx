import React from 'react'
import Button from '../../Components/Button/Button'
import Header from '../../Components/Header/Header'
import Input from '../../Components/Input/Input'
import add from '../../../imgs/add.png'

function DeliveryAdd() {
  return (
    <div>
    <div dir='rtl'>
<Header />
<div style={{display:"flex",justifyContent:"center"}}><img src={add} alt="women pic" style={{borderRadius:"15px",width:"200px",height:"200px",cursor:"pointer"}} /></div>
<div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
    <div style={{width:"30%",padding:"2%"}}>

    <Input txt={"السعر"} type={"number"}  />
    <Button txt={"اضافة"} color={"#101010"} width={"90%"} padding={"3%"}/>


    </div>
</div>
</div>
</div>
  )
}

export default DeliveryAdd