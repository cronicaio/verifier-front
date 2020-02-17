import React, { useState, useRef } from 'react';

import { VerifyForm } from '../../components/verify-form/verify-form.component';
import { SearchResult } from '../../components/search-result/search-result.component';

import { Api } from '../../services/api';


import Img_01 from '../../assets/icons/Verify/Phone@2x.png';
import Img_28 from '../../assets/Image_28@3x.png';

import ImgFeatures1 from '../../assets/icons/Verify/Quorum-Blockchain.svg';
import ImgFeatures2 from '../../assets/icons/Verify/Programable-Documents.svg';
import ImgFeatures3 from '../../assets/icons/Verify/Smart-Contract.svg';
import ImgFeatures4 from '../../assets/icons/Verify/Security.svg';
import ImgFeatures5 from '../../assets/icons/Verify/Privacy.svg';
import ImgFeatures6 from '../../assets/icons/Verify/API.svg';


import './home.page.scss';

function Home({ match }) {
  const [result, setResult] = useState(null);
  const [executeScroll, scrollHtmlAttributes] = useScroll();

  return (
    <section className="Page HomePage">
      <header className="PageHeader">
        <h1 className="textCenter">
          Document Verification
        </h1>
        <h4 className="textCenter">
          Instant document verification
        </h4>
        <VerifyForm onFetch={onFetch} params={match.params} />
        <div className="Or-choose-Document textCenter">
          Or choose <span className="link" onClick={onButtonLoadClick}>Document Certificate JSON</span> file
          <input type="file" id="input-file" accept=".json" onChange={onFileUpload} />
        </div>
        <div className="PageHeaderArrow"></div>
      </header>

      <section  {...scrollHtmlAttributes}>
        {!!result && <SearchResult document={result} className="HomeBlock TempBlock" />}
      </section>

      <section className="HomeBlock Features textCenter">
        <h2>Platform Features</h2>
        <div className="Grid">
          <div>
            <div className="FeaturesImgWrapper">
              <img src={ImgFeatures1} alt="Quorum Blockchain" />
            </div>
            <h5>Quorum Blockchain</h5>
          </div>
          <div>
            <div className="FeaturesImgWrapper">
              <img src={ImgFeatures2} alt="Programable Documents" />
            </div>
            <h5>Programable Documents</h5>
          </div>
          <div>
            <div className="FeaturesImgWrapper">
              <img src={ImgFeatures3} alt="Smart Contract" />
            </div>
            <h5>Smart Contract</h5>
          </div>
          <div>
            <div className="FeaturesImgWrapper">
              <img src={ImgFeatures4} alt="Security" />
            </div>
            <h5>Security</h5>
          </div>
          <div>
            <div className="FeaturesImgWrapper">
              <img src={ImgFeatures5} alt="Privacy" />
            </div>
            <h5>Privacy</h5>
          </div>
          <div>
            <div className="FeaturesImgWrapper">
              <img src={ImgFeatures6} alt="API" />
            </div>
            <h5>API</h5>
          </div>
        </div>
      </section>

      <section className="HomeBlock TempBlock textCenter">
        <div className="Flex">
          <div >
            <img src={Img_01} alt="" />
          </div>
          <div>
            <h3>The First Step</h3>
            <p style={{textAlign: "left"}}>
              The system will is an open standard for creating, issuing,
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

      <section className="HomeBlock TempBlock textCenter hiddenMobile">
        <img src={Img_28} alt="" />
      </section>

    </section>
  );

  function onButtonLoadClick() {
    document.getElementById('input-file').click();
  }

  function onFileUpload(evt) {
    const reader = new FileReader();

    reader.onload = () => {
      try {
        const json = JSON.parse(reader.result);
        Api.post('v1/document/search-by-json', { ...json })
          .then((response) => { 
            window.location.hash = '#/searchByIdStructured/' + response.data.documentId;
          })
          .catch(console.log);
      } catch (error) {
        alert('exeption when trying to parse json = ' + error);
      }
    }

    reader.readAsText(evt.target.files[0]);
  }

  function onFetch(document) {
    setResult(document);
    executeScroll();
  }

  function useScroll() {
    const ref = useRef(null);
    const htmlElementAttributes = { ref };
    const executeScroll = () => { window.scrollTo(0, ref.current.offsetTop); }

    return [executeScroll, htmlElementAttributes];
  }
}

export { Home };