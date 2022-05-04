import React from 'react'
import Button from '../../Components/Button/Button'
import Header from '../../Components/Header/Header'
import Input from '../../Components/Input/Input'
import profile from '../../../imgs/profile.png'

function UsersEdit() {
  return (
    <div>
        <Header />

        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div>
            <img src={profile} alt="profile pic" width={150} height={150} />
        </div>
        <div style={{width:"30%",padding:"2%"}} dir="rtl">
            <Input txt={"الاسم"} type={"text"} value={"حلزوم ابراهيم"} />
            <Input txt={"رقم الهاتف"} type={"number"} value={"0780997333"} />
            <Input txt={"المحافظة"} type={"text"} value={"عمان"} />

            
            <Button txt={"حفظ"} color={"#101010"} width={"90%"} padding={"3%"}/>
            <Button txt={"حذف"} color={"#ff0000"} width={"90%"} padding={"3%"} />

            </div>
            
        </div>

    </div>
  )
}

export default UsersEdit