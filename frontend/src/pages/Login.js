import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


function Login() {

  const [users,setusers] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  useEffect(()=>{
    fetchUsers();
  },[]);

  const fetchUsers=()=>{
    axios.get('http://localhost:3001/register')
    .then((res)=>{
      console.log(res.data);
    })
  }

  const handleLogin =async (event)=>{
    event.preventDefault();
    try{
      const user = {email,password};
      const response = await axios.post('http://localhost:3001/login',user);
      const token = response.data.token;
      alert('Login Successfull');

      setEmail('');
      setPassword('');
      fetchUsers();
      navigate('/home');
      window.location.reload();
      localStorage.setItem('token',token);

    }catch(error){
      console.log('Login error');
      
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover" >
      
      <div className="w-full max-w-sm p-8 bg-white bg-opacity-50 rounded-lg shadow-lg md:max-w-md mt-20 mb-10 lg:mt-24 lg:mb-12 ml-2 mr-2 ">
        <h1 className="mb-4 text-4xl font-bold text-center">Login</h1>
        <form className="space-y-4 " 
        onSubmit={handleLogin}
        >
            
            <div>
                <label className="block mb-1 text-xl font-semibold" htmlFor="email">Email</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                type="email" 
                id="email" 
                name="email" 
                value={email}
                placeholder="Enter your email" 
                onChange={(e)=>setEmail(e.target.value)} required/>
            </div>
            <div>
                <label className="block mb-1 text-xl font-semibold" htmlFor="password">Password</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                type="password" 
                id="password" 
                name="password" 
                value={password}
                placeholder="Enter your password" 
                onChange={(e)=>setPassword(e.target.value)} required/>
            </div>
            
            
            <button type="submit" className="w-full px-2 py-2 text-lg text-white font-bold transition duration-300 bg-black hover:bg-stone-500 hover:border-black border-2 border-black rounded-md md:text-xl ">Sign up</button>

            <div className="mt-4 text-center text-gray-800">
              <span className="block mb-2 text-black">Don't have an account?</span>
              <a href="/signup" className="text-black hover:underline">Signup here</a>
            </div>
        </form>
      </div>
      
    </div>
  )
}

export default Login
