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

      <div className="body items_grid">
          <Item title={"اسم المنتج"} link={"/items/edit"} price={"5"} pic={item_img} />
          <Item title={"اسم المنتج"} link={"/items/edit"} price={"5"} pic={item_img} />
          <Item title={"اسم المنتج"} link={"/items/edit"} price={"5"} pic={item_img} />
          <Item title={"اسم المنتج"} link={"/items/edit"} price={"5"} pic={item_img} />



      </div>


    </div>


  </div>
  )
}

export default Items