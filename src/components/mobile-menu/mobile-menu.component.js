import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope, faAngleDown, faCheck } from '@fortawesome/free-solid-svg-icons'

import { languages } from '../../i18n';

import Logo from '../../assets/svg/logo.svg';

import MenuIco1 from '../../assets/icons/Home.svg';
import MenuIco2 from '../../assets/icons/Project.svg';
import MenuIco3 from '../../assets/icons/Company.svg';
import MenuIco4 from '../../assets/icons/Contacts.svg';



import './mobile-menu.component.scss';

function MobileMenu({ toggleMenu }) {

  const { t, i18n } = useTranslation();

  const [isLangDropDownActive, setLangDropDownActive] = useState(false);

  const toggleLangDropDown = (event) => {
    event && event.stopPropagation();
    setLangDropDownActive(!isLangDropDownActive);
  }

  const onLangChange = (lang, event) => {
    event && event.stopPropagation();
    i18n.changeLanguage(lang.code);
    toggleLangDropDown();
  }

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
        <li className="langLi">
          <i className="mobileMenuIco">
            <FontAwesomeIcon icon={faGlobeEurope} color="#438bff" />
          </i>
          <span className="navLink" onClick={toggleLangDropDown}>
            <span>Language</span>
              &nbsp;
              &nbsp;
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
          <div className={'langDropdown ' + (isLangDropDownActive ? 'active' : '')} >
            {languages.map((lang, key) => (
              <span className="langDropdownLink" key={key} onClick={e => onLangChange(lang, e)}>
                <span>{lang.title}</span>
                <FontAwesomeIcon icon={faCheck} color={lang.code === i18n.language ? 'lightblue' : 'transparent'} />
              </span>
            ))}
          </div>
        </li>
      </ul>
    </section>
  );
}

export default MobileMenu;