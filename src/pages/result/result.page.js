import React, { useState, useEffect } from 'react';

import Header from '../../components/v-header/Header';
import { SearchResult } from '../../components/search-result/search-result.component';
import { SearchResultNotFound } from '../../components/search-result/search-not-found.component';

import { Api } from '../../services/api';



import './result.page.scss';


const Result = (props) => {
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const documentID = props.match.params.id;

  // console.log(documentID)

  useEffect(() => handleVerify(documentID), [documentID]);

  return (
    <section className="Page ResultPage">
      <Header></Header>
      <section>
        <div className="ResultBlock">
          {!!result && <SearchResult document={result} className="HomeBlock TempBlock" />}
          {!result && <SearchResultNotFound errorMessage={errorMessage} className="HomeBlock TempBlock" />}
        </div>
      </section>
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
        console.log( error.response)
        const errorMessage = error.response && error.response.data.message
          ? error.response.data.message
          : 'Unknown server error';
        setErrorMessage(errorMessage);
      });
  }
}

export { Result };