import React from 'react'
import './Items.css'
import item_img from '../../../imgs/itemPic.png'
import Item from '../../Components/Item/Item'
import SiderBar from '../../Components/SiderBar/SiderBar'
import Header from '../../Components/Header/Header'
import {Link} from 'react-router-dom'

function Items() {
  return (
    <div className='flex'>
    <div style={{flex:1}}>

    <SiderBar items={"focused"} />
    
    </div>
      
    <div style={{flex:4}}>
      <Header />

      <div className="body items_grid">
          <Link to={"/items/edit"}><Item title={"اسم المنتج"} price={"5"} pic={item_img} /></Link>
          <Link to={"/items/edit"}><Item title={"اسم المنتج"} price={"5"} pic={item_img} /></Link>
          <Link to={"/items/edit"}><Item title={"اسم المنتج"} price={"5"} pic={item_img} /></Link>
          <Link to={"/items/edit"}><Item title={"اسم المنتج"} price={"5"} pic={item_img} /></Link>



      </div>


    </div>


  </div>
  )
}

export default Items