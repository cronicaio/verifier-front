import React from 'react';
import { withTranslation } from 'react-i18next';

import './contact.page.scss';

import LocationImg from '../../assets/Location.png';


function Contact({ t }) {
  return (
    <section className="Page ContactPage">
      <header className="PageHeader">
        <h1 className="textCenter">{t('Contact us')}</h1>
      </header>
      <section className="ContactBlock">
        <p>
          {t('contact_mg1')}
        </p>
        <p>
          {t('contact_mg2')}
        </p>
      </section>
      <section className="FormBlock">
        <div className="FormBlockForm">
          <h3>{t('Send us a message')}</h3>
          <form>
            <p>
              <input type="text" placeholder={t('Name')} />
            </p>
            <p>
              <input type="text" placeholder={t('Email')} />
              <span>
                {t('contact_mg3')}
              </span>
            </p>
            <p>
              <input type="text" placeholder={t('Subject title')} />
            </p>
            <p>
              <textarea placeholder={t('Message')}></textarea>
            </p>
            <p className="textCenter">
              <button className="button">{t('SEND FORM')}</button>
            </p>
          </form>
        </div>
        <div className="FormBlockAddress">
          <h3>{t('Address')}</h3>
          <div className="hiddenMobile Rectangle-12">
            <img width="406px" src={LocationImg} alt="LocationImg" />
          </div>
          <p>
            Two Logan Square<br />
            Suite #820<br />
            Philadelphia, PA 1913<br />
            <br />
            <a href="mailto:hello@cronica.io">hello@cronica.io</a><br />
            <br />
            (214) 919-8972
          </p>
        </div>
      </section>
    </section>
  );
}

export default withTranslation()(Contact);