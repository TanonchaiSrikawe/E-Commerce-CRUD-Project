import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom"


function Edit() {
    const {id} = useParams();
    const [nameProduct,setNameProduct] = useState('')
    const [price,setPrice] = useState('')
    const [picture,setPicture] = useState('')
    const [description,setDescription] = useState('')
    const [redirect,setRedirect] = useState(false);

    useEffect(()=>{
        axios.get(`/getItemToEdit/${id}`).then(res=>{
            setNameProduct(res.data[0].nameProduct)
            setPrice(res.data[0].price)
            setDescription(res.data[0].description)
        })
    },[id])

    async function editProduct(e){
    e.preventDefault();
    if(!nameProduct.trim() || !price.toString().trim() || !description.trim()){
        alert('Please fill your information completely.')
        console.log(typeof price);
    }else{
        const data = new FormData();
    data.set('nameProduct', nameProduct);
    data.set('price', price);
    data.set('description', description);
    data.set('id', id);
    if (picture?.[0]) {
      data.set('picture', picture?.[0]);
    }
        await axios.put('/editProduct', data)
        setRedirect(true)
    }}
    
    if(redirect){
        return <Navigate to={'/account'}/>
    }
   

    


  return (
    <div className="max-w-2xl mx-auto   mt-10">
    <h2 className="text-5xl font-bold text-center">Create Product</h2>
    <form onSubmit={editProduct}>
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

  )
}

export default Edit