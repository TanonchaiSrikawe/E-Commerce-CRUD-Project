/* eslint-disable react/no-unescaped-entities */
import axios from "axios"
import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { UserContextProvider } from "../UserContext"

function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [redirect,setRedirect] = useState(false)
    const {setUser } = useContext(UserContextProvider);
    async function login(e){
        e.preventDefault();
            const response = await axios.post('/login',{username,password})
            const { data } = response;
            if(response.data === "Username and Password wrong"){
                alert('Username or password wrong')
            }else{
                alert('Login Success')
                setUser(data)
                setRedirect(true)
            }
    }
    if(redirect){
        return <Navigate to={'/'}/>
    }
  return (
    <>
        <div className="bg-[url('https://cdn.pixabay.com/photo/2016/02/23/02/17/joystick-1216816_1280.jpg')] bg-no-repeat bg-cover bg-center h-screen fixed top-0 w-full bg-login">
        <div className="max-w-md mx-auto">
            <div className="mt-32">
                <h2 className="text-5xl text-center mb-6 text-white">Login</h2>
                <form className="flex flex-col gap-5" onSubmit={login}>
                <input type="text" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
                <button className="w-full border rounded-2xl bg-black text-white py-2 my-2">Login</button>
                </form>
                <div className="text-center mt-5 text-white">
                Don't have an account yet ? <Link to={'/register'} className="ms-2 underline ">Register now</Link>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Login