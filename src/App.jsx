import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import debounce from 'lodash.debounce';

import './App.css';
import Layout from './components/Layout';
import PopupWithProject from './components/PopupWithProject';
import PopupWithImage from './components/PopupWithImage';
import MenuModal from './components/Header/MenuModal';
import Info from './pages/info';
import References from './pages/references';
import Prices from './pages/prices';
import Contacts from './pages/contacts';
import Videos from './pages/videos';
import PageNotFound from './pages/page-not-found';

function App() {
  const [windowSize, setWindowSize] = useState(
    document.documentElement.clientWidth
  );
  const [isPopupWithProjectOpened, setIsPopupWithProjectOpened] =
    useState(false);
  const [isPopupWithPhotoOpened, setIsPopupWithPhotoOpened] = useState(false);
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(window.scrollY);

  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = debounce(() => {
    setScroll(window.scrollY);
  }, 0);

  const handleResize = debounce(() => {
    setWindowSize(window.innerWidth);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    if (location.pathname === '/') {
      setIsPopupWithProjectOpened(false);
      setIsPopupWithPhotoOpened(false);
    }
  }, [location]);

  const handleMenuButtonClick = () => {
    setIsMenuOpen(true);
  };

  const closePopupWithProject = () => {
    setIsPopupWithProjectOpened(false);
    navigate(-1);
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
    });
  };

  const closePopupWithImage = () => {
    setIsPopupWithPhotoOpened(false);
    setCurrentImage({
      id: '',
      caption: '',
      link: '',
    });
    navigate(-1);
  };

  return (
    <div className='App'>
      <Routes>
        <Route path='/'>
          <Route
            element={
              <Layout
                windowSize={windowSize}
                handleClick={handleMenuButtonClick}
                scroll={scroll}
                isPopupOpen={isPopupWithProjectOpened || isPopupWithPhotoOpened}
              />
            }
          >
            <Route index element={<Info handleClick={handleCardClick} />} />
            <Route path='references' element={<References />} />
            <Route
              path='prices'
              element={<Prices handleClick={handleCardClick} />}
            />
            <Route path='contacts' element={<Contacts />} />
            <Route path='videos' element={<Videos />} />
            <Route path='*' element={<PageNotFound />} />
            <Route
              path='project/:projectId'
              element={
                <PopupWithProject
                  isPopupOpened={isPopupWithProjectOpened}
                  closePopup={closePopupWithProject}
                  project={currentProject}
                  handleImageClick={handleImageClick}
                  image={currentImage}
                />
              }
            />
            <Route
              path='project/:projectId/image'
              element={
                <PopupWithImage
                  isPopupOpened={isPopupWithPhotoOpened}
                  closePopup={closePopupWithImage}
                  project={currentProject}
                  image={currentImage}
                />
              }
            />
            <Route
              path='prices/price/:priceId'
              element={
                <PopupWithProject
                  isPopupOpened={isPopupWithProjectOpened}
                  closePopup={closePopupWithProject}
                  project={currentProject}
                  handleImageClick={handleImageClick}
                  image={currentImage}
                />
              }
            />
          </Route>
        </Route>
      </Routes>
      <MenuModal
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        windowSize={windowSize}
      />
    </div>
  );
}

export default App;
