import React from 'react';
import { NavLink } from "react-router-dom";

import Logo from '../../assets/svg/logo.svg';

import MenuIco1 from '../../assets/menu/1.png';
import MenuIco2 from '../../assets/menu/2.png';
import MenuIco3 from '../../assets/menu/3.png';
import MenuIco4 from '../../assets/menu/4.png';

import './mobile-menu.component.scss';

function MobileMenu({ toggleMenu }) {
  return (
    <section className="hiddenDesktop mobileMenu" onClick={toggleMenu}>
      <p className="mobileMenuControl" >
        <NavLink to="/" className="AppHeaderLogo">
          <img src={Logo} alt="Cronica" />
        </NavLink>
        <span className="mobileMenuControlClose">×</span>
      </p>
      <ul>
        <li>
          <i className="mobileMenuIco">
            <img src={MenuIco1} alt="Home" />
          </i>
          <NavLink to="/" exact>Home</NavLink>
        </li>
        <li>
          <i className="mobileMenuIco">
            <img src={MenuIco2} alt="Home" />
          </i>
          <NavLink to="/product">Project</NavLink>
        </li>
        <li>
          <i className="mobileMenuIco">
            <img src={MenuIco3} alt="Home" />
          </i>
          <NavLink to="/product">Company</NavLink>
        </li>
        <li>
          <i className="mobileMenuIco">
            <img src={MenuIco4} alt="Home" />
          </i>
          <NavLink to="/contact">Contacts</NavLink>
        </li>
      </ul>
    </section>
  );
}

export { MobileMenu };