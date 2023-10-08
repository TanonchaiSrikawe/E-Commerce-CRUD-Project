/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react"

export const UserContextProvider = createContext({});

function UserContext({children}) {
    const [user,setUser] = useState(null);
    const [clear,setClear] = useState(false);
    const [cart,setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    useEffect(()=>{
      if(!user){
        axios.get('/profile').then(res=>
          setUser(res.data))
      }
    },[])

    useEffect(()=>{
      if(cart?.length > 0){
        localStorage.setItem('cart' , JSON.stringify(cart));
      }
    },[cart])


    

    function addProduct(productId){
      setCart(prev=> [...prev,productId])
    }
    function ClearProduct(){
      setCart([])
      setClear(true)
    }
    if(clear){
      localStorage.clear();
    }
    function removeProduct(productId){
      setCart(prev=> {
        const position = prev.indexOf(productId)
        if(position !== -1){
          return prev.filter((value,index)=> index !== position)
        }
        return prev;
      })
    }
  return (
    <UserContextProvider.Provider value={{user , setUser,cart,setCart, addProduct , removeProduct ,ClearProduct,setClear}}>
        {children}
    </UserContextProvider.Provider>
  )
}

export default UserContext