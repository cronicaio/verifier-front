import React, { useState } from 'react';

import { Api } from '../../services/api';

import './verify-form.component.scss';

function VerifyForm(props) {

  const initialID = props.params && (props.params.id !== undefined) ? props.params.id : Api.testID;
  const [documentID, setDocumentID] = useState(initialID); 

  return (
    <section className="VerifyForm">
      <input type="text" placeholder="Please enter your Document ID"
        value={documentID}
        onChange={event => setDocumentID(event.target.value)}
        style={{background:"#CC0000",color:"white"}} />
      <button type="button" className="button" onClick={handleVerify} style={{color:"red",background:"white"}}>Verify</button>
    </section>
  );  

  function handleVerify() {
    if (!documentID)
      return;

    window.location.hash = '#/searchByIdStructured/' + documentID;
  }
}



export { VerifyForm };