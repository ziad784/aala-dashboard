import React from 'react'
import CategoryCard from '../../Components/CategoryCard/CategoryCard'
import Header from '../../Components/Header/Header'
import SiderBar from '../../Components/SiderBar/SiderBar'
import men from '../../../imgs/men.png'
import women from '../../../imgs/women.png'
import kid from '../../../imgs/boy.png'
import './Categories.css'
import Button from '../../Components/Button/Button'
import {Link} from 'react-router-dom';

function Categories() {
  return (
    <div className='flex'>

    <div style={{flex:1}} id="sidebar">

    <SiderBar cates={"focused"} />
    
    </div>
      
    <div style={{flex:4}}>
      <Header />
      <Link to={"/categories/add"}>
        <div style={{display:"flex",justifyContent:"flex-end",paddingRight:"10px",paddingBottom:"20px"}}>
          
          <Button txt={"اضافة"} color={"#101010"} width={"15%"} padding={"1%"} margin={"inherit"} />

        </div>
        </Link>
       
        <div className=" cates_grid">
            <CategoryCard title={"ملابس الرجال"} subtitle={"أزياء رائعة للرجال"} pic={men} />
            <CategoryCard title={"ملابس النساء"} subtitle={"أزياء رائعة للنساء"} pic={women} />
            <CategoryCard title={"ملابس للاطفال"} subtitle={"ملابس الاطفال"} pic={kid} />


      </div>


    </div>


  </div>
  )
}

export default Categories