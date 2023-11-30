import React from 'react';
import './founders.css'; 
import founder1Image from '../../images/bobur.jpg';
import founder2Image from '../../images/ramz.jpg';
import founder3Image from '../../images/misha.jpg';


const FounderCard = ({ name, image, title }) => {
  return (
    <div className="founder-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{title}</p>
    </div>
  );
};

const Founders = () => {
  return (
    <div className="founders-section" id="founders">
      <h2>Founders</h2>
      <div className="founder-cards-container">
        <FounderCard name="Boburjon Usmonov" image={founder1Image} title="Top G" />
        <FounderCard name="Ramziddin Suyunov" image={founder2Image} title="Bottom G" />
        <FounderCard name="Mirshokhid Okilbekov" image={founder3Image} title="Beta Male" />
      </div>
    </div>
  );
};

export default Founders;