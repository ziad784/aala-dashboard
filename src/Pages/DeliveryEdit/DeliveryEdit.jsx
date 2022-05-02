import React from 'react'
import aramax from '../../../imgs/aramax.png'
import Button from '../../Components/Button/Button'
import Header from '../../Components/Header/Header'
import Input from '../../Components/Input/Input'

function DeliveryEdit() {
  return (
    <div>
        <Header />

        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div>
            <img src={aramax} alt="aramax pic" width={150} height={150} />
        </div>
        <div style={{width:"30%",padding:"2%"}}>
            <Input txt={"السعر"} type={"number"} value={5} />

            <Button txt={"حفظ"} color={"#101010"} width={"90%"} />

            </div>
            
        </div>

    </div>
  )
}

export default DeliveryEdit