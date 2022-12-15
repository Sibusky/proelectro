import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderNavigation.css';

export default function HeaderNavigation({ windowSize, setIsMenuOpen }) {
  return (
    <nav className='navigation'>
      <ul className={windowSize < 880 ? 'navigation__list navigation__list_menu' : 'navigation__list'}>
        <li className='navigation__list-item' onClick={() => setIsMenuOpen(false)}>
          <NavLink 
            to='/'
            className={({ isActive }) =>
              isActive
                ? 'navigation__link navigation__link_active link'
                : 'navigation__link link'
            }
          >
            Инфо
          </NavLink>
        </li>
        <li className='navigation__list-item' onClick={() => setIsMenuOpen(false)}>
          <NavLink
            to='/projects'
            className={({ isActive }) =>
              isActive
                ? 'navigation__link navigation__link_active link'
                : 'navigation__link link'
            }
          >
            Проекты
          </NavLink>
        </li>
        <li className='navigation__list-item' onClick={() => setIsMenuOpen(false)}>
          <NavLink
            to='/references'
            className={({ isActive }) =>
              isActive
                ? 'navigation__link navigation__link_active link'
                : 'navigation__link link'
            }
          >
            Отзывы
          </NavLink>
        </li>
        <li className='navigation__list-item' onClick={() => setIsMenuOpen(false)}>
          <NavLink
            to='/prices'
            className={({ isActive }) =>
              isActive
                ? 'navigation__link navigation__link_active link'
                : 'navigation__link link'
            }
          >
            Цены
          </NavLink>
        </li>
        <li className='navigation__list-item' onClick={() => setIsMenuOpen(false)}>
          <NavLink
            to='/videos'
            className={({ isActive }) =>
              isActive
                ? 'navigation__link navigation__link_active link'
                : 'navigation__link link'
            }
          >
            Видео
          </NavLink>
        </li>
        <li className='navigation__list-item' onClick={() => setIsMenuOpen(false)}>
          <NavLink
            to='/contacts'
            className={({ isActive }) =>
              isActive
                ? 'navigation__link navigation__link_active link'
                : 'navigation__link link'
            }
          >
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
