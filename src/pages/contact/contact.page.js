import React from 'react';

import './contact.page.scss';

function Contact() {
  return (
    <section className="Page ContactPage">
      <header className="PageHeader">
        <h1 className="text-center">Contact us</h1>
      </header>
      <section className="ContactBlock">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
        like Aldus PageMaker including versions of Lorem Ipsum
      </section>
      <section className="FormBlock">
        <div>
          Form
        </div>
        <div>
          Address
        </div>
      </section>
    </section>
  );
}

export { Contact };