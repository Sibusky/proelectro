import './App.css';

import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import debounce from 'lodash.debounce';
import Layout from './components/Layout';
import PopupWithProject from './components/PopupWithProject';
import { fetchProjects } from './api/fetchProjects';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(window.pageYOffset);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      setIsPopupWithProjectOpened(false);
      setIsPopupWithPhotoOpened(false);
    }
  }, [location]);

  const handleScroll = debounce(() => {
    setScroll(window.pageYOffset);
  }, 0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleResize = debounce(() => {
    setWindowSize(document.documentElement.clientWidth);
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
  }, []);

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
            <Route path='prices' element={<Prices 
            
            projects={projects}

            
            />} />
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