import React from 'react'
import { Link } from 'react-router-dom'
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

      <Link to={"/delivery/add"}>
        <div style={{display:"flex",justifyContent:"flex-end",paddingRight:"10px",paddingBottom:"20px"}}>
          
          <Button txt={"اضافة"} color={"#101010"} width={"15%"} padding={"1%"} margin={"inherit"} />

        </div>
        </Link>

        <div className="body">

            <table>
                <thead>
                    <tr>
                        <th style={{width:"80%"}}>اسم المحافظة</th>
                    </tr>
                </thead>


                <tbody>
                    <tr className="item">
                        <td >اسم المحافظة</td>
                        <td><button >تعديل</button></td>
                        <td><button style={{backgroundColor:"red"}}>حذف</button></td>
                    </tr>
                </tbody>


            </table>




        </div>

    </div>


  </div>
  )
}

export default Places