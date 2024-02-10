import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import LogoImg from '../../images/logo.svg';

export default function Logo() {
  return (
    <Link className='logo' to='/'>
      <img className='logo__img link' src={LogoImg} alt='Логотип' />
    </Link>
  );
}
