import React from 'react';

const LandingPage = () => {
  const pageStyle = {
    backgroundImage: 'url("/images/aa.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: 'black',
    textAlign: 'center',
  };

  const logoStyle = {
    width: '150px', 
    height: 'auto',
    marginBottom: '20px',
  };

  return (
    <div style={pageStyle}>
      <img
        src="/images/logo.png" 
        alt="Glam Galore Logo"
        style={logoStyle}
      />
      <h1 className="text-4xl font-bold mb-4">Welcome to Glam Galore</h1>
      <p className="text-lg mb-6">
        Making your life beautiful with Glam Galore...
      </p>
      <p className="text-lg mb-6">
        Sign in to explore our latest collections.
      </p>
      <div>
        <a href="/">
          <button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none mr-4">
            Sign In
          </button>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
