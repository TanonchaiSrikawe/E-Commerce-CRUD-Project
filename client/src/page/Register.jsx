/* eslint-disable react/no-unescaped-entities */
import axios from "axios"
import { useState } from "react"
import { Link,Navigate } from "react-router-dom"


function Register() {
    const [name,setName] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [redirect,setRedirect] = useState(false)
    
    async function register(e){
        e.preventDefault();
        const data = await axios.post("/register", {
            name,
            username,
            password
        });
      if(data.data.username == username){
        alert('Register Success')
        setRedirect(true)
      }else if(data.data.name == 'ValidationError'){
        alert('Please fill your information completely')
      }else{
        alert('This username has already')
      }
    }
    if(redirect){
        return <Navigate to={'/login'}/>
    }

  return (
    <>
    <div className="bg-[url('https://cdn.pixabay.com/photo/2020/05/24/17/21/notebook-5215238_1280.jpg')] bg-no-repeat bg-cover bg-center h-screen fixed top-0 w-full bg-login">
    <div className="max-w-md mx-auto">
        <div className="mt-32">
            <h2 className="text-5xl text-center mb-6 text-white">Register</h2>
            <form className="flex flex-col gap-5" onSubmit={register}>
            <input type="text" placeholder="Your name : Tanonchai Srikawe" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button className="w-full border rounded-2xl bg-black text-white py-2 my-2">Register</button>
            </form>
            <div className="text-center mt-5 text-white">
            Register success click here <Link to={'/login'} className="ms-2 underline">Login</Link>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Register