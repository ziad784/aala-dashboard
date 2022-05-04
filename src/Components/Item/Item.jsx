import React from 'react'
import {Link} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'

function Item({title,price,pic,link}) {
  return (
    <div style={{textAlign:"center"}}>

        <Link to={link}>
        <div><img src={pic} alt="" width={200} height={220} /></div>
        <div>{title}</div>
        <div>{price} د.ا</div>

        </Link>
    </div>
  )
}

export default Item