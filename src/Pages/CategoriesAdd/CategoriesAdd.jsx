import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import add from '../../../imgs/add.png'
import Button from '../../Components/Button/Button'
import Header from '../../Components/Header/Header'
import Input from '../../Components/Input/Input'

function CategoriesAdd() {

  const [path, setpath] = useState('')
  const [title, settitle] = useState('')
  const [subTitle, setsubTitle] = useState('')

  const navigate = useNavigate();




  const ImgHandler = (e) =>{
    const file = e.target.files[0]
    const formData = new FormData();
    formData.append("photo",file);
    fetch(import.meta.env.VITE_APP_API+"upload/categories",{
      method:"POST",

      body: formData
    })
    .then((res) => res.json())
    .then((data) =>{
      console.log(data);
      if(data.res == "ok"){
        document.getElementById("img").src = import.meta.env.VITE_APP_API+data.path
        setpath(data.path)
      }
    })

  }

  const AddHandler = () =>{

    fetch(import.meta.env.VITE_APP_API+"categories/add",{
      method:"POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          path:path,
          title:title,
          subtitle:subTitle
      })
    })
    .then((res) => res.json())
    .then((data) =>{
      if(data.res == "ok"){

        navigate("/categories",{
          replace:true
        })
      }
    })
    

  }

  return (
    <div>
            <div dir='rtl'>
        <Header />
        <div style={{display:"flex",justifyContent:"center"}}><img id='img' onClick={()=>{document.getElementById("cate_pic").click()}} src={add} alt="women pic" style={{borderRadius:"15px",width:"200px",height:"200px",cursor:"pointer"}} /> <input onChange={(e)=>{ImgHandler(e)}} type="file" hidden id="cate_pic" /></div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <div style={{width:"30%",padding:"2%"}}>
            <Input txt={"اسم القسم"} type={"text"} onchange={(e)=>settitle(e.target.value)} />
            <Input txt={"الكلمة الثانية"} type={"text"} onchange={(e)=>setsubTitle(e.target.value)} />
            <Button txt={"اضافة"} color={"#101010"} width={"90%"} padding={"3%"} onclick={AddHandler} />


            </div>
        </div>
    </div>
    </div>
  )
}

export default CategoriesAdd