import React from 'react';

import './product.page.scss';

import Product1 from '../../assets/product1.png';
import Product2 from '../../assets/product2.png';


function Product() {
  return (
    <section className="Page ProductPage">
      <header className="PageHeader">
        <h1 className="textCenter">
          Don't compromise for Security,
          <br />
          or Security For Convenience.
        </h1>
        <h4 className="textCenter">
          With Cronica, You Don't Have To.
        </h4>
      </header>
      <section className="HomeBlock textCenter">
        <p>
          <button type="button" className="button">START TODAY</button>
        </p>
        <h2>Why Cronica?</h2>
        <p>
          Our lives and identities are coordinated digitally, online.
          We need a document authentication solution that is as easy as a website,
          but as secure as a physical vault.
        </p>
        <p>
          <img width="100%" src={Product1} alt="" />
        </p>
        <p>
          Cronica is the first document authentication solution to use blockchain technology.
          By separating document data from document representation, Cronica makes it
          possible to issue and verify critical documents without requiring human
          intermediaries to read sensitive data or handle physical documents.
        </p>
        <p>
          Only the document required for authentication is stored – securely,
          in machine-readable form – on the blockchain.
        </p>
        <h4>
          A Platform That Protects Document Data,
          <br />
          And Makes Authentication Simple
        </h4>
        <p>
          <img width="100%" src={Product2} alt="" />
        </p>
        <p>
          <button type="button" className="button">DOWNLOAD OUR PRESENTATION</button>
        </p>
      </section>

    </section>
  );
}

export { Product };