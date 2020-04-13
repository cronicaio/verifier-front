import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import useReactRouter from 'use-react-router';

import { MobileMenu } from '../mobile-menu/mobile-menu.component';

import './header.component.scss';

import Logo from '../../assets/tasreeh-final-logo.png';

function Header() {
  const [isMenuActive, setMenuActive] = useState(false);
  const { location } = useReactRouter();

  if ((/searchBy/g).test(location.pathname))
    return (<div></div>);

  return (
    <header className="AppHeader">
      <NavLink to="/" className="AppHeaderLogo">
        <img src={Logo} style={{horizontal:"middle"}} alt="Cronica" />
      </NavLink>
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