import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';

export default function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <Logo />
        <HeaderNavigation />
      </div>
    </header>
  );
}
