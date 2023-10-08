import { useContext, useEffect, useState } from "react"
import { UserContextProvider } from "../UserContext"
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer";



function AccountPage() {
    const {user} = useContext(UserContextProvider);

    const [productList,setProductList] = useState([]);
    const [deleteItem,setDeleteItem] = useState('');
    
    useEffect(()=>{
      axios.get('/accountProduct').then(res=>setProductList(res.data))
    },[user])

async function deleteProduct(id){
  const cfirm = confirm('do you delete a product ?')
  if(cfirm){
    await axios.delete(`/deleteProduct/${id}`).then(res=>setDeleteItem(res.data.acknowledged));
  }
}
if(deleteItem){
  window.location.reload(true);
}


  return (
    <>
    {user !== null && (
      <div className="mb-10">
      <div className="text-center mt-16 bg-gray-200 p-2 mx-auto ">
        <h1 className="font-bold text-5xl sm:text-2xl">Welcome to your account</h1>
        <p className="mt-5 text-3xl">{user.name}</p>
      </div>
      <div className="text-center mt-16 flex justify-center items-center">
      <div className="dash"></div>
        <h1 className="font-bold text-4xl w-auto sm:text-2xl">Your Product</h1>
        <div className="dash"></div>
      </div>
    {productList.length == 0 && (
      <div className="text-center mt-10 mx-10 p-20 bg-main rounded-2xl sm:p-10">
             <h1 className="font-bold text-5xl text-secondary sm:text-xl">No products in your account</h1>
      </div>
    )}

    {productList.length > 0 && (
    <div className="text-center mx-auto max-w-5xl grid-set mt-10 flex ">
    <table className="w-full">
        <thead>
            <tr className="uppercase text-xl border-2 border-main sm:text-base">
                <th>Product</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
      {productList.length > 0 && productList.map((items)=>(
        <tr key={items._id} className="text-2xl border-2 border-main">
        <td>
            <div className="flex items-center gap-1 sm:flex-col">
            <div><img src={'http://localhost:5500/'+items.picture} className="w-20 m-2"/></div>
            <div className="sm:text-base">{items.nameProduct}</div>
            </div>
        </td> 
        <td className="sm:text-base">${items.price}</td>
        <td>
        <div className="flex items-center justify-center gap-4 sm:flex-col">
        <div className="sm:text-base"><Link to={`/edit/${items._id}`}>Edit</Link></div>
        <div className="sm:text-base mx-5"><button onClick={(e)=>deleteProduct(items._id,e)}>Delete</button></div>
        </div>
        </td>
    </tr>
  
      ))}
      </tbody>
    </table>
      </div>
      )}
      </div>
    )}


    {user === null && (
      <div>
      <div className="text-center mt-16">
        <h1 className="font-bold text-5xl mb-10">Please login or register</h1>
        <div>
          <Link to={'/login'} className="mx-10 border border-main px-5 py-2">Login</Link>
          <Link to={'/register'} className="mx-10 border border-main px-5 py-2">Register</Link>
        </div>
      </div>
      </div>
    )}
    {user !== null && (
      <Footer/>
    )}
    
    </>
  )
}

export default AccountPage