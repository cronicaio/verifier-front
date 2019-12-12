import React from 'react';
import i18n from '../../i18n';
import useReactRouter from 'use-react-router';
import { withTranslation } from 'react-i18next';

import './footer.component.scss';

import Home5 from '../../assets/svg/home5.svg';
import Social from '../../assets/social.png';

function Footer({ t }) {
  const { location } = useReactRouter();
  const currentLang = window.localStorage.i18nextLng;

  if ((/searchBy/g).test(location.pathname))
    return (<div></div>);

  const toggleLang = () => {
    i18n.changeLanguage(currentLang === 'ar-AR' ? 'en-EN' : 'ar-AR');
  }

  return (
    <footer className="AppFooter">
      <div className="Grid">
        <div className="Verified hiddenMobile">
          <img src={Home5} alt="Verified" />
        </div>
        <div>
          <h5>{t('PRODUCT')}</h5>
          <ul>
            <li>{t('Why Cronica?')}</li>
            <li>{t('Enterprise security')}</li>
            <li>{t('How it works')}</li>
            <li>{t('Pricing')}</li>
            <li>{t('Cronica Demo')}</li>
          </ul>
        </div>
        <div>
          <h5>{t('RESOURCES')}</h5>
          <ul>
            <li>{t('Download Cronica')}</li>
            <li>{t('Training & Tuts')}</li>
            <li>{t('API')}</li>
            <li>{t('Help Center')}</li>
            <li>{t('Partners')}</li>
          </ul>
        </div>
        <div>
          <h5>{t('CONTACT')}</h5>
          <ul>
            <li>{t('About Cronica')}</li>
            <li>{t('Blog')}</li>
            <li>{t('Careers')}</li>
            <li>{t('Contact Us')}</li>
          </ul>
        </div>
        <div></div>
      </div>
      <div className="Block Subscribe">
        <span>{t('Subscribe to our newsletter')}</span>
        <div className="Email-opt-in">
          <input type="text" placeholder={t('Email address')} />
          <button type="button" className="button">{t('Send')}</button>
        </div>
        <div className="Social hiddenMobile">
          <img width="240px" src={Social} alt="" />
        </div>
      </div>
      <div className="Block Copyright">
        <div className="Social hiddenDesktop">
          <img width="240px" src={Social} alt="" />
        </div>
        <span className="hiddenMobile">{t('Terms of Use')}</span>
        <span className="hiddenMobile">{t('Privacy Policy')}</span>
        <span className="hiddenMobile">{t('Cookie Policy')}</span>
        <span>Language: <b className="pointer" onClick={toggleLang}>{currentLang}</b></span>
        <span>© Cronica 2019</span>
      </div>
    </footer>
  );
}

export default withTranslation()(Footer);