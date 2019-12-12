import React, { useState } from 'react';
import useReactRouter from 'use-react-router';
import { NavLink } from "react-router-dom";
import { withTranslation } from 'react-i18next';

import MobileMenu from '../mobile-menu/mobile-menu.component';

import './header.component.scss';

import Logo from '../../assets/svg/logo.svg';

function Header({ t }) {
  const [isMenuActive, setMenuActive] = useState(false);
  const { location } = useReactRouter();

  if ((/searchBy/g).test(location.pathname))
    return (<div></div>);

  return (
    <header className="AppHeader">
      <NavLink to="/" className="AppHeaderLogo">
        <img src={Logo} alt="Cronica" />
      </NavLink>
      <nav className="hiddenMobile">
        <NavLink to="/" exact>{t('Home')}</NavLink>
        <NavLink to="/product">{t('Project')}</NavLink>
        <NavLink to="/contact">{t('Contact Us')}</NavLink>
      </nav>
      <nav className="hiddenDesktop mobileMenuBtn" onClick={toggleMenu}>
        <span>☰</span>
      </nav>
      {!!isMenuActive && (
        <MobileMenu toggleMenu={toggleMenu} />
      )}
    </header>
  );

  function toggleMenu() {
    setMenuActive(!isMenuActive);
    window.scrollTo(0, 0);
  }
}

export default withTranslation()(Header);
