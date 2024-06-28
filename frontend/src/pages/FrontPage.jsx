import React from 'react';

const FrontPage = () => {
  
  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '1.2rem',
    backgroundColor: 'purple',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const pageStyle = {
    backgroundImage: 'url("public/images/LP.webp")', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  
  };

  return (
    <div style={pageStyle}>
      <h1 className="text-4xl font-bold mb-8">Welcome to Glam Galore!</h1>
      <p className="text-lg mb-6">Please select a category to continue:</p>
      <div>
        <a href="/kids">
          <button style={buttonStyle}>Kids</button>
        </a>
        <a href="/gents">
          <button style={buttonStyle}>Gents</button>
        </a>
        <a href="/ladies">
          <button style={buttonStyle}>Ladies</button>
        </a>
      </div>
    </div>
  );
};

export default FrontPage;
