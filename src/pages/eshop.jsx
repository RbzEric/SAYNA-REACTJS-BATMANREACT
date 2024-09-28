import '../styles/eshop.css';
import Heroshop from '../components/Heroshop';
import FILTER from '../components/Filter';
import CATALOGUE from '../components/catalogue';
 
import React from 'react'

const Eshop = () => {
  return (
    <div className='shop'>
      <Heroshop />  
      <div className='main-content'>
        <FILTER /> 
        <CATALOGUE />
      </div>
       </div>

  )
}

export default Eshop