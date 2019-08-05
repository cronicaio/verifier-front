import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

import { MobileMenu } from '../mobile-menu/mobile-menu.component';

import './header.component.scss';

import Logo from '../../assets/svg/logo.svg';

function Header() {
  const [isMenuActive, setMenuActive] = useState(false);

  return (
    <header className="AppHeader">
      <NavLink to="/" className="AppHeaderLogo">
        <img src={Logo} alt="Cronica" />
      </NavLink>
      <nav className="hiddenMobile">
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/product">Project</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
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

export { Header };