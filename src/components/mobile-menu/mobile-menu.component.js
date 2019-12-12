import React from 'react';
import { NavLink } from "react-router-dom";
import { withTranslation } from 'react-i18next';

import Logo from '../../assets/svg/logo.svg';

import MenuIco1 from '../../assets/icons/Home.svg';
import MenuIco2 from '../../assets/icons/Project.svg';
import MenuIco3 from '../../assets/icons/Company.svg';
import MenuIco4 from '../../assets/icons/Contacts.svg';

import './mobile-menu.component.scss';

function MobileMenu({ toggleMenu, t }) {
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
          <NavLink to="/" exact>{t('Home')}</NavLink>
        </li>
        <li>
          <i className="mobileMenuIco">
            <img src={MenuIco2} alt="Project" />
          </i>
          <NavLink to="/product">{t('Project')}</NavLink>
        </li>
        <li>
          <i className="mobileMenuIco">
            <img src={MenuIco3} alt="Company" />
          </i>
          <NavLink to="/product">{t('Company')}</NavLink>
        </li>
        <li>
          <i className="mobileMenuIco">
            <img src={MenuIco4} alt="Home" />
          </i>
          <NavLink to="/contact">{t('Contacts')}</NavLink>
        </li>
      </ul>
    </section>
  );
}

export default withTranslation()(MobileMenu);