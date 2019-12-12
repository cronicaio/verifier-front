import React from 'react';
import { withTranslation } from 'react-i18next';

import './cases.page.scss';

import ImgCase0 from '../../assets/cases/case1.svg';
import ImgCase1 from '../../assets/cases/case2.svg';
import ImgCase2 from '../../assets/cases/case3.svg';
import ImgCase3 from '../../assets/cases/case4.svg';
import ImgCase4 from '../../assets/cases/case5.svg';
import ImgCase5 from '../../assets/cases/case6.svg';
import ImgCase6 from '../../assets/cases/case7.svg';

function Cases({ t }) {
  return (
    <section className="Page CasesPage">
      <header className="PageHeader">
        <h1 className="textCenter">{t('Use Cases')}</h1>
      </header>

      <div className="CaseBlock">
        <div>
          <img src={ImgCase0} alt="" />
        </div>
        <div>
          <h5>{t('Identity')}</h5>
          <p>{t('Our identities are becoming more digitized')}</p>
        </div>
      </div>
      <div className="CaseBlock">
        <div>
          <h5>{t('Passports')}</h5>
          <p>{t('With Cronica, issue and reissue critical documents')}</p>
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
          <h5>{t('Applications')}</h5>
          <p>
            Any application issued to the Cronica platform may be immediately verified 
            using through a digital signifier. Applications uploaded to the Cronica 
            blockchain may also have additional conditions placed upon it by permissioned parties.
          </p>
        </div>
      </div>
      <div className="CaseBlock">
        <div>
          <h5>{t('SLA Documents')}</h5>
          <p>
            Cronica-integrated organizations can quickly upload SLA documents, 
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
          <h5>{t('Learning Certifications')}</h5>
          <p>{t('Verify learning certifications')}</p>
        </div>
      </div>
      <div className="CaseBlock">
        <div>
          <h5>{t('Health Records')}</h5>
          <p>{t('No document is more sensitive')}</p>
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
          <h5>{t('Digital Credentials')}</h5>
          <p>{t('No document is more sensitive than health records')}</p>
        </div>
      </div>
    </section>
  );
}

export default withTranslation()(Cases);