import React from 'react';
import { NavLink } from "react-router-dom";

import './header.component.scss';

import Logo from '../../assets/svg/logo.svg';

function Header() {
  return (
    <header className="AppHeader">
      <NavLink to="/">
        <img src={Logo} alt="cronica" />
      </NavLink>
      <nav className="hiddenMobile">
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/product">Project</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>
    </header>
  );
}

export { Header };