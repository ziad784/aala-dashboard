import React from 'react'
import women from '../../../imgs/women.png'
import Button from '../../Components/Button/Button'
import Header from '../../Components/Header/Header'
import Input from '../../Components/Input/Input'

function CategoriesEdit() {
  return (
    <div dir='rtl'>
        <Header />
        <div style={{display:"flex",justifyContent:"center"}}><img src={women} alt="women pic" style={{borderRadius:"50%",width:"300px",height:"300px",cursor:"pointer"}} /></div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <div style={{width:"30%",padding:"2%"}}>
            <Input txt={"اسم القسم"} type={"text"} value={"ملابس النساء"} />
            <Input txt={"الكلمة الثانية"} type={"text"} value={"أزياء رائعة للنساء"} />
            <Button txt={"حفظ"} color={"#101010"} width={"90%"} padding={"3%"}/>
            <Button txt={"حذف"} color={"#ff0000"} width={"90%"} padding={"3%"} />

            </div>
        </div>
    </div>
  )
}

export default CategoriesEdit