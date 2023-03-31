import React from 'react';
import About from './About/About';
import './Info.css';
import Lead from './Lead/Lead';

export default function Info() {
  return (
    <main className='info'>
      <Lead />
      <About />
    </main>
  );
}
