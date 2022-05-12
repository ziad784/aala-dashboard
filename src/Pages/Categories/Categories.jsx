import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import SiderBar from '../../Components/SiderBar/SiderBar'
import './Categories.css'
import Button from '../../Components/Button/Button'
import {Link} from 'react-router-dom';

function Categories() {


  const [CatesData, setCatesData] = useState([])

  useEffect(() => {
    fetch(import.meta.env.VITE_APP_API+"categories")
    .then((res) => res.json())
    .then((data) =>{
      if(data.res == "ok"){
        setCatesData(data.data)

      }
    })
  
    return () => {
      setCatesData([])
    }
  }, [setCatesData])
  


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
       
        <table >

          <thead>
            <tr>
              <th>الصورة</th>
              <th>اسم القسم</th>
              <th>الكلمة الثانية</th>
            </tr>
          </thead>

        <tbody >

          {
            CatesData.map((e,i)=>(
              <tr className='item' key={i}>
              <td><img width={100} height={100} src={import.meta.env.VITE_APP_API+e.img} alt="pic" style={{objectFit:"contain"}} /></td>
              <td>{e.title}</td>
              <td>{e.sub_title}</td>
              <td><Link to={"/categories/edit/"+e.id}><button >تعديل</button></Link></td>
            </tr>

            ))
          }

        </tbody>


       </table>


    </div>


  </div>
  )
}

export default Categories