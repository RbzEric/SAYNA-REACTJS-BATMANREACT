import '../styles/Heroshop.css';
import React from 'react';
import flechedown from '../../src/assets/logos/flèche_down_header.png';

const Heroshop = () => {
  return (
    <div className='heroshop'>
            <div className='hero'>
                <div className="content">
                    <p>Récuperez le flow de Batman avec notre e shop !</p>
                </div>
            </div>
        <img className="flèche_down" src={flechedown} alt="flèche_down_header"/>
       
    </div>
  );
}

export default Heroshop;