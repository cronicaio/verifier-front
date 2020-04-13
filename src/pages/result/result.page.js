import React, { useState, useEffect } from 'react';
import Finto_logo from '../../assets/finto.png';
import Header from '../../components/v-header/Header';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import { SearchResult } from '../../components/search-result/search-result.component';
import { SearchResultNotFound } from '../../components/search-result/search-not-found.component';
import { NavLink } from "react-router-dom";
import { Api } from '../../services/api';



import './result.page.scss';


const Result = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const documentID = props.match.params.id;
  const logo = {
    color: "white",
    position:"absolute",
    bottom:"-60px",
    width:"100%",
textAlign:"center"
  };
  // console.log(documentID)

  useEffect(() => handleVerify(documentID), [documentID]);

  return (
    <section className="Page ResultPage">
      <Header></Header>
      <section>
        <div className="ResultBlock">
          {!!loaded && !!result && <SearchResult document={result} className="HomeBlock TempBlock" />}
          {!!loaded && !result && <SearchResultNotFound errorMessage={errorMessage} className="HomeBlock TempBlock" />}
        </div>
        {!loaded &&
        <div className="textCenter">
          <br /><br /><br />
          <FontAwesomeIcon icon={faSpinner} spin />
        </div>
        }
      </section>
      <div className="logo">
        <a href="https://finto.io" target="_blank">
        <img src={Finto_logo}  className="logoPic" alt="Finto" />
      </a>
      </div>
    </section>
  );

  function handleVerify(documentID) {
    if (!documentID)
      return;

    Api.post(`v1/document/`, { documentID })
      .then(response => {
        setResult({ ...response.data, documentLink: Api.BASE_URL + '/v1/pdf/' + response.data.uuid });
      })
      .catch(error => {
        // console.log( error.response)
        const errorMessage = error.response && error.response.data.message
          ? error.response.data.message
          : 'Unknown server error';
        setErrorMessage(errorMessage);
      }).finally(() => {
        setLoaded(true);
      });
  }
}

export { Result };