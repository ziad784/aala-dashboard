import React from 'react'
import profile from '../../../imgs/profile.png'
import Header from '../../Components/Header/Header'
import Profile from '../../Components/Profile/Profile'
import SiderBar from '../../Components/SiderBar/SiderBar'

function Users() {
  return (
    <div className='flex'>
    <div style={{flex:1}}>

    <SiderBar users={"focused"} />
    
    </div>
      
    <div style={{flex:4}}>
      <Header />

 
       
        <div className=" cate_grid">

            <Profile title={"حلزوم ابراهيم"} pic={profile} />
            <Profile title={"حلزوم ابراهيم"} pic={profile} />
            <Profile title={"حلزوم ابراهيم"} pic={profile} />
            <Profile title={"حلزوم ابراهيم"} pic={profile} />


        </div>


    </div>


  </div>
  )
}

export default Users