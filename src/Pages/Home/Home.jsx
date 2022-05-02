import React from 'react'
import Header from '../../Components/Header/Header'
import SiderBar from '../../Components/SiderBar/SiderBar'
import {BiMoney} from 'react-icons/bi'
import {AiOutlineShop} from 'react-icons/ai'
import {FaUsers} from 'react-icons/fa'

import './Home.css'

function Home() {
  return (
    <div className='flex'>
      <div style={{flex:1}} id='sidebar'>

      <SiderBar home={"focused"}/>
      
      </div>
        
      <div style={{flex:4}}>
        <Header />

        <div className="body">

        <div style={{display:"flex",justifyContent:"center"}}>
        <div className='flex home_card home_card_sp' >
            <div>
              <div style={{color:"gray"}}>الارباح</div>
              <div style={{fontSize:"20px"}}>10,000 د.ا</div>
            </div>

            <div style={{backgroundColor:"red",borderRadius:"50%",color:"white",width:"50px",height:"50px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px"}}>
              <BiMoney />
            </div>


          </div>
        </div>

        <div className='home_flex' style={{display:"flex",justifyContent:"center",columnGap:"20px"}}>
          <div className='flex home_card' >
            <div>
              <div style={{color:"gray"}}>البائعين </div>
              <div style={{fontSize:"20px"}}>100</div>
            </div>

            <div style={{backgroundColor:"red",borderRadius:"50%",color:"white",minWidth:"50px",minHeight:"50px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px"}}>
              <AiOutlineShop />
            </div>


          </div>


          <div className='flex home_card' >
            <div>
              <div style={{color:"gray"}}>المستخدمين</div>
              <div style={{fontSize:"20px"}}>600</div>
            </div>

            <div style={{backgroundColor:"red",borderRadius:"50%",color:"white",minWidth:"50px",minHeight:"50px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px"}}>
              <FaUsers />
            </div>


          </div>


        </div>



        </div>


      </div>


    </div>
  )
}

export default Home