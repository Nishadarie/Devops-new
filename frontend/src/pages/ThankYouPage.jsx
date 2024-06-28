import React from 'react';

const ThankYouPage = () => {
  const pageStyle = {
    background: 'url("/public/images/TYP.jpg") center/cover no-repeat',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', // Center vertically
    textAlign: 'center',
  };

  const messageStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
    marginBottom: '10px', // Reduce the margin between the two sentences
  };

  const joinAgainStyle = {
    fontSize: '18px',
    color: 'blue',
    textDecoration: 'underline',
  };

  return (
    <div style={pageStyle}>
      <div>
        <h1 style={messageStyle}>Thank You for Shopping with Us!</h1>
        <p style={joinAgainStyle}>Join Again with Glam Galore</p>
      </div>
    </div>
  );
};

export default ThankYouPage;
