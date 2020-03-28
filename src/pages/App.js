import React, { useState, Suspense } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import { Header } from '../components/app-header/header.component';
import { Footer } from '../components/app-footer/footer.component';

import { Home } from './home/home.page';
import { Result } from './result/result.page';
import { Product } from './product/product.page';
import { Cases } from './cases/cases.page';
import { Contact } from './contact/contact.page';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

const notify = localStorage.getItem('notify');

function App() {
  const i18n = null;
  const [shouldShowNotify, hideNotify] = useState(!notify);

  const onCloseNotify = () => {
    localStorage.setItem('notify', '1');
    hideNotify(false);
  }

  return (
    <Suspense fallback="loading">
      <section className={'AppNotification ' + (shouldShowNotify ? 'active' : '')}>
        <div className="content">
          <div className="contentInner">
            <div className="exclamatione">
              <FontAwesomeIcon className="" icon={faExclamationTriangle} />
            </div>
            <div>
              {/* <div>
                Tasreeh will never ask you for personal or financial information.
                Make sure the web address in your browser is <b>{window.location.hostname}</b> and that you're using a secure connection.
              </div> */}
              <div className="rtl">
                لن تطلب منك Tasreeh أبداً أن تشارك معلوماتك الشخصية أو المالية. تأكد من أن موقع الويب في المتصفح هو <b>{window.location.hostname}</b> وأنك تستخدم إتصالاً آمناً.
              </div>
            </div>
          </div>
        </div>
        <div className="close" onClick={onCloseNotify}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </div>
      </section>
      <section className={'App ' + (i18n && i18n.dir(window.localStorage.i18nextLng || 'en'))}>
        <Router>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/searchByIdStructured/:id" component={Result} />
          <Route path="/searchByIdNonStructured/:id" component={Result} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/cases" component={Cases} />
          <Route exact path="/contact" component={Contact} />
          <Footer />
        </Router>
      </section>
    </Suspense>
  );
}

export default App;

