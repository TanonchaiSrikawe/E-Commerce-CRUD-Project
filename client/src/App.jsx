import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import IndexPage from './page/IndexPage'
import Login from './page/Login'
import Register from './page/Register'
import axios from 'axios'
import UserContext from './UserContext'
import AddProduct from './page/AddProduct'
import DetailPage from './page/DetailPage'
import AccountPage from './page/AccountPage'
import Cart from './page/Cart'
import CheckOut from './CheckOut'
import AllProductPage from './page/AllProductPage'
import Edit from './page/Edit'



function App() {


  axios.defaults.baseURL = 'http://localhost:5500';
  axios.defaults.withCredentials = true;

  return (
    <UserContext>
     <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<IndexPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/allproduct' element={<AllProductPage/>}/>
        <Route path='/account' element={<AccountPage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/detail/:id' element={<DetailPage/>}/>
        <Route path='/confirm' element={<CheckOut/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Route>
     </Routes>
     </UserContext>
  )
}

export default App
