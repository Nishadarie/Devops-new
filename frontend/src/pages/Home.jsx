
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from "react"
import axios from 'axios';
import { URL } from '../url';
import { UserContext } from "../context/UserContext"

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const {setUser}=useContext(UserContext)
  const navigate = useNavigate();

  const handleSignin = async () => {
    try {
      const res=await axios.post(URL+"/api/auth/login", { username, password }, { withCredentials: true });
      //console.log(res.data);
      //console.log('Login successful!');
      setUser(res.data)
      navigate('/FrontPage');
    } 
    
    catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <div className="bg-cover bg-center h-screen flex items-center" style={{ backgroundImage: 'url("/images/home.jpg")' }}>
      <div className="bg-[rgba(33,33,33,0.75)] p-8 mx-auto rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-white mb-4">Sign in to Glam Galore...</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-200"
            />
          </div>
          <div>
            <div
              onClick={handleSignin}
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-500-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Sign In
            </div>
            {error && <p className="text-red-500 text-sm mt-2">Something went wrong</p>}
          </div>
        </form>
        <div className="text-center mt-4 text-white">
          <p>
            Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
