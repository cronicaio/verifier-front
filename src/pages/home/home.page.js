import React, { useState, useRef} from 'react';
import { NavLink } from "react-router-dom";
import { VerifyForm } from '../../components/verify-form/verify-form.component';
import Finto_logo from '../../assets/finto.png';
import './home.page.scss';

function Home({ match }) {
  const [result, setResult] = useState(null);
  const [executeScroll, scrollHtmlAttributes] = useScroll();
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
        <div className="logo">
        <a href="https://finto.io" target="_blank">
        <img src={Finto_logo}  className="logoPic" alt="Finto" />
      </a>
      </div>
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
