import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";

import PDFViewer from 'mgr-pdf-viewer-react';

import { Api } from '../../services/api';

import Img_01 from '../../assets/Image_01@2x.png';
import Img_02 from '../../assets/Image_02@2x.png';
import Img_28 from '../../assets/Image_28@3x.png';


import './home.page.scss';

function Home() {

  const useScroll = () => {
    const ref = useRef(null);
    const executeScroll = () => { window.scrollTo(0, ref.current.offsetTop); }
    const htmlElementAttributes = { ref };

    return [executeScroll, htmlElementAttributes];
  }

  const [isLoading, setLoading] = useState(false);
  const [documentID, setDocumentID] = useState(''); // 0x24d9cb3d855fa04b047e56c8398ef3c4c48321bf02848dedb7e1f7fb6359284936eecaa211cef53d
  const [result, setResult] = useState(null);
  const [executeScroll, scrollHtmlAttributes] = useScroll();

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString();
  }

  const handleVerify = () => {
    setLoading(true);

    Api.post(`v1/document/`, { documentID })
      .then(response => {
        setResult({ ...response.data, documentLink: Api.BASE_URL + '/v1/pdf/' + response.data.uuid});
        setDocumentID('');
        executeScroll();
      })
      .catch(error => {
        console.log(error.response);
        error.response && error.response.data.message && alert(error.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <section className="Page">
      <header className="PageHeader">
        <h1 className="text-center">
          Document Verification
        </h1>
        <h4 className="text-center">
          Instant document verification
        </h4>
        <div className="Email-opt-in">
          <input type="text" placeholder="Please enter your Document ID" 
                 value={documentID} 
                 onChange={event => setDocumentID(event.target.value)} />
          <button type="button" className="button" onClick={handleVerify} disabled={isLoading}>Verify</button>
        </div>
        <div className="Or-choose-Document">
          Or choose <Link to="/">Document Certificate JSON</Link> file
        </div>
      </header>

      <section {...scrollHtmlAttributes}>
        {!!result && (
          <div className="HomeBlock TempBlock" >
            <h2 className="text-center">Document Verified</h2>
            <div className="ResultGrid">
              <div className="params__field" >
                <div className="params__key" > Issuer: </div>
                <div className="params__value" > {result.issuerName} </div>
              </div>
              <div className="params__field" >
                <div className="params__key" > Document Holder: </div>
                <div className="params__value" > {result.recipientName} </div>
              </div>
              <div className="params__field" >
                <div className="params__key" > Issue Date: </div>
                <div className="params__value" > {formatDate(result.issueTimestamp)} </div>
              </div>
              <div className="params__field" >
                <div className="params__key" > Expiry Date: </div>
                <div className="params__value" > {result.expireTimestamp ? formatDate(result.expireTimestamp) : 'N/A'} </div>
              </div>
              {(!!result.isRevoked) && (
                <div className="params__field" >
                  <div className="params__key" > Status: </div>
                  <div className="params__value red" > Revoked </div>
                </div>
              )}
              {!!result.expireTimestamp && !result.isRevoked && (result.expireTimestamp <= Date.now()) && (
                <div className="params__field" >
                  <div className="params__key" > Status: </div>
                  <div className="params__value red" > Expired </div>
                </div>
              )}
              <div className="params__field" >
                <div className="params__key" > Document ID: </div>
                <div className="params__value params__value_alt" > {result.documentId} </div>
              </div>
            </div>
          
            {result.documentLink && (
              <div className="ResultDownload">
                <p className="text-center">
                  <a href={result.documentLink} className="button" target="_blank" download >↓ Download Document</a>
                </p>
                <PDFViewer document={{ url: result.documentLink }}  scale={1.5} />
              </div>
            )}

          </div>
        )}
      </section>



      <section className="HomeBlock Features text-center">
        <h2>Platform Features</h2>
        <img src={Img_02} alt="" width="100%" />
      </section>

      <section className="HomeBlock TempBlock text-center">
        <div className="Flex">
          <div >
            <img src={Img_01} alt="" />
          </div>
          <div>
            <h3>The First Step</h3>
            <p>
              The system will be an open standard for creating, issuing,
              viewing, and verifying blockchain - based programmable documents.
              These digital records are registered on a private blockchain, cryptographically
              signed, tamper - proof, and shareable
            </p>
            <p>&nbsp;</p>
            <p>
              <button className="button">Discover more</button>
            </p>
          </div>
        </div>
      </section>

      <section className="HomeBlock TempBlock text-center">
        <img src={Img_28} alt="" />
      </section>

    </section>
  );
}

export { Home };