import React from 'react'
import Header from '../../Components/Header/Header'
import SiderBar from '../../Components/SiderBar/SiderBar'
import aramax from '../../../imgs/aramax.png'
import DPD from '../../../imgs/DPD.png'
import fedex from '../../../imgs/fedex.png'
import {Link} from 'react-router-dom'
import './Delivery.css'
import Button from '../../Components/Button/Button'

function Delivery() {
  return (
    <div className='flex'>
    <div style={{flex:1}}>

    <SiderBar delivery={"focused"} />
    
    </div>
      
    <div style={{flex:4}}>
      <Header />


      <Link to={"/delivery/add"}>
        <div style={{display:"flex",justifyContent:"flex-end",paddingRight:"10px",paddingBottom:"20px"}}>
          
          <Button txt={"اضافة"} color={"#101010"} width={"15%"} padding={"1%"} margin={"inherit"} />

        </div>
        </Link>
 
       
        <div className=" delivery_grid">

            <Link to={"/delivery/edit"}>
            <div className="delivery_card">
                <div>
                    <div>رسوم التوصيل</div>
                    <div style={{color:"rgb(255, 168, 77)"}}>3 د.ا</div>
                </div>
                <div>
                    <img src={aramax} alt="aramax img" width={120} height={120} />
                </div>
            </div>
            
            </Link>

            <Link to={"/delivery/edit"}>
            <div className="delivery_card">
                <div>
                    <div>رسوم التوصيل</div>
                    <div style={{color:"rgb(255, 168, 77)"}}>3 د.ا</div>
                </div>
                <div>
                    <img src={DPD} alt="DPD img" style={{objectFit:"contain"}} width={120} height={120} />
                </div>
            </div>
            </Link>

            <Link to={"/delivery/edit"}>
            <div className="delivery_card">
                <div>
                    <div>رسوم التوصيل</div>
                    <div style={{color:"rgb(255, 168, 77)"}}>3 د.ا</div>
                </div>
                <div>
                    <img src={fedex} alt="fedex img" style={{objectFit:"contain"}} width={120} height={120} />
                </div>
            </div>

            </Link>



      </div>


    </div>


  </div>
  )
}

export default Delivery