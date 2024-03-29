import React from 'react';
import About from '../components/About';
import Steps from '../components/Steps';
import Lead from '../components/Lead';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

export default function Info({ handleClick }) {
  return (
    <main className='main'>
      <Lead />
      <About />
      <Skills />
      <Steps />
      <Projects handleClick={handleClick} />
    </main>
  );
}
