import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Kids from './pages/Kids';
import Gents from './pages/Gents';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import FrontPage from './pages/FrontPage';
import LandingPage from './pages/LandingPage';
import ThankYouPage from './pages/ThankYouPage';
import Ladies from './pages/Ladies'
import Update from './pages/Update/'
import {  UserContextProvider } from './context/UserContext'




const App = () => {
  return (
    <div>
      <UserContextProvider>
      
      <Navbar />
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Signup" element={<Signup />} /> 
        <Route exact path="/Kids" element={<Kids />} /> 
        <Route exact path="/Gents" element={<Gents />} /> 
        <Route exact path="/Cart" element={<Cart />} /> 
        <Route exact path="/CheckOut" element={<CheckOut />} /> 
        <Route exact path="/FrontPage" element={<FrontPage />} /> 
        <Route exact path="/LandingPage" element={<LandingPage />} /> 
        <Route exact path="/ThankYouPage" element={<ThankYouPage />} />
        <Route exact path="/Ladies" element={<Ladies />} />
        <Route exact path="/Update" element={<Update />} />
        </Routes>
        </UserContextProvider>
       
      <Footer />
    </div>
  );
};

export default App;
