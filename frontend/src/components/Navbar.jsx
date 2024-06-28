
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import {URL} from '../url';
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const Navbar = () => {


  const { user } = useContext(UserContext);
  const {setUser}=useContext(UserContext)
  const navigate =useNavigate()

  const handleLogout=async()=>{
    try{
        const res=await axios.get(URL+"/api/auth/logout",{withCredentials:true})
        console.log(res)
        setUser(null)
        navigate("/LandingPage")
    }
    catch(err){
      console.log(err)
    }
  }


  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="public/images/logo.png"
            alt="Glam Galore Logo"
            className="w-8 h-8 mr-2"
          />
          <Link to="/" className="text-white text-2xl font-semibold">
            Glam Galore
          </Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/LandingPage" className="text-white hover:text-blue-200 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            {user?(<Link></Link>):( <Link to="/" className="text-white hover:text-blue-200 transition duration-300">
              Sign-In
            </Link>)
            }           
          </li>
          <li>
            {user?(<Link></Link>):(   <Link to="/Signup" className="text-white hover:text-blue-200 transition duration-300">
             Sign-Up
            </Link>)}
         
          </li>
          <li>
            {user?( <Link to="/Update" className="text-white hover:text-blue-200 transition duration-300">
              Profile
            </Link>):(<Link></Link>)}
           
          </li>
          <li >   
            {user?(<p onClick={handleLogout}
             className="text-white hover:text-blue-200 transition duration-300">LOG OUT</p>):(<p></p>)}               
          
          </li>
          </ul>
      </div>
    </nav>
  );
};

export default Navbar;
