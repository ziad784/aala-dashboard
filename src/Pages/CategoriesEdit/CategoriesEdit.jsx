import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../../Components/Button/Button'
import Header from '../../Components/Header/Header'
import Input from '../../Components/Input/Input'

function CategoriesEdit() {

  const {id} = useParams();
  const [cate_data, setcate_data] = useState([])
  const [path, setpath] = useState('')
  const [title, settitle] = useState('')
  const [subTitle, setsubTitle] = useState('')
  const [isId, setisId] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {

    fetch(import.meta.env.VITE_APP_API+"categoryById",{
      method:"POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          id:id
      })
    })
    .then((res) => res.json())
    .then((data)=>{
      if(data.res == "ok"){
        setcate_data(data.data)
        settitle(data.data[0].title);
        setsubTitle(data.data[0].sub_title);
        setpath(data.data[0].img)
        setisId(true)
      }else if(data.res == "bad"){
        setisId(false)

      }
    })
  
    return () => {
      setcate_data([])
    }
  }, [id,setcate_data,setisId])


  const UpdateHandler = () =>{

    fetch(import.meta.env.VITE_APP_API+"categories/edit",{
      method:"POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          path:path,
          title:title,
          subtitle:subTitle,
          id:id
      })
    })
    .then((res) => res.json())
    .then((data)=>{
      if(data.res == "ok"){
        navigate("/categories")
      }
    })

  }

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
        
        setpath(data.path)
      }
    })

  }

  
  if(isId == true){

    return (
      <div dir='rtl'>
          <Header />
          <div style={{display:"flex",justifyContent:"center"}}><img onClick={()=>{document.getElementById("cate_pic").click()}} src={import.meta.env.VITE_APP_API+path} alt="women pic" style={{borderRadius:"50%",width:"300px",height:"300px",cursor:"pointer",objectFit:"cover"}} /> <input onChange={(e)=>{ImgHandler(e)}} type="file" hidden id="cate_pic" /></div>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
              <div style={{width:"30%",padding:"2%"}}>
              <Input txt={"اسم القسم"} type={"text"} value={title} onchange={(e)=>{settitle(e.target.value)}} />
              <Input txt={"الكلمة الثانية"} type={"text"} value={subTitle} onchange={(e)=>{setsubTitle(e.target.value)}} />
              <Button txt={"حفظ"} color={"#101010"} width={"90%"} padding={"3%"} onclick={UpdateHandler} />
              <Button txt={"حذف"} color={"#ff0000"} width={"90%"} padding={"3%"}  />
  
              </div>
          </div>
      </div>
    )

  }else if(isId == false){
    return(
      <div>
        <center>
          <div>No such id</div>
        </center>
      </div>
    )

  }else{

    return(
      <div></div>
    )
  }


}

export default CategoriesEdit