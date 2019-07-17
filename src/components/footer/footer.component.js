import React from 'react';

import './footer.component.scss';

import Home5 from '../../assets/svg/home5.svg';
import Social from '../../assets/social.png';

function Footer() {
  return (
    <footer className="AppFooter">
      <div className="Grid">
        <div className="Verified">
          <img src={Home5} alt="Verified" />
        </div>
        <div>
          <h5>PRODUCT</h5>
          <ul>
            <li>Why Cronica?</li>
            <li>Enterprise security</li>
            <li>How it works</li>
            <li>Pricing</li>
            <li>Cronica Demo</li>
          </ul>
        </div>
        <div>
          <h5>RESOURCES</h5>
          <ul>
            <li>Download Cronica</li>
            <li>Training & Tuts</li>
            <li>API</li>
            <li>Help Center</li>
            <li>Partners</li>
          </ul>
        </div>
        <div>
          <h5>CONTACT</h5>
          <ul>
            <li>About Cronica</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div></div>
      </div>
      <div className="Block Subscribe">
        <span>Subscribe to our newsletter</span>
        <div className="Email-opt-in">
          <input type="text" placeholder="Email address" />
          <button type="button" className="button">Send</button>
        </div>
        <img width="240px" src={Social} alt="" />
      </div>
      <div className="Block Copyright">
        <span>Terms of Use</span>
        <span>Privacy Policy</span>
        <span>Cookie Policy</span>
        <span>© Cronica 2019</span>
      </div>
    </footer>
  );
}

export { Footer };