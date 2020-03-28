import React from 'react';

import './cases.page.scss';

import ImgCase0 from '../../assets/cases/case1.svg';
import ImgCase1 from '../../assets/cases/case2.svg';
import ImgCase2 from '../../assets/cases/case3.svg';
import ImgCase3 from '../../assets/cases/case4.svg';
import ImgCase4 from '../../assets/cases/case5.svg';
import ImgCase5 from '../../assets/cases/case6.svg';
import ImgCase6 from '../../assets/cases/case7.svg';

function Cases() {
  return (
    <section className="Page CasesPage">
      <header className="PageHeader">
        <h1 className="textCenter">Use Cases</h1>
      </header>

      <div className="CaseBlock">
        <div>
          <img src={ImgCase0} alt="" />
        </div>
        <div>
          <h5>Identity</h5>
          <p>
            Our identities are becoming more digitized. Tasreeh helps end-users take control of
            their identity documents with secure, real-time authentication.
          </p>
        </div>
      </div>
      <div className="CaseBlock">
        <div>
          <h5>Passports</h5>
          <p>
            With Tasreeh, issue and reissue critical documents – such as passports –
            with significantly less time and resource cost. Only document data
            necessary for authentication is cryptographically stored on the blockchain.
          </p>
        </div>
        <div>
          <img src={ImgCase1} alt="" />
        </div>
      </div>
      <div className="CaseBlock">
        <div>
          <img src={ImgCase2} alt="" />
        </div>
        <div>
          <h5>Applications </h5>
          <p>
            Any application issued to the Tasreeh platform may be immediately verified 
            using through a digital signifier. Applications uploaded to the Tasreeh 
            blockchain may also have additional conditions placed upon it by permissioned parties.
          </p>
        </div>
      </div>
      <div className="CaseBlock">
        <div>
          <h5>SLA Documents </h5>
          <p>
            Tasreeh-integrated organizations can quickly upload SLA documents, 
            store them on the blockchain, and allow permissioned parties to reprogram them. 
            SLA agreements can then be retrieved, verified, and reformed by those with the 
            requisite signifiers and PDF template.
          </p>
        </div>
        <div>
          <img src={ImgCase3} alt="" />
        </div>
      </div>
      <div className="CaseBlock">
        <div>
          <img src={ImgCase4} alt="" />
        </div>
        <div>
          <h5>Learning Certifications</h5>
          <p>
            Verify learning certifications, such as degrees and diplomas, from anywhere in the world.
            Tasreeh gives critical certifications international, instantaneous verifiability without
            exposing names or other sensitive information.
          </p>
        </div>
      </div>
      <div className="CaseBlock">
        <div>
          <h5>Health Records</h5>
          <p>
            No document is more sensitive than health records. Tasreeh stores the data necessary 
            for verification in machine-readable form. Verification can be achieved without 
            disclosing sensitive data, and data only becomes human-readable once it is 
            reformed with a locally-stored PDF template.
          </p>
        </div>
        <div>
          <img src={ImgCase5} alt="" />
        </div>
      </div>
      <div className="CaseBlock">
        <div>
          <img src={ImgCase6} alt="" />
        </div>
        <div>
          <h5>Digital Credentials</h5>
          <p>
            No document is more sensitive than health records.
            Tasreeh stores the data necessary for verification in machine-readable form.
          </p>
        </div>
      </div>
    </section>
  );
}

export { Cases };