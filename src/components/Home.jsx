import { logout } from "../features/auth/authSlice";
import AddTodo from "./AddTodo"
import Todos from "./Todos"
import { useSelector,useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"



export default function Home() {
    const {user}=useSelector((state)=>state.auth)
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handelLogout=()=>{
        dispatch(logout())
        navigate("/login")
    }    
    return (
    <div className="min-h-screen py-12 px-4 flex flex-col items-center gap-10"> 

    <div className="flex w-full max-w-6xl justify-end">
        <button onClick={handelLogout} className="bg-indigo-500 text-white font-medium py-2 px-4 hover:cursor-pointer rounded-2xl hover:bg-indigo-600 transition-all duration-200">Logout</button>
    </div>

      <header className="text-center space-y-2">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Redux ToolKit
        </h1>
        <p className="text-zinc-400 font-medium">Streamline your productivity with ease.</p>
        <p className="text-lg text-zinc-400 font-medium">Hello {user.username}</p>
      </header>
      
      <main className="w-full max-w-xl space-y-8">
        <AddTodo />
        <Todos />
      </main>
    </div>
    )
}
    