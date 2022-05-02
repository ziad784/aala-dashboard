import React, { useState } from 'react'
import './Header.css'
import logo from '../../../imgs/logo.png'
import profile from '../../../imgs/profile.png'
import {Link} from 'react-router-dom'
import {BiMenu} from 'react-icons/bi'

function Header() {

  const [issidebar, setissidebar] = useState(false)


  const hideSidebar = () =>{
    if(issidebar === true){
      document.getElementById("sidebar").style.display = "none"
      setissidebar(false);
    }else if(issidebar === false){
      document.getElementById("sidebar").style.display = "block"
      setissidebar(true);
    }
  }



  return (
    <header dir='rtl'>

        

         <Link to={"/"}>
          <div className="left_header flex align_items" style={{gap:"5px"}}>
         
            <div><img src={logo} alt="logo pic" width={60} height={80} /></div>
            <div style={{fontSize:"17px",fontWeight:"bold"}}>لوحة التحكم</div>
           
          </div>
          </Link>

          <div className=" flex align_items" style={{gap:"5px"}}>
            
            <div><img src={profile} alt="profile pic" width={50} height={50}  style={{borderRadius:"50%",objectFit:"cover"}} /></div>
            <div style={{fontSize:"17px",fontWeight:"bold"}}>حزلوم</div>
            <div onClick={hideSidebar} style={{cursor:"pointer"}} className="menu_btn"><BiMenu size={25} /></div>
          </div>
    </header>
  )
}

export default Header