import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";


export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user={
            id:1,
            username:email.split("@")[0],
            email:email,
            password:password
        }
        dispatch(login(user))
        console.log(user)
        setEmail("")
        setPassword("")
        navigate("/")
    }

    return (
        <div className="min-h-screen py-12 px-4 flex flex-col items-center gap-10">
            <header className="text-center space-y-2">
                <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Login
                </h1>
                <p className="text-zinc-400 font-medium">Streamline your productivity with ease.</p>
            </header>
            
            <main className="w-full max-w-xl space-y-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-zinc-200">Email</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full rounded-2xl border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-md p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter your email" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-zinc-200">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full rounded-2xl border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-md p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter your password" required />
                    </div>
                    <button type="submit" className="w-full bg-indigo-500 text-white font-medium py-2 px-4 rounded-2xl hover:bg-indigo-600 transition-all duration-200">Login</button>
                </form>
            </main>
        </div>
    )
}
