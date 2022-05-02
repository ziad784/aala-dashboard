import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Categories from './Pages/Categories/Categories';
import CategoriesEdit from './Pages/CategoriesEdit/CategoriesEdit';
import Delivery from './Pages/Delivery/Delivery';
import DeliveryEdit from './Pages/DeliveryEdit/DeliveryEdit';
import Home from "./Pages/Home/Home"
import Items from './Pages/Items/Items';
import ItemsEdit from './Pages/ItemsEdit/ItemsEdit';
import Login from './Pages/Login/Login';
import Places from './Pages/Places/Places';
import Users from './Pages/Users/Users';
import UsersEdit from './Pages/UsersEdit/UsersEdit';


function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/categories' element={<Categories/>} />
        <Route path='/categories/edit' element={<CategoriesEdit/>} />
        <Route path='/items' element={<Items/>} />
        <Route path='/items/edit' element={<ItemsEdit/>} />
        <Route path='/delivery' element={<Delivery/>} />
        <Route path='/delivery/edit' element={<DeliveryEdit/>} />
        <Route path='/places' element={<Places/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/users/edit' element={<UsersEdit/>} />



      </Routes>
    </Router>
  )
}

export default App
