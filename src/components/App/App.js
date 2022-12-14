import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Info from '../Info/Info';
import Projects from '../Projects/Projects';
import References from '../References/References';
import Prices from '../Prices/Prices';
import Contacts from '../Contacts/Contacts';
import PageNotFound from '../PageNotFound/PageNotFound';
import Videos from '../Videos/Videos';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/'>
          <Route element={<Layout />}>
            <Route index element={<Info />} />
            <Route path='projects' element={<Projects />} />
            <Route path='references' element={<References />} />
            <Route path='prices' element={<Prices />} />
            <Route path='contacts' element={<Contacts />} />
            <Route path='Videos' element={<Videos />} />
            {/* <Route path='Videos' element={<Blog />} /> */}
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
