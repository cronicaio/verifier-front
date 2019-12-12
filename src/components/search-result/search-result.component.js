import React from 'react';
import PDFViewer from 'mgr-pdf-viewer-react';

import { withTranslation } from 'react-i18next';

import Img_verified from '../../assets/svg/verified.svg';
import Img_revoked from '../../assets/svg/revoked.svg';

import './search-result.component.scss';

function SearchResult({ document, t }) {
  return (
    <section>
      <section className="SearchResult">
        {(!!document.isRevoked) && (
          <img src={Img_revoked} className="SearchResultImg" alt="revoked" />
        )}
        {(!!document.isRevoked) && (
          <h2 className="textCenter">{t('Document Revoked')}</h2>
        )}
        {(!document.isRevoked) && (
          <img src={Img_verified} className="SearchResultImg" alt="verified" />
        )}
        {(!document.isRevoked) && (
          <h2 className="textCenter">{t('Document Verified')}</h2>
        )}
        {document.documentLink && !document.isRevoked && (
          <div className="ResultDownload">
            <div className="textCenter">
              <a href={document.documentLink} className="button" target="_blank" rel="noopener noreferrer" download >↓ {t('Download Document')}</a>
            </div>
          </div>
        )}

        <div className="ResultGrid">
          <div className="params__field">
            <div className="params__key"> {t('Issuer')}: </div>
            <div className="params__value"> {document.issuerName} </div>
          </div>
          <div className="params__field">
            <div className="params__key"> {t('Signature owner')}: </div>
            <div className="params__value"> {document.organization} </div>
          </div>
          <div className="params__field">
            <div className="params__key"> {t('Document Holder')}: </div>
            <div className="params__value"> {document.recipientName} </div>
          </div>
          <div className="params__field">
            <div className="params__key"> {t('Issue Date')}: </div>
            <div className="params__value"> {formatDate(document.issueTimestamp)} </div>
          </div>
          <div className="params__field">
            <div className="params__key"> {t('Expiry Date')}: </div>
            <div className="params__value"> {document.expireTimestamp ? formatDate(document.expireTimestamp) : 'N/A'} </div>
          </div>
          {(!!document.isRevoked) && (
            <div className="params__field">
              <div className="params__key"> {t('Status')}: </div>
              <div className="params__value red"> {t('Revoked')} </div>
            </div>
          )}
          {(!!document.verified) && (
            <div className="params__field">
              <div className="params__key"> {t('Signature')}: </div>
              <div className="params__value green"> {t('Verified')} </div>
            </div>
          )}
          {(!document.verified) && (
            <div className="params__field">
              <div className="params__key"> {t('Signature')}: </div>
              <div className="params__value red"> {t('Not Verified')} </div>
            </div>
          )}
          {!!document.expireTimestamp && !document.isRevoked && (document.expireTimestamp <= Date.now()) && (
            <div className="params__field">
              <div className="params__key"> {t('Status')}: </div>
              <div className="params__value red"> {t('Expired')} </div>
            </div>
          )}
          <div className="params__field">
            <div className="params__key"> {t('Document ID')}: </div>
            <div className="params__value params__value_alt"> {document.documentId} </div>
          </div>
        </div>
      </section>
      {
        !document.isRevoked && document.documentLink && (
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

export default withTranslation()(SearchResult);