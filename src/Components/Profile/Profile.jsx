import React from 'react'
import {Link} from 'react-router-dom'

function Profile({title,pic}) {
  return (
    <Link to={"/users/edit"}>
            <div style={{textAlign:"center",cursor:"pointer"}}>
        <div><img src={pic} alt="" width={200} height={220} /></div>
        <div>{title}</div>
    </div>
    </Link>
  )
}

export default Profile