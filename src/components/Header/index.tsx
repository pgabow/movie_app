import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from 'assets/img/minilogo.png'
import './style.scss'

import { routeMain as routeMainPage } from 'pages/MainPage'
import { routeMain as routeContacts } from 'pages/Contacts'
import { routeMain as routeCategoryPage } from 'pages/CategoryList'
import { routeMain as routeSearchShowName } from 'pages/SearchShowName'

const Header = () => {
  return (
    <div className='container'>
      <div className='row'>
        <header className='header'>
          <div className='header__title'>
            <a
              className='header-logo'
              href='mailto:paul@gabow.ru?subject=Вперед через тернии к звездам'
              title='тупость и труд - всему перетруд!'
            >
              <img src={Logo} alt='logo' title='тупость и труд - всему перетруд!' />
            </a>
            <NavLink
              to={routeMainPage()}
              activeClassName='active-link'
              className='header-title__link'
            >
              MOVIESinfo
            </NavLink>
          </div>

          <nav>
            <NavLink to={routeMainPage()} activeClassName='active-link'>
              Главная
            </NavLink>
            <NavLink to={routeCategoryPage()} activeClassName='active-link'>
              Категории
            </NavLink>
            <NavLink to={routeContacts()} activeClassName='active-link'>
              Эбаут юз
            </NavLink>
            <NavLink to={routeSearchShowName()} activeClassName='active-link'>
              Поиск
            </NavLink>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default Header
