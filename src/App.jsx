import { useEffect, useState } from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import PortectedLogin from './Components/Routes/ProtectedLogin';
import PortectedRoutes from './Components/Routes/ProtectedRoute';
import Categories from './Pages/Categories/Categories';
import CategoriesAdd from './Pages/CategoriesAdd/CategoriesAdd';
import CategoriesEdit from './Pages/CategoriesEdit/CategoriesEdit';
import Delivery from './Pages/Delivery/Delivery';
import DeliveryAdd from './Pages/DeliveryAdd/DeliveryAdd';
import DeliveryEdit from './Pages/DeliveryEdit/DeliveryEdit';
import Home from "./Pages/Home/Home"
import Items from './Pages/Items/Items';
import ItemsAdd from './Pages/ItemsAdd/ItemsAdd';
import ItemsEdit from './Pages/ItemsEdit/ItemsEdit';
import Login from './Pages/Login/Login';
import Places from './Pages/Places/Places';
import Users from './Pages/Users/Users';
import UsersAdd from './Pages/UsersAdd/UsersAdd';
import UsersEdit from './Pages/UsersEdit/UsersEdit';


function App() {


  const [islogin, setislogin] = useState(null)

  useEffect(() => {
    fetch(import.meta.env.VITE_APP_API+"isDashlogin",{
      method:"POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          token:localStorage.getItem("DashToken")
      })
    })
    .then((res) => res.json())
    .then((data)=>{
      if(data.res == "ok"){
        setislogin(true)
      }else{
        setislogin(false)
      }
    })
  
    return () => {
      setislogin(null)
    }
  }, [setislogin])
  


  return (
    <Router>
      <Routes>
        <Route element={<PortectedLogin islogin={islogin} />}>
          <Route path='/login' element={<Login/>} />
        </Route>

       
        <Route element={<PortectedRoutes islogin={islogin} />}>
          <Route path='/' element={<Home/>} />
          <Route path='/categories' element={<Categories/>} />
          <Route path='/categories/edit/:id' element={<CategoriesEdit/>} />
          <Route path='/categories/add' element={<CategoriesAdd/>} />
          <Route path='/items' element={<Items/>} />
          <Route path='/items/edit' element={<ItemsEdit/>} />
          <Route path='/items/add' element={<ItemsAdd/>} />
          <Route path='/delivery' element={<Delivery/>} />
          <Route path='/delivery/edit' element={<DeliveryEdit/>} />
          <Route path='/delivery/add' element={<DeliveryAdd/>} />
          <Route path='/places' element={<Places/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/users/edit' element={<UsersEdit/>} />
          <Route path='/users/add' element={<UsersAdd/>} />
        </Route>
      
        
       




      </Routes>
    </Router>
  )
}

export default App
