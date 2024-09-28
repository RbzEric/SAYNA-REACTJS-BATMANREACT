import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import FOOTER from '../components/footer';

const Layout = () => {
  return (
    <>
     <Outlet/>
    </>
  )
}

export default Layout