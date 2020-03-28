import React from 'react';

import './contact.page.scss';

import LocationImg from '../../assets/Location.png';


function Contact() {
  return (
    <section className="Page ContactPage">
      <header className="PageHeader">
        <h1 className="textCenter">Contact us</h1>
      </header>
      <section className="ContactBlock">
        <p>
          At Tasreeh, we believe authentication should be easy: far easier than
          it has been to-date. That’s why we’ve developed our solution to be flexibly integrated
          into existing infrastructure, as a standalone or supplementary solution, and easily tied
          into existing process.
        </p>
        <p>
          To discuss integrating Tasreeh into your solution – and introducing secure,
          instantly-verifiable document authentication to your clients or customers – fill out the form below.
        </p>
      </section>
      <section className="FormBlock">
        <div className="FormBlockForm">
          <h3>Send us a message</h3>
          <form>
            <p>
              <input type="text" placeholder="Name" />
            </p>
            <p>
              <input type="text" placeholder="Email" />
              <span>
                Please use a REAL email address so that we can get<br className="hiddenDesktop" />back to you.
              </span>
            </p>
            <p>
              <input type="text" placeholder="Subject title" />
            </p>
            <p>
              <textarea placeholder="Message"></textarea>
            </p>
            <p className="textCenter">
              <button className="button">SEND FORM</button>
            </p>
          </form>
        </div>
        <div className="FormBlockAddress">
          <h3>Address</h3>
          <div className="hiddenMobile Rectangle-12">
            <img width="406px" src={LocationImg} alt="" />
          </div>
          <p>

          </p>
        </div>
      </section>
    </section>
  );
}

export { Contact };