import React from 'react';
import PDFViewer from 'mgr-pdf-viewer-react';

import Img_verified from '../../assets/svg/verified.svg';

import './search-result.component.scss';

function SearchResult({ document }) {
  return (
    <section>
      <section className="SearchResult">
        <img src={Img_verified} className="SearchResultImg" alt="verified"/>
        <h2 className="textCenter">Document Verified</h2>

        {document.documentLink && (
          <div className="ResultDownload">
            <div className="textCenter">
              <a href={document.documentLink} className="button" target="_blank" rel="noopener noreferrer" download >↓ Download Document</a>
            </div>
          </div>
        )}

        <div className="ResultGrid">
          <div className="params__field">
            <div className="params__key"> Issuer: </div>
            <div className="params__value"> {document.issuerName} </div>
          </div>
          <div className="params__field">
            <div className="params__key"> Signature owner: </div>
            <div className="params__value"> {document.organization} </div>
          </div>
          <div className="params__field">
            <div className="params__key"> Document Holder: </div>
            <div className="params__value"> {document.recipientName} </div>
          </div>
          <div className="params__field">
            <div className="params__key"> Issue Date: </div>
            <div className="params__value"> {formatDate(document.issueTimestamp)} </div>
          </div>
          <div className="params__field">
            <div className="params__key"> Expiry Date: </div>
            <div className="params__value"> {document.expireTimestamp ? formatDate(document.expireTimestamp) : 'N/A'} </div>
          </div>
          {(!!document.isRevoked) && (
            <div className="params__field">
              <div className="params__key"> Status: </div>
              <div className="params__value red"> Revoked </div>
            </div>
          )}
          {(!!document.verified) && (
            <div className="params__field">
              <div className="params__key"> Signature: </div>
              <div className="params__value green"> Verified </div>
            </div>
          )}
          {(!document.verified) && (
            <div className="params__field">
              <div className="params__key"> Signature: </div>
              <div className="params__value red"> Not Verified </div>
            </div>
          )}
          {!!document.expireTimestamp && !document.isRevoked && (document.expireTimestamp <= Date.now()) && (
            <div className="params__field">
              <div className="params__key"> Status: </div>
              <div className="params__value red"> Expired </div>
            </div>
          )}
          <div className="params__field">
            <div className="params__key"> Document ID: </div>
            <div className="params__value params__value_alt"> {document.documentId} </div>
          </div>
        </div>
      </section>
      {
        document.documentLink && (
          <div className="ResultDownload">
            <PDFViewer document={{ url: document.documentLink }} scale={1.5} />
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