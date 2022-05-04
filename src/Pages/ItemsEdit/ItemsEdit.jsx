import React from 'react'
import Button from '../../Components/Button/Button'
import Header from '../../Components/Header/Header'
import Input from '../../Components/Input/Input'
import item_img from '../../../imgs/itemPic.png'

function ItemsEdit() {
  return (
    <div dir='rtl'>
         <Header />
        <div style={{display:"flex",justifyContent:"center"}}><img src={item_img} alt="item pic" style={{borderRadius:"50%",width:"300px",height:"300px",cursor:"pointer"}} /></div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <div style={{width:"30%",padding:"2%"}}>
            <Input txt={"اسم المنتج"} type={"text"} value={"اسم المنتج"} />
            <Input txt={"السعر"} type={"number"} value={5} />
            <Button txt={"حفظ"} color={"#101010"} width={"90%"} padding={"3%"}/>
            <Button txt={"حذف"} color={"#ff0000"} width={"90%"} padding={"3%"} />

            </div>
        </div>
    </div>
  )
}

export default ItemsEdit