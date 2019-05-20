import React, { Component } from 'react';
import { format } from 'date-fns';
import PDFViewer from 'mgr-pdf-viewer-react';
import './Verify.scss';

class Verify extends Component {

    static defaultProps = {
        isBackButton: true,
    }


    render() {
        const { onBackClick, document, isBackButton } = this.props;
        const { documentId, recipientName, issuerName, issueTimestamp, expireTimestamp, documentLink, isRevoked } = document;

        return (<div className="verify" >
            <header className="verify__header" >
                <svg className="verify__header-icon" xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" >
                    <g fill="none" fillRule="evenodd" >
                        <path fill="#52A1FF" fillRule="nonzero" d="M18 0v4C10.268 4 4 10.268 4 18s6.268 14 14 14c3.866 0 7.366-1.567 9.9-4.1l2.828 2.828A17.944 17.944 0 0 1 18 36C8.059 36 0 27.941 0 18S8.059 0 18 0z" />
                        <path stroke="#76D6FF" strokeWidth="4" d="M34.956 5.485l-16.97 16.97L9.5 13.972" />
                    </g>
                </svg>
                <h1 className="verify__header-title"> Document Verified </h1>
            </header>
            <div className="verify__content" >
                <div className="verify__info" >
                    <div className="params" >
                        <div className="params__field" >
                            <div className="params__key" > Issuer: </div>
                            <div className="params__value" > {issuerName} </div>
                        </div>
                        <div className="params__field" >
                            <div className="params__key" > Document Holder: </div>
                            <div className="params__value" > {recipientName} </div>
                        </div>
                        <div className="params__field" >
                            <div className="params__key" > Issue Date: </div>
                            <div className="params__value" > {format(new Date(issueTimestamp), 'DD/MM/YYYY')} </div>
                        </div>
                        <div className="params__field" >
                            <div className="params__key" > Expiry Date: </div>
                            <div className="params__value" > {expireTimestamp ? format(new Date(expireTimestamp), 'DD/MM/YYYY') : 'N/A'} </div>
                        </div>
                        {(!!isRevoked) && (
                        <div className="params__field" >
                            <div className="params__key" > Status: </div>
                            <div className="params__value red" > Revoked </div>
                        </div>
                        )}
                        {!!expireTimestamp && !isRevoked && (expireTimestamp <= Date.now()) && (
                        <div className="params__field" >
                            <div className="params__key" > Status: </div>
                            <div className="params__value red" > Expired </div>
                        </div>
                        )}
                        <div className="params__field" >
                            <div className="params__key" > Document ID: </div>
                            <div className="params__value params__value_alt" > {documentId} </div>
                        </div>
                    </div>
                    { /*<button className="button button_alt">↓ Download Document</button>*/}
                </div>
                {documentLink && (
                    <a href={documentLink} className="button button_alt" target="_blank" download >
                        ↓ Download Document
                    </a>
                )}
            </div>
            {
                /*documentLink && <div className="verify__doc-view doc-view">
                <object className="doc-view__object" data={documentLink} type="application/pdf">
                <embed src={documentLink} type="application/pdf" />
                </object>
                </div>*/
            }

            {documentLink && < div className="verify__pdf-wrapper" >
                <div className="verify__pdf" >
                    <PDFViewer document={
                        { url: documentLink }}
                        scale={this.getScale(window.innerWidth)}
                    />
                </div>
            </div>}
            {isBackButton && <button className="button button_alt-second" onClick={onBackClick} > ←Verify Another Document </button>}
        </div>
        );
    }

    getScale = (innerWidth) => {
        if (innerWidth > 1200) {
            return 1.5;
        } else if (innerWidth > 640) {
            return 1
        } else if (innerWidth > 520) {
            return 0.8
        } else if (innerWidth > 400) {
            return 0.6
        } else if (innerWidth > 350) {
            return 0.5
        } else return 0.4;
    }
}

export default Verify;