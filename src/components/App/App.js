import './App.css';

import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import debounce from 'lodash.debounce';
import Layout from '../Layout/Layout';
import Info from '../Info/Info';
import References from '../References/References';
import Prices from '../Prices/Prices';
import Contacts from '../Contacts/Contacts';
import PageNotFound from '../PageNotFound/PageNotFound';
import Videos from '../Videos/Videos';
import PopupWithProject from '../PopupWithProject/PopupWithProject';

import { fetchProjects } from '../../api/fetchProjects';

function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [projects, setProjects] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [currentProject, setCurrentProject] = useState({
    title: '',
    description: '',
    images: '',
  });

  const handleResize = debounce(() => {
    setWindowSize(window.innerWidth);
  }, 100);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    setIsFetching(true);
    fetchProjects
      .then((res) => setProjects(res))
      .catch((err) => console.error(err))
      .finally(() => setIsFetching(false));
  }, [isFetching]);

  const openPopup = () => {
    setIsPopupOpened(true);
  };

  const closePopup = () => {
    setIsPopupOpened(false);
    setCurrentProject({
      title: '',
      description: '',
      images: '',
    });
  };

  const handleCardClick = (title, description, images) => {
    setCurrentProject({
      title,
      description,
      images,
    });
    setIsPopupOpened(true);
  };

  return (
    <div className='App'>
      <Routes>
        <Route path='/'>
          <Route element={<Layout windowSize={windowSize} />}>
            <Route
              index
              element={
                <Info
                  projects={projects}
                  isFetching={isFetching}
                  handleClick={handleCardClick}
                />
              }
            />
            <Route path='references' element={<References />} />
            <Route path='prices' element={<Prices />} />
            <Route path='contacts' element={<Contacts />} />
            <Route path='videos' element={<Videos />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Route>
      </Routes>
      <PopupWithProject
        isPopupOpened={isPopupOpened}
        closePopup={closePopup}
        project={currentProject}
      />
    </div>
  );
}

export default App;
