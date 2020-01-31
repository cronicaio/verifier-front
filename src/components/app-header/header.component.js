import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { withTranslation } from 'react-i18next';

import MobileMenu from '../mobile-menu/mobile-menu.component';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope, faAngleDown, faCheck } from '@fortawesome/free-solid-svg-icons'

import i18n from '../../i18n';

import './header.component.scss';

import Logo from '../../assets/svg/logo.svg';

const langsInitialSyate = [
  { title: 'EN', code: 'en-EN', active: false },
  { title: 'AR', code: 'ar-AR', active: false }
];

function Header({ t }) {
  const [langs, setLangs] = useState(langsInitialSyate);
  const [currentLang, setCurrentLang] = useState(langsInitialSyate[0]);
  const [isMenuActive, setMenuActive] = useState(false);
  const [isLangDropDownActive, setLangDropDownActive] = useState(false);

  const location = useLocation();

  const setActiveLang = (langCode) => {
    const prevLang = langs.find(v => !!v.active);
    if (prevLang) prevLang.active = false;
    const nextLang = langs.find(v => v.code === langCode);

    if (nextLang) {
      nextLang.active = true;
      setLangs(langs);
      setCurrentLang(nextLang);
    }
  }

  const toggleLang = () => {
    setLangDropDownActive(!isLangDropDownActive);
  }

  const onLangChange = (lang) => {
    i18n.changeLanguage(lang.code);
    toggleLang();
  }

  useEffect(() => {
    setActiveLang(window.localStorage.i18nextLng);
  }, [])


  if ((/searchBy/g).test(location.pathname))
    return (<div></div>);

  return (
    <header className="AppHeader">
      <NavLink to="/" className="AppHeaderLogo">
        <img src={Logo} alt="Cronica" />
      </NavLink>
      <nav className="hiddenMobile">
        <div className="navLink" >
          <span onClick={toggleLang}>
            <FontAwesomeIcon icon={faGlobeEurope} />
              &nbsp;
            <span>{currentLang.title}</span>
              &nbsp;
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
          <div className={'langDropdown ' + (isLangDropDownActive ? 'active' : '')} >
            {langs.map((lang, key) => (
              <span className="langDropdownLink" key={key} onClick={e => onLangChange(lang)}>
                <span>{lang.title}</span>
                <FontAwesomeIcon icon={faCheck} color={lang.active ? 'lightblue' : 'transparent'} />
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
