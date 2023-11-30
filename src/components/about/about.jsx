import React from 'react';
import './about.css'; // Make sure the path is correct based on your file structure
import mapImage from '../../images/GoogleMapTA.webp';

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="content">
        <h2 className='about-title'>How does it work?</h2>
        <div className="steps">
          <div className="step">
            <h3 className='about-subtitle'>Firstly</h3>
            <p className='about-text'>You publish the car you want to transport</p>
          </div>
          <div className="step">
            <h3  className='about-subtitle'>Secondly</h3>
            <p className='about-text'>Our bleeding-edge technologies propose the best route to deliver your car at the best price and time.</p>
          </div>
          <div className="step">
            <h3  className='about-subtitle'>Thirdly</h3>
            <p  className='about-text'>We pick up and deliver your car to the destination, free of hustle for you.</p>
          </div>
          <div className="step">
            <h3  className='about-subtitle'>Lastly</h3>
            <p className='about-text'>You get the car at your destination</p>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src={mapImage} alt="Map" />
      </div>
    </div>
  );
};

export default About;
