import React from 'react';
import About from './About/About';
import './Info.css';
import Lead from './Lead/Lead';
import Projects from './Projects/Projects';
import Steps from './Steps/Steps';
import Skills from './Skills/Skills';

export default function Info({ projects, isFetching, handleClick }) {
  return (
    <main className='main'>
      <Lead />
      <About />
      <Skills />
      <Steps />
      <Projects
        projects={projects}
        isFetching={isFetching}
        handleClick={handleClick}
      />
    </main>
  );
}
