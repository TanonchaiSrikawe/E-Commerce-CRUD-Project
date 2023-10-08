import axios from "axios";
import {  useContext, useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom"
import { UserContextProvider } from "../UserContext";


function DetailPage() {
  const [detail,setDetail] = useState([]);
  const [redirect,setRedirect] = useState(false);
  const { id } = useParams();

    useEffect(()=>{
      axios.post('/detail' , {id} ).then(res => setDetail(res.data))
    },[id])
 
    const {addProduct,user} = useContext(UserContextProvider)
    function addFeatuedToCart(){
      if(user !== null){
        addProduct(detail._id);
      }else{
        alert('please login or register')
        setRedirect(true)
      }
    }
    if(redirect){
      return <Navigate to={'/login'}/>
    }


  return (
      <div className="max-w-6xl mx-auto mt-16" key={detail._id}>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-1 mx-[55px]">
            <div>
              <img src={'http://localhost:5500/'+detail.picture} className="h-[450px]"/>
            </div>
            <div>
                <h1 className="text-3xl font-bold">{detail.nameProduct}</h1>
                <h3 className="mt-5">{detail.description}</h3>
                <h3 className="text-3xl font-bold my-5">$ {detail.price}</h3>
                  <button className="border border-black py-3  mt-1 hover:bg-black hover:text-white w-full" onClick={addFeatuedToCart}>+ Add to cart</button>
                <div className="mt-6 text-center grid">
                  <Link className="border border-black py-3  hover:bg-black hover:text-white" to={'/allproduct'}>Back to All product</Link>
                </div>
            </div>
          </div>
      </div>
  )
}

export default DetailPage