import React from 'react';
import './main.css'; 
import truck from '../../images/klipartz.com.png'
const MainSection = () => {
  return (
    <main>
      <div className='main-text'>
      <h1>TRANSPORT YOUR CARS WITH US</h1>
        </ div>
      
      <img src={truck} alt="Truck" />
  
    </main>
  );
};

export default MainSection;