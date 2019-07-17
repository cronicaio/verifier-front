import React from 'react';

import { HashRouter as Router, Route } from "react-router-dom";

import { Header } from '../components/header/header.component';
import { Footer } from '../components/footer/footer.component';

import { Home } from './home/home.page';
import { Product } from './product/product.page';
import { Cases } from './cases/cases.page';
import { Contact } from './contact/contact.page';

function App() {
  return (
    <section className="App">
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/cases" component={Cases} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </Router>
    </section>
  );
}

export default App;

