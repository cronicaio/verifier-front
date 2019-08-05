import React, { useState } from 'react';

import { Api } from '../../services/api';

import './verify-form.component.scss';

function VerifyForm({ onFetch, params }) {
  const initialID = params && (params.id !== undefined) ? params.id : Api.testID;

  const [isLoading, setLoading] = useState(false);
  const [documentID, setDocumentID] = useState(initialID); 

  return (
    <section className="VerifyForm">
      <input type="text" placeholder="Please enter your Document ID"
        value={documentID}
        onChange={event => setDocumentID(event.target.value)} />
      <button type="button" className="button" onClick={handleVerify} disabled={isLoading}>Verify</button>
    </section>
  );  

  function handleVerify() {
    if (!documentID)
      return;

    setLoading(true);

    Api.post(`v1/document/`, { documentID })
      .then(response => {
        setDocumentID('');
        onFetch({ ...response.data, documentLink: Api.BASE_URL + '/v1/pdf/' + response.data.uuid });
      })
      .catch(error => {
        error.response && error.response.data.message && alert(error.response.data.message);
        !error.response && alert('Unknown server error');
      })
      .finally(() => {
        setLoading(false);
      });
  }
}

export { VerifyForm };