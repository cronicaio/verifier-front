import React from 'react';
import { withTranslation } from 'react-i18next';

import Img_notfound from '../../assets/svg/revoked.svg';

function SearchResultNotFound({ errorMessage, t }) {
  return (
    <section className="SearchResult">
      <img src={Img_notfound} className="SearchResultImg" alt="revoked" />
      <div className="ResultBlock">
        <div className="ResultDownload">
          <h2 className="textCenter">{t('Document Not Found')}</h2>
          <p>{errorMessage}</p>
        </div>
      </div>
    </section>
  );
}

export default withTranslation()(SearchResultNotFound);