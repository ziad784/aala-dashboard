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


   
 
       
        <div className='body'>

            <table>
                <thead>
                    <tr>
                        <th>الصورة</th>
                        <th>اسم الشركة</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className='item'>
                        <td><img width={100} height={100} src={aramax} alt="pic" style={{objectFit:"contain"}} /></td>
                        <td>ارامكس</td>
                        <td><Link to={"/delivery/edit/"}><button >تعديل</button></Link></td>
                    </tr>
                </tbody>

            </table>





      </div>


    </div>


  </div>
  )
}

export default Delivery