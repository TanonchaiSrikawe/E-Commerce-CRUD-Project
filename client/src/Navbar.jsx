import { useState } from "react"
import {FaTimes} from "react-icons/fa"
import {CiMenuFries} from "react-icons/ci"
import { useContext} from "react"
import { Link } from "react-router-dom"
import { UserContextProvider } from "./UserContext"
import axios from "axios"


function Navbar() {
  const [click,setClick] = useState(false)
  const {user,setUser,cart,ClearProduct} = useContext(UserContextProvider)
function logout(){
    axios.post('/logout', setUser(null));
    ClearProduct();
}


  const mobile = 
  <>
  <div className="absolute top-14 w-full left-0 right-0 bg-black transition z-50 lg:block hidden bgDark" onClick={()=>setClick(!click)}>
  {user === null && (
    <ul className="text-center text-xl p-4">
      <Link to={'/'}>
        <li className="my-2 py-2 border-b border-secondary hover:bg-primary hover:rounded-full hover:text-secondary">Home</li>
      </Link>
      <Link to={'/allproduct'}>
        <li className="my-2 py-2 border-b border-secondary hover:bg-primary hover:rounded-full hover:text-secondary">All Products</li>
      </Link>
      <Link to={'/login'}>
        <li className="my-2 py-2 border-b border-secondary hover:bg-primary hover:rounded-full hover:text-secondary">Login</li>
      </Link>
      <Link to={'/register'}>
        <li className="my-2 py-2 border-b border-secondary hover:bg-primary hover:rounded-full hover:text-secondary">Register</li>
      </Link>
    </ul>
  )}
  {user !== null && (
    <ul className="text-center text-xl p-4">
    <Link to={'/'}>
      <li className="my-2 py-2 border-b border-secondary hover:bg-primary hover:rounded-full hover:text-secondary">Home</li>
    </Link>
    <Link to={'/allproduct'}>
      <li className="my-2 py-2 border-b border-secondary hover:bg-primary hover:rounded-full hover:text-secondary">All Products</li>
    </Link>
    <Link to={'/account'}>
    <li className="my-2 py-2 border-b border-secondary hover:bg-primary hover:rounded-full hover:text-secondary">Account</li>
    </Link>
    <Link to={'/cart'}>
    <li className="my-2 py-2 border-b border-secondary hover:bg-primary hover:rounded-full hover:text-secondary flex justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
      ({cart.length})
      </li>
    </Link>
    <Link to={'/addproduct'}>
    <li className="my-2 py-2 border-b border-secondary hover:bg-primary hover:rounded-full hover:text-secondary">Create your product</li>
    </Link>
    <a onClick={logout}>
    <li className="my-2 py-2  border-b border-secondary hover:bg-primary hover:rounded-full hover:text-secondary cursor-pointer">Logout</li>
    </a>
    </ul>
  )}
  </div>
  </>

  return (
    <nav className="sticky top-0 z-20">
      <div className=" w-full bg-main flex justify-between items-center  text-secondary lg:py-5 px-6 py-2 z-50">
        <div className="flex items-center grow">
        <div className='flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
        </svg>
        </div>
        <div>
          <Link to={'/'} className="text-xl font-bold sm:text-base">eCommerceWebsite</Link>
        </div>
        </div>
        <div className="lg:hidden grow"> 
        {user === null && (
            <ul className="flex gap-8 text-[16px]">
            <Link to={'/'}>
                <li className="hover:text-primary transition hover:border-b  hover:border-primary cursor-pointer">Home</li>
            </Link>
            <Link to={'/allproduct'}>
                <li className="hover:text-primary transition hover:border-b  hover:border-primary cursor-pointer">All Products</li>
            </Link>
            </ul>
        )}
        {user !== null && (
            <ul className="flex gap-8 text-[16px]">
            <Link to={'/'}>
              <li className="hover:text-primary transition hover:border-b  hover:border-primary cursor-pointer">Home</li>
            </Link>
            <Link to={'/allproduct'}>
              <li className="hover:text-primary transition hover:border-b  hover:border-primary cursor-pointer">All Products</li>
            </Link>
            <Link to={'/account'}>
              <li className="hover:text-primary transition hover:border-b  hover:border-primary cursor-pointer">Account</li>
            </Link>
            <Link to={'/cart'}>
              <li className="hover:text-primary transition hover:border-b  hover:border-primary cursor-pointer flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
                ({cart.length})</li>
            </Link>
            </ul>
        )}

        </div>

        <div className="lg:hidden">
        {user === null && (
        <ul className="flex gap-8 text-[16px]">
        <Link to={'/login'}>
          <li className="hover:text-primary transition hover:border-primary hover:border-b cursor-pointer">Login</li>
        </Link>
        <Link to={'/register'}>
          <li className="hover:text-primary transition  hover:border-primary hover:border-b cursor-pointer">Register</li>
        </Link>
        </ul>
        )}
        {user !== null && (
        <ul className="flex gap-8 text-[16px]">
        <Link to={'/addproduct'}>
          <li className="hover:text-primary transition hover:border-primary hover:border-b cursor-pointer">Create your product</li>
        </Link>
        <a onClick={logout}>
          <li className="hover:text-primary transition  hover:border-primary hover:border-b cursor-pointer">Logout</li>
        </a>
        </ul>
        )}
        </div>
          
        <div>
          {click && mobile}
        </div>
        <button className="hidden lg:block" onClick={()=>setClick(!click)}>
          {click ? <FaTimes/> : <CiMenuFries/>}
        </button>
      </div>
    </nav>
  )
}

export default Navbar