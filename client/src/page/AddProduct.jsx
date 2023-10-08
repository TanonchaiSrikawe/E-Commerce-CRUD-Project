import axios from "axios"
import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { UserContextProvider } from "../UserContext"

function AddProduct() {
    const [nameProduct,setNameProduct] = useState('')
    const [price,setPrice] = useState('')
    const [picture,setPicture] = useState('')
    const [description,setDescription] = useState('')
    const [redirect,setRedirect] = useState(false)
    const {user} = useContext(UserContextProvider);

    async function createProduct(e){
        e.preventDefault();
        if(!nameProduct.trim() || !price.trim() || !description.trim() || !picture){
          alert('Please fill your information completely.')
        }else{
          const data = new FormData();
          data.set('nameProduct', nameProduct);
          data.set('price', price);
          data.set('description', description);
          data.set('picture',  picture[0]);
          const {status} = await axios.post('/create', data )
          if(status === 200){setRedirect(true)}
        }
    }
    if(redirect){
        return <Navigate to={'/allproduct'}/>
    }
  return (
    <>
    {user !== null && (
        <div className="max-w-2xl mx-auto   mt-10">
        <h2 className="text-5xl font-bold text-center sm:text-2xl">Create Product</h2>
        <form onSubmit={createProduct}>
            <label className="text-xl">Name product :</label>
            <input type="text" value={nameProduct} onChange={e=>setNameProduct(e.target.value)}/>
            <label className="text-xl">Price ($) : </label>
            <input type="number" value={price} onChange={e=>setPrice(e.target.value)}/>
            <label className="text-xl">Picture :</label>
            <input type="file" onChange={e=>setPicture(e.target.files)}/>
            <label className="text-xl">Description :</label>
            <textarea cols="30" rows="10" value={description} onChange={e=>setDescription(e.target.value)}></textarea>
            <button className="w-full my-2 border shadow drop-shadow-xl rounded-2xl p-2">SAVE</button>
        </form>
    </div>
    )}
    {user === null && (
        <div className="bg-[url('https://cdn.pixabay.com/photo/2018/01/16/10/18/headphones-3085681_1280.jpg')] bg-no-repeat bg-cover bg-center h-screen fixed top-0 w-full bg-login">
        <div className="text-center mt-32">
          <h1 className="font-bold text-5xl mb-10 text-white sm:text-[calc(2rem)]">Please login or register</h1>
          <div className="flex justify-center">
            <Link to={'/login'} className="mx-10 border border-secondary px-5 py-2 text-white">Login</Link>
            <Link to={'/register'} className="mx-10 border border-secondary px-5 py-2 text-white">Register</Link>
          </div>
        </div>
        </div>
    )}
    </>
  )
}

export default AddProduct