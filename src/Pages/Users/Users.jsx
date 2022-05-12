import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../../../imgs/profile.png'
import Button from '../../Components/Button/Button'
import Header from '../../Components/Header/Header'
import Profile from '../../Components/Profile/Profile'
import SiderBar from '../../Components/SiderBar/SiderBar'
import './Users.css'

function Users() {
  return (
    <div className='flex'>
    <div style={{flex:1}}>

    <SiderBar users={"focused"} />
    
    </div>
      
    <div style={{flex:4}}>
      <Header />

 

      <Link to={"/users/add"}>
        <div style={{display:"flex",justifyContent:"flex-end",paddingRight:"10px",paddingBottom:"20px"}}>
          
          <Button txt={"اضافة"} color={"#101010"} width={"15%"} padding={"1%"} margin={"inherit"} />

        </div>
        </Link>
       
        <div className=" body">


          <table>
            <thead>
              <tr >
                <th>الصورة</th>
                <th style={{width:"70%"}}>الاسم</th>
              </tr>
            </thead>

            <tbody>
              <tr className='item'>
                <td><img width={100} height={100} src={profile} alt="pic" style={{objectFit:"contain"}} /></td>
                <td>حزلوم</td>
                <td><Link to={"/users/edit"}><button >تعديل</button></Link></td>
              </tr>
            </tbody>



          </table>




        </div>


    </div>


  </div>
  )
}

export default Users