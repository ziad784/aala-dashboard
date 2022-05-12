import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Login.css'
import logo from '../../../imgs/logo.png'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'

function Login() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('')

  const Navigate = useNavigate()

  


  const LoginHandler = () =>{
    fetch("http://localhost:3001/loginDash",{
      method:"POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email:Email,
        password:Password
      })
    })
    .then((res) => res.json())
    .then((data) =>{

      if(data.res === "bad"){
        const login_form = document.getElementById("login_form");
        const err = document.createElement("div");
        err.className = "err show_err_anim";
        err.textContent = data.msg;
        console.log(login_form.children[0]);
        if(!login_form.children[0].classList.contains("err")){
          login_form.prepend(err);
        }

      }else if(data.res === "ok"){

        localStorage.setItem("DashToken",data.token)
        setTimeout(() => {
          window.location.reload()
          
        }, 500);

      }
    })

  }




  return (
    <div className='auth_body'>
        <div className='auth_cont' dir='rtl'>
          <div className="flex align_items" style={{justifyContent:"space-between"}}>
            <div><img src={logo} alt="logo pic" width={60} height={80} /></div>
            <div style={{fontSize:"25px"}}>تسجيل دخول</div>
          </div>

        <div className="login_form" id='login_form'>

        <Input txt={"البريد الالكتروني"} type={"text"} onchange={(e)=>{setEmail(e.target.value);}} />
          <Input txt={"كلمة المرور"} type={"password"} onchange={(e)=>{setPassword(e.target.value);}} />
          <Button txt={"تسجيل دخول"} color={"#101010"}  width={"90%"} onclick={LoginHandler}  />
        </div>


        </div>
    </div>
  )
}

export default Login