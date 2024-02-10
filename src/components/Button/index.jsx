import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Button({ path, type, children, ...props }) {
  return (
    <Link className='button-link' to={path}>
      <div {...props} className='button button_styled' type={type}>
        {children}
      </div>
    </Link>
  );
}
