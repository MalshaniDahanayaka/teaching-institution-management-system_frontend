import React from 'react';
import HomeImage from '../assets/img/hImg.jpg'

const HomePageImage = () => {
  return (
    <div style={{
      backgroundImage: `url(${HomeImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '60vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <h1 style={{ color: 'white' }}>Welcome to my Home Page</h1>
    </div>
  );
};

export default HomePageImage;
