import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';

import Header from '../../components/v-header/Header';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import SearchResult from '../../components/search-result/search-result.component';
import SearchResultNotFound from '../../components/search-result/search-not-found.component';

import { Api } from '../../services/api';



import './result.page.scss';


const Result = (props) => {
  const { t } = props;
  const [loaded, setLoaded] = useState(false);
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const documentID = props.match.params.id;

  const errorMessageT = t('Unknown server error');

  useEffect(() => {
    function handleVerify(documentID) {
      if (!documentID)
        return;

      Api.post(`v1/document/`, { documentID })
        .then(response => {
          setResult({ ...response.data, documentLink: Api.BASE_URL + '/v1/pdf/' + response.data.uuid });
        })
        .catch(error => {
          const errorMessage = error.response && error.response.data.message
            ? error.response.data.message
            : errorMessageT;
          setErrorMessage(errorMessage);
        }).finally(() => {
          setLoaded(true);
        });
    }

    handleVerify(documentID)
  }, [documentID, errorMessageT]);

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
    </section>
  );

  
}

export default withTranslation()(Result);