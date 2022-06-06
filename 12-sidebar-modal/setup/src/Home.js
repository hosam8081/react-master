import React, { useContext, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AppContext } from './context';

const Home = () => {
  const {showModal, showSide} = useContext(AppContext);
 
  return <main>
    <button className='sidebar-toggle' onClick={ showSide}><FaBars/></button>
    <button className='btn' onClick={() => showModal()}>show modal</button>
  </main>
}

export default Home
