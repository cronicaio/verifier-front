import React, { useState, useEffect } from 'react';

import Header from '../../components/v-header/Header';
import { SearchResult } from '../../components/search-result/search-result.component';

import { Api } from '../../services/api';


import './result.page.scss';


const Result = (props) => {
  const [result, setResult] = useState(null);
  const documentID = props.match.params.id;

  // console.log(documentID)

  useEffect(() => handleVerify(documentID), [documentID]);

  return (
    <section className="Page ResultPage">
      <Header></Header>
      <section>
        <div className="ResultBlock">
          {!!result && <SearchResult document={result} className="HomeBlock TempBlock" />}
          {!result && <div></div>}
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
        error.response && error.response.data.message && alert(error.response.data.message);
        !error.response && alert('Unknown server error');
      });
  }
}

export { Result };