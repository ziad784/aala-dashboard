import React from 'react'
import Button from '../../Components/Button/Button'
import Header from '../../Components/Header/Header'
import SiderBar from '../../Components/SiderBar/SiderBar'

function Places() {
  return (
    <div className='flex'>
    <div style={{flex:1}}>

    <SiderBar places={"focused"} />
    
    </div>
      
    <div style={{flex:4}}>
      <Header />

        <div className="body" style={{display:"flex",flexDirection:"column",alignItems:"center"}} dir="rtl">
            <div style={{width:"30%"}}>
                <div> اسم محافظة</div>
                <select style={{width:"100%",marginTop:"5px",border:"none",outline:"none",padding:"5%",borderRadius:"10px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                    <option value="">اسم محافظة</option>
                    <option value="">اسم محافظة</option>
                    <option value="">اسم محافظة</option>
                    <option value="">اسم محافظة</option>
                </select>
            </div>

            <div style={{width:"20%"}}>
                <Button txt={"تعديل"} color={"rgb(255, 165, 68)"} width={"100%"} />
            </div>
            <div style={{width:"20%"}}>
                <Button txt={"حذف"} color={"#ff0000"} width={"100%"} />
            </div>


        </div>

    </div>


  </div>
  )
}

export default Places