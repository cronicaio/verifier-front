import React from 'react';
import PDFViewer from 'mgr-pdf-viewer-react';

import Img_verified from '../../assets/svg/verified.svg';
import Img_revoked from '../../assets/svg/revoked.svg';

import './search-result.component.scss';

function SearchResult({ document }) {
  return (
    <section>
      <section className="SearchResult">
        {(!!document.isRevoked) && (
          <img src={Img_revoked} className="SearchResultImg" alt="revoked" />
        )}
        {(!!document.isRevoked) && (
          <h2 className="textCenter">Document Revoked</h2>
        )}
        {(!document.isRevoked) && (
          <img src={Img_verified} className="SearchResultImg" alt="verified" />
        )}
        {(!document.isRevoked) && (
          <h2 className="textCenter" >تم التحقق من صحة التصريح</h2>
        )}
        {document.documentLink && !document.isRevoked && (
          <div className="ResultDownload">
            <div className="textCenter">
              <a href={document.documentLink} className="button" style={{background:"#CC0000"}} target="_blank" rel="noopener noreferrer" download >تحميل التصريح</a>
            </div>
          </div>
        )}
      </section>
      {
        !document.isRevoked && document.documentLink && (
          <div className="ResultDownload">
            <PDFViewer document={{ url: document.documentLink }} scale={1.5} />
            <div className="textCenter">
              <br/>
              <a href={document.documentLink} className="button" style={{background:"#CC0000"}} target="_blank" rel="noopener noreferrer" download >تحميل التصريح</a>
            </div>
          </div>
          
        )
      }
    </section >
  );

  function formatDate(timestamp) {
    return new Date(timestamp).toLocaleDateString();
  }
}

export { SearchResult };