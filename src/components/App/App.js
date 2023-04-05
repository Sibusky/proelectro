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
import PopupWithImage from '../PopupWithImage/PopupWithImage';

function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isPopupWithProjectOpened, setIsPopupWithProjectOpened] =
    useState(false);
  const [isPopupWithPhotoOpened, setIsPopupWithPhotoOpened] = useState(false);
  const [projects, setProjects] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [currentProject, setCurrentProject] = useState({
    id: '',
    title: '',
    description: '',
    images: '',
  });
  const [currentImage, setCurrentImage] = useState({
    id: '',
    caption: '',
    link: '',
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
    setIsPopupWithProjectOpened(true);
  };

  const closePopupWithProject = () => {
    setIsPopupWithProjectOpened(false);
  };

  const handleCardClick = (id, title, description, images) => {
    setCurrentProject({
      id,
      title,
      description,
      images,
    });
    setIsPopupWithProjectOpened(true);
  };

  const handleImageClick = (id, link, caption) => {
    setIsPopupWithPhotoOpened(true);
    setCurrentImage({
      id,
      link,
      caption,
    })
  };

  const closePopupWithImage = () => {
    setIsPopupWithPhotoOpened(false);
    setCurrentImage({
      id: '',
      caption: '',
      link: '',
    })
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
        isPopupOpened={isPopupWithProjectOpened}
        closePopup={closePopupWithProject}
        project={currentProject}
        handleImageClick={handleImageClick}
        image={currentImage}

      />
      <PopupWithImage
        isPopupOpened={isPopupWithPhotoOpened}
        closePopup={closePopupWithImage}
        project={currentProject}
        image={currentImage}
      />
    </div>
  );
}

export default App;
