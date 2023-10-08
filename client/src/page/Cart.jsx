import { useContext, useEffect, useState } from "react";
import { UserContextProvider } from "../UserContext";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

function Cart() {
    const [productToCart,setProductToCart] = useState([]);
    const [totalPrice,setTotalPrice] = useState('');
    const [checkbill,setCheckBill] = useState(false);
const {cart,addProduct,removeProduct,ClearProduct,user} = useContext(UserContextProvider)
useEffect(()=>{
    axios.post('/productCart' , {cart})
    .then(res=>{
        setProductToCart(res.data)
    })
},[cart])


useEffect(()=>{
    let total = 0 ;
for (const price of productToCart){
    total+=price.price*cart.filter(id => id === price._id).length;
    setTotalPrice(total)
}   },[cart, productToCart])

function plusProduct(id){
    addProduct(id)
}
function minusProduct(id){
    removeProduct(id)
}
function checkOut(){
    const check = confirm('Are you sure for check out this order ?')
    if(check){
        ClearProduct()
        setCheckBill(true)
    }
}
if(checkbill){
    return <Navigate to={'/confirm'}/>
}

  return (  
    <>
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
    {!cart.length && user !== null &&(
        <div className="text-center mt-10 mx-10 p-20 bg-main rounded-2xl sm:p-10">
             <h1 className="font-bold text-5xl text-secondary sm:text-3xl">Your cart is empty</h1>
        </div>
    )}
    {cart?.length > 0 && user !== null && (
    <div>
    <h2 className="text-center font-bold my-14 text-5xl">Your Cart</h2>
    <div className="text-center mx-auto max-w-7xl grid grid-cols-[2.5fr_1fr] gap-[35px] lg:grid-cols-1">
    <table className="w-full">
        <thead>
            <tr className="uppercase text-xl border-2 border-main sm:text-sm">
                <th>Product</th>
                <th> Quantity</th>
                <th>Price</th>
                <th>Total Price</th>
            </tr>
        </thead>
        <tbody>
        {productToCart.map(items => (
            <tr key={items._id} className="text-xl border-2 border-main">
                <td>
                    <div className="flex items-center sm:flex-col">
                    <div>
                    <img src={'http://localhost:5500/'+items.picture} className="w-20 my-2 sm:w-10"/>
                    </div>
                    <div className="sm:text-sm">
                        {items.nameProduct}
                    </div>
                    </div>
                </td> 
                <td>
                    <button className="px-2  bg-main text-white mx-2 rounded-md sm:px-1 sm:mx-0.5 sm:text-sm"
                    onClick={() => minusProduct(items._id)}>
                    -
                    </button>
                    <span className="sm:text-sm">
                    {cart.filter(id => id === items._id).length}
                    </span>
                    <button className="px-2  bg-main text-white mx-2 rounded-md sm:px-1 sm:mx-0.5 sm:text-sm"
                    onClick={() => plusProduct(items._id)}>
                    +
                    </button>   
                </td>
                <td className="sm:text-base px-1">${items.price}</td>
                <td  className="font-bold sm:text-base">${Number(items.price*cart.filter(id => id === items._id).length).toFixed(2)}</td>
            </tr>
        ))}

        </tbody>
    </table>
    <div className="">
        <button className="p-3 mb-2 bg-main w-full text-white text-xl rounded-xl" onClick={checkOut}>Check Out</button>
        <div className="flex justify-around my-5 font-bold text-2xl">
            <div>Total Price</div>
            <div>${Number(totalPrice).toFixed(2)}</div>
        </div>
    </div>
    </div>
    </div>
    )}
    </>
  );
}

export default Cart