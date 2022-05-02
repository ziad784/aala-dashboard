import React from 'react'


function Item({title,price,pic}) {
  return (
    <div style={{textAlign:"center"}}>
        <div><img src={pic} alt="" width={200} height={220} /></div>
        <div>{title}</div>
        <div>{price} د.ا</div>
    </div>
  )
}

export default Item