import React from 'react'
import Button from '../Button/Button'
import './CategoryCard.css'
import {Link} from 'react-router-dom'

function CategoryCard({title,subtitle,pic}) {
  return (
    <div className='flex cate_cont'>
              <div className='cate_info'>
            <div className='cate_tit'>{title}</div>
            <div className='cate_sub'>{subtitle}</div>
            <Link to={"/categories/edit"}><Button txt={"تعديل"} color={"#101010"} width={"150px"}  /></Link>
        </div>

        <div className='cate_img'>
            <img src={pic} alt=""  />
        </div>

    </div>
  )
}

export default CategoryCard