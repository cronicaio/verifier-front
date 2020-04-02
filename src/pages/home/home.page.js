import React, { useState, useRef, useEffect } from 'react';

import { VerifyForm } from '../../components/verify-form/verify-form.component';

import './home.page.scss';

function Home({ match }) {
  const [result, setResult] = useState(null);
  const [executeScroll, scrollHtmlAttributes] = useScroll();

  useEffect(() => {
    counter();
  }, [])

  return (
    <section className="Page HomePage">
      <header className="PageHeader">
        <h1 className="textCenter" style={{color:"black"}}>
        تدقيق صحة التصاريح
        </h1>
        <h4 className="textCenter" style={{color:"grey"}}>
        التحقق الفوري من صحة التصريح
        </h4>
        <VerifyForm onFetch={onFetch} params={match.params} />

        <section className="flip-block textCenter">
          <h2>Now securely storing:</h2>
          <div class="flip-clock" id="flip"></div>
          <p>documents in blockchain</p>
        </section>
      </header>
    </section>
  );

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



function counter() {

  function CountdownTracker(label, value) {
    const el = document.createElement('span');

    el.className = 'flip-clock__piece';
    el.innerHTML = '<b class="flip-clock__card card"><b class="card__top"></b><b class="card__bottom"></b><b class="card__back"><b class="card__bottom"></b></b></b>' +
      '<span class="flip-clock__slot">' + label + '</span>';

    this.el = el;

    var top = el.querySelector('.card__top'),
      bottom = el.querySelector('.card__bottom'),
      back = el.querySelector('.card__back'),
      backBottom = el.querySelector('.card__back .card__bottom');

    this.update = function (val) {
      if (val !== this.currentValue) {
        if (this.currentValue >= 0) {
          back.setAttribute('data-value', this.currentValue);
          bottom.setAttribute('data-value', this.currentValue);
        }
        this.currentValue = val;
        top.innerText = this.currentValue;
        backBottom.setAttribute('data-value', this.currentValue);

        this.el.classList.remove('flip');
        void this.el.offsetWidth;
        this.el.classList.add('flip');
      }
    }

    this.update(value);

  }

  function initFlip(count) {
    const el = document.getElementById('flip');
    const arr = count.split('');

    const trackers = arr.map((v, key) => new CountdownTracker(key, v));
    trackers.forEach(tracker => el.appendChild(tracker.el));

    function updateFlip(value) {
      const newarr = value.split('');

      if (newarr.length !== trackers.length) {
        const newtracker = new CountdownTracker(trackers.length - 1, newarr[newarr.length - 1])
        trackers.push(newtracker);
        el.appendChild(newtracker.el)
      }

      count = value;
      const arr = count.split('');

      trackers.forEach((tracker, i) => tracker.update(arr[i]))
    }

    setInterval(() => {
      getCount().then(r => updateFlip(r));
    }, 4000);
  }

  getCount().then(r => initFlip(r));

  function getCount() {
    return fetch('https://api-issuer.b1.cronica.cloud/v1/documents/')
      .then(response => response.json())
      .then(data => data.count + '')
      .catch(console.log)
  }
}