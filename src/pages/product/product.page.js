import React from 'react';
import { withTranslation } from 'react-i18next';

import './product.page.scss';

import Product1 from '../../assets/product1.png';
import Product2 from '../../assets/product2.png';


function Product({ t }) {
  return (
    <section className="Page ProductPage">
      <header className="PageHeader">
        <h1 className="textCenter">
          {t("Don't compromise for Security,")}
          <br className="hiddenMobile" />
          {t('or Security For Convenience')}
        </h1>
        <h4 className="textCenter">
          {t("With Cronica, You Don't Have To")}
        </h4>
      </header>
      <section className="HomeBlock textCenter">
        <p>
          <button type="button" className="button">{t('START TODAY')}</button>
        </p>
        <h2>{t('Why Cronica?')}</h2>
        <p>
          {t('Our lives and identities')}
        </p>
        <p>
          <img width="100%" src={Product1} alt="" />
        </p>
        <p>
          {t('Cronica is the first document')}
        </p>
        <p>
          {t('Only the document')}
        </p>
        <h4>
          {t('A Platform That Protects Document Data')}
          <br />
          {t('And Makes Authentication Simple')}
        </h4>
        <p>
          <img width="100%" src={Product2} alt="" />
        </p>
        <p>
          <button type="button" className="button">{t('DOWNLOAD OUR PRESENTATION')}</button>
        </p>
      </section>

    </section>
  );
}

export default withTranslation()(Product);