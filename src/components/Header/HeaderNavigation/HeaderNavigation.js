import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderNavigation.css';

export default function HeaderNavigation() {
  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li className='navigation__list-item'>
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
        <li className='navigation__list-item'>
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
        <li className='navigation__list-item'>
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
        <li className='navigation__list-item'>
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
        <li className='navigation__list-item'>
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
        <li className='navigation__list-item'>
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
