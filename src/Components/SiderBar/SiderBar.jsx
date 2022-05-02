import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {BiCategoryAlt} from 'react-icons/bi'
import {FaBoxes,FaMapMarkedAlt,FaUsers} from 'react-icons/fa'
import {GrDeliver} from 'react-icons/gr'
import {Link} from 'react-router-dom'
import './SiderBar.css'

function SiderBar({home,cates,items,delivery,places,users}) {
  return (
    <div className='sidebar_cont' >
        <ul className='sidebar_list' >
            <li className={home}><Link to={"/"}><div><AiFillHome /></div> <div>الرئيسية</div></Link></li>
            <li className={cates}><Link to={"/categories"}><div><BiCategoryAlt /></div> <div>الاقسام</div></Link></li>
            <li className={items}><Link to={"/items"}><div><FaBoxes /></div> <div>المنتجات</div></Link></li>
            <li className={delivery}><Link to={"/delivery"}><div><GrDeliver /></div> <div>شركات التوصيل</div></Link></li>
            <li className={places}><Link to={"/places"}><div><FaMapMarkedAlt /></div> <div>المحافظات</div></Link></li>
            <li className={users}><Link to={"/users"}><div><FaUsers /></div> <div>المستخدمين</div></Link></li>

        </ul>

    </div>
  )
}

export default SiderBar