import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import {useNavigate, useParams } from 'react-router-dom';
import {URL} from '../url'

const Update = () => {
  const param = useParams().id;
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  //const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [telephone, setTelephone] = useState('');
  const navigate = useNavigate();
  const [updated, setUpdated] = useState(false);

  const fetchUpdate = async () => {
    try {
    
      const res = await axios.get(URL +'/api/users/' + user._id);
      console.log(res.data)
      setUsername(res.data.username);
      setEmail(res.data.email);
      setAddress(res.data.address);
      setTelephone(res.data.telephone);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUserUpdate = async () => {
    setUpdated(false);
    try {
      const res = await axios.put(URL + '/api/users/' + user._id, { username, email, address, telephone }, { withCredentials: true });
      setUpdated(true);
      navigate('/FrontPage');
    } catch (err) {
      console.log(err);
      setUpdated(false);
    }
  };

  const handleUserDelete = async () => {
    try {
      const res = await axios.delete(URL + '/api/users/' + user._id, { withCredentials: true });
      setUser(null);
      navigate('/LandingPage');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUpdate();
  }, [param]);

  return (
    <div className="bg-cover bg-center h-screen flex justify-center items-center" style={{ backgroundImage: "url('/images/bg.jpeg')" }}>
      <div className="bg-[rgba(33,33,33,0.75)] p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-white mb-4">Update Your Profile</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white">Update your username</label>
            <input onChange={(e) => setUsername(e.target.value)} value={username} className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Update your email</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>
        
          <div>
            <label className="block text-sm font-medium text-white">Update your Address</label>
            <input onChange={(e) => setAddress(e.target.value)} value={address} className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Update your Telephone Number</label>
            <input onChange={(e) => setTelephone(e.target.value)} value={telephone} className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <div onClick={handleUserUpdate} className="w-full inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
              Update Profile
            </div>
          </div>
          <div>
            <div onClick={handleUserDelete} className="w-full inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Delete Profile
            </div>
          </div>
          {updated && <h3 className="text-green-500 text-sm text-center mt-4">User updated successfully!</h3>}
        </form>
      </div>
    </div>
  );
};

export default Update;
