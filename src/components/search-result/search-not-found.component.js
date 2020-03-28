import React from 'react';

import Img_notfound from '../../assets/svg/revoked.svg';

function SearchResultNotFound({ errorMessage }) {
  return (
    <section className="SearchResult">
      <img src={Img_notfound} className="SearchResultImg" alt="revoked" />
      <div className="ResultBlock">
        <div className="ResultDownload">
          <h2 className="textCenter"> لا يوجد تصريح</h2>
          <p>{errorMessage}</p>
        </div>
      </div>
    </section>
  );
}

export { SearchResultNotFound };