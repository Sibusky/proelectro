import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Button({ path, type, children, ...props }) {
  return (
    <Link className='button-link' to={path}>
      <button {...props} className='button button_styled' type={type}>
        {children}
      </button>
    </Link>
  );
}
