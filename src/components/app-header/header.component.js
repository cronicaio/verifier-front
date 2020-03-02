import React, { useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next'

import { languages } from '../../i18n';

import MobileMenu from '../mobile-menu/mobile-menu.component';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope, faAngleDown, faCheck } from '@fortawesome/free-solid-svg-icons'

import './header.component.scss';

import Logo from '../../assets/svg/logo.svg';


function Header() {

  const location = useLocation();

  const { t, i18n } = useTranslation();

  const [isMenuActive, setMenuActive] = useState(false);
  const [isLangDropDownActive, setLangDropDownActive] = useState(false);
  
  const currentLang = languages.find(v => v.code === i18n.language) || languages[0];

  const toggleLangDropDown = () => {
    setLangDropDownActive(!isLangDropDownActive);
  }

  const onLangChange = (lang) => {
    i18n.changeLanguage(lang.code);
    toggleLangDropDown();
  }

  if ((/searchBy/g).test(location.pathname))
    return (<div></div>);

  return (
    <header className="AppHeader">
      <NavLink to="/" className="AppHeaderLogo">
        <img src={Logo} alt="Cronica" />
      </NavLink>
      <nav className="hiddenMobile">
        <div className="navLink" >
          <span onClick={toggleLangDropDown}>
            <FontAwesomeIcon icon={faGlobeEurope} />
              &nbsp;
              &nbsp;
            <span>{currentLang.title}</span>
              &nbsp;
              &nbsp;
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
          <div className={'langDropdown ' + (isLangDropDownActive ? 'active' : '')} >
            {languages.map((lang, key) => (
              <span className="langDropdownLink" key={key} onClick={e => onLangChange(lang)}>
                <span>{lang.title}</span>
                <FontAwesomeIcon icon={faCheck} color={lang.code === i18n.language ? 'lightblue' : 'transparent'} />
              </span>
            ))}
          </div>
        </div>
        <NavLink to="/" exact>{t('Home')}</NavLink>
        <NavLink to="/product">{t('Project')}</NavLink>
        <NavLink to="/contact">{t('Contact Us')}</NavLink>
      </nav>
      <nav className="hiddenDesktop mobileMenuBtn" onClick={toggleMenu}>
        <span>☰</span>
      </nav>
      {!!isMenuActive && (
        <MobileMenu toggleMenu={toggleMenu} currentLang={currentLang} />
      )}
    </header>
  );

  function toggleMenu() {
    setMenuActive(!isMenuActive);
    window.scrollTo(0, 0);
  }
}

export default Header;
