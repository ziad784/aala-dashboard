import React from 'react'
import './Items.css'
import item_img from '../../../imgs/itemPic.png'
import Item from '../../Components/Item/Item'
import SiderBar from '../../Components/SiderBar/SiderBar'
import Header from '../../Components/Header/Header'
import Button from '../../Components/Button/Button'
import { Link } from 'react-router-dom'


function Items() {
  return (
    <div className='flex'>
    <div style={{flex:1}}>

    <SiderBar items={"focused"} />
    
    </div>
      
    <div style={{flex:4}}>
      <Header />

      <Link to={"/items/add"}>
        <div style={{display:"flex",justifyContent:"flex-end",paddingRight:"10px",paddingBottom:"20px"}}>
          
          <Button txt={"اضافة"} color={"#101010"} width={"15%"} padding={"1%"} margin={"inherit"} />

        </div>
        </Link>

      <div className="body ">

        <table>
          <thead>
              <tr>
                <th>الصورة</th>
                <th>اسم المنتج</th>
                <th>السعر</th>
              </tr>
            </thead>


            <tbody>
              <tr className='item'>
                <td><img width={100} height={100} src={item_img} alt="pic" style={{objectFit:"contain"}} /></td>
                <td>اسم المنتج</td>
                <td>10</td>
                <td><Link to={"/items/edit/"}><button >تعديل</button></Link></td>
              </tr>
            </tbody>

        </table>



      </div>


    </div>


  </div>
  )
}

export default Items