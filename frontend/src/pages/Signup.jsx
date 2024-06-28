import { react,useState } from 'react';
import axios from 'axios'
import {URL} from '../url'
import {useNavigate} from "react-router-dom"

const Signup = () => {

  
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [address,setAddress] = useState("")
  const [telephone,setTelephone] = useState("")
  const [error,setError] = useState(false)
  const navigate = useNavigate()
  const handleSignup= async()=>{ 

  try {
    const res=await axios.post(URL+"/api/auth/register",{username,email,password,address,telephone})
    console.log(res.data)
    setUsername(res.data.username)
    setEmail(res.data.email)
    setPassword(res.data.password)
    setAddress(res.data.address)
    setTelephone(res.data.telephone)  
    setError(false)
    navigate("/")
  }
  
    catch(err){
      setError(true)
      console.log(err)
  }
}
  return (
    <div className="bg-cover bg-center h-screen flex justify-center items-center" style={{ backgroundImage: "url('/images/bg.jpeg')" }}>
      <div className="bg-[rgba(33,33,33,0.75)] p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-white mb-4">Sign Up with Glam Galore</h2>
        <form className="space-y-4">
          <div>
            <label  className="block text-sm font-medium text-white">Enter your username</label>
            <input onChange={(e)=>setUsername(e.target.value)} type="text"  className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label  className="block text-sm font-medium text-white">Enter your email</label>
            <input onChange={(e)=>setEmail(e.target.value)}  type="email"  className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label  className="block text-sm font-medium text-white">Create a password</label>
            <input onChange={(e)=>setPassword(e.target.value)}  type="password" className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label  className="block text-sm font-medium text-white">Enter your Address</label>
            <input  onChange={(e)=>setAddress(e.target.value)}  type="text"   className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label  className="block text-sm font-medium text-white">Enter your Telephone Number</label>
            <input  onChange={(e)=>setTelephone(e.target.value)} type="text" className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            
              <div onClick={handleSignup} className="w-full inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                Sign Up
              </div>
              {error && (
            <p className="text-red-500 text-sm mt-2">Something went wrong</p>
          )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
