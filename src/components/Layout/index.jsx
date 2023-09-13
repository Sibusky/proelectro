import React from 'react';
import './styles.css';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

export default function Layout({
  windowSize,
  handleClick,
  scroll,
  isPopupOpen,
}) {
  return (
    <div className='layout'>
      <Header
        windowSize={windowSize}
        handleClick={handleClick}
        scroll={scroll}
        isPopupOpen={isPopupOpen}
      />
      <Outlet />
      <Footer />
    </div>
  );
}
