import React from 'react'
import './Login.css'
import logo from '../../../imgs/logo.png'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'

function Login() {
  return (
    <div className='auth_body'>
        <div className='auth_cont' dir='rtl'>
          <div className="flex align_items" style={{justifyContent:"space-between"}}>
            <div><img src={logo} alt="logo pic" width={60} height={80} /></div>
            <div style={{fontSize:"25px"}}>تسجيل دخول</div>
          </div>

          <Input txt={"رقم الهاتف موبايل"} type={"text"} />
          <Input txt={"كلمة المرور"} type={"password"} />
          <Button txt={"تسجيل دخول"} color={"#101010"}  width={"90%"} />


        </div>
    </div>
  )
}

export default Login