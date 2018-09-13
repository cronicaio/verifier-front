import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import Verify from '../../components/Verify';
import cn from 'classnames';
import { Api } from '../../api';
import './Landing.scss';

class Landing extends Component {
    state = {
        documents: null,
        documentId: '',
        error: '',
        isLoading: false,
        isMobileMenu: false,
        translateX: -100,
    }

    render() {
            const { documents, documentId, error, isLoading, translateX } = this.state;

            return ( <
                    div className = "land" >
                    <
                    div className = "land__welcome" >
                    <
                    header className = "land__header" >
                    <
                    svg onClick = { this.openMobileMenu }
                    className = "land__burger-menu"
                    xmlns = "http://www.w3.org/2000/svg"
                    width = "20"
                    height = "14"
                    viewBox = "0 0 20 14" >
                    <
                    path fill = "#FFF"
                    fillRule = "evenodd"
                    d = "M1 6h18a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2zm0-6h18a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2zm0 12h18a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2z" / >
                    <
                    /svg> <
                    svg className = "land__logo"
                    xmlns = "http://www.w3.org/2000/svg"
                    width = "148"
                    height = "36"
                    viewBox = "0 0 148 36" >
                    <
                    g fill = "none"
                    fillRule = "evenodd" >
                    <
                    text fill = "#FFF"
                    fontFamily = "MuseoSansCyrl"
                    fontSize = "28"
                    fontWeight = "700"
                    letterSpacing = ".133"
                    transform = "translate(0 -3)" >
                    <
                    tspan x = "50"
                    y = "29" > cronica < /tspan> <
                    /text> <
                    path fill = "#FFF"
                    fillRule = "nonzero"
                    d = "M18 0v4C10.268 4 4 10.268 4 18s6.268 14 14 14c3.866 0 7.366-1.567 9.9-4.1l2.828 2.828A17.944 17.944 0 0 1 18 36C8.059 36 0 27.941 0 18S8.059 0 18 0z" / >
                    <
                    path stroke = "#FFF"
                    strokeWidth = "4"
                    d = "M34.956 5.485l-16.97 16.97L9.5 13.972" / >
                    <
                    /g> <
                    /svg> <
                    svg className = "land__logo-mobile"
                    xmlns = "http://www.w3.org/2000/svg"
                    width = "23"
                    height = "23" >
                    <
                    g fill = "none"
                    fillRule = "evenodd" >
                    <
                    path fill = "#52A1FF"
                    fillRule = "nonzero"
                    d = "M11.077.846v2.462a8.615 8.615 0 1 0 6.092 14.707l1.74 1.74A11.042 11.042 0 0 1 11.077 23C4.959 23 0 18.04 0 11.923 0 5.805 4.96.846 11.077.846z" / >
                    <
                    path stroke = "#76D6FF"
                    strokeWidth = "3.077"
                    d = "M21.511 4.222L11.068 14.665 5.846 9.443" / >
                    <
                    /g> <
                    /svg> <
                    div className = "land__header-aside" >
                    <
                    nav className = "land__nav" >
                    <
                    li className = "land__nav-item" >
                    <
                    a className = "land__nav-link land__nav-link_active"
                    href = "#" > home < /a> <
                    /li> <
                    li className = "land__nav-item" >
                    <
                    a className = "land__nav-link"
                    href = "#" > project < /a> <
                    /li> <
                    li className = "land__nav-item" >
                    <
                    a className = "land__nav-link"
                    href = "https://docs.cronica.io/"
                    target = "_blank" > developers < /a> <
                    /li> <
                    li className = "land__nav-item" >
                    <
                    a className = "land__nav-link"
                    href = "#" > contacts < /a> <
                    /li> <
                    /nav> <
                    /div> <
                    /header> {
                        !!documents && typeof documents === 'object' && documents.constructor === Array && documents.map((document, i) => ( <
                            Verify key = { i }
                            document = { document }
                            onBackClick = { this.handlBackClick }
                            />
                        ))
                    } {
                        !!documents && typeof documents === 'object' && documents.constructor !== Array && ( <
                            Verify document = { documents }
                            onBackClick = { this.handlBackClick }
                            />
                        )
                    } {
                        !documents && < Fragment >
                            <
                            div className = "land__verify" >
                            <
                            h2 className = "land__verify-title" > Document Verification < /h2> <
                            form onSubmit = { this.onSubmit }
                        className = "land__verify-form" >
                            <
                            label className = "land__verify-label" >
                            Instant document verification <
                            /label> <
                            input
                        className = "land__verify-input input"
                        placeholder = "Please enter your Document ID"
                        type = "text"
                        onChange = { this.onDocumentIdChange }
                        value = { documentId }
                        /> <
                        div className = "land__verify-footer" >
                            <
                            div className = "land__verify-text" >
                            <
                            span > Or choose < /span> <
                            button
                        className = "land__verify-file-upload linkButton"
                        type = "button"
                        onClick = { this.onButtonLoadClick } >
                            Document Certificate JSON <
                            /button> <
                            input className = "land__verify-file-input"
                        id = "input-file"
                        onChange = { this.onFileUpload }
                        type = "file" / >
                            <
                            span > file < /span> <
                            /div> <
                            button className = "land__verify-submit button"
                        type = "submit"
                        disabled = { isLoading } > { isLoading && < i className = "fa fa-spinner fa-spin" / > } {!isLoading && 'Verify' } <
                            /button> <
                            /div> {
                                error && < div className = "land__verify-error" > { error } < /div>} <
                                    /form> <
                                    /div> <
                                    div className = "land__arrow-scroll" / >
                                    <
                                    /Fragment>} <
                                    /div> {
                                        !documents && < Fragment >
                                            <
                                            div className = "land__features" >
                                            <
                                            h2 className = "land__features-title" > Platform Features < /h2> <
                                            ul className = "land__features-list" >
                                            <
                                            li className = "land__features-item" >
                                            <
                                            div className = "land__features-item-icon" >
                                            <
                                            svg xmlns = "http://www.w3.org/2000/svg"
                                        width = "84"
                                        height = "84"
                                        viewBox = "0 0 42 41" >
                                            <
                                            g fill = "none"
                                        fillRule = "evenodd"
                                        transform = "translate(0 -1)" >
                                            <
                                            path d = "M0 0h42v42H0z" / >
                                            <
                                            circle cx = "14"
                                        cy = "14"
                                        r = "12.5"
                                        fill = "#0BE0E2"
                                        fillOpacity = ".3" / >
                                            <
                                            path fill = "#282D32"
                                        fillRule = "nonzero"
                                        d = "M4.05 18.75H8.8v1.5H2.55V16.5h1.5zM6 26.25v-1.5h4v1.5zM15.247 31.5h1.5v6.75H13v-1.5h2.247zM21.2 31.95h1.5v4h-1.5zM33.723 15.3v1.5h-3.946v-1.5zM35.67 22.2v1.5h-4.947v-1.5zM29 27.824v-1.5h6.197v3.845h-1.5v-2.345zM25 11.05h-1.5V3.8h3.747v1.5H25zM13 7.2V5.7h3.753v5.25h-1.5V7.2z" / >
                                            <
                                            path fillRule = "nonzero"
                                        stroke = "#282D32"
                                        strokeWidth = "1.5"
                                        d = "M20 10.25c-5.927 0-10.75 4.823-10.75 10.75S14.073 31.75 20 31.75c5.928 0 10.75-4.822 10.75-10.75 0-5.927-4.823-10.75-10.75-10.75z" / >
                                            <
                                            path stroke = "#282D32"
                                        strokeWidth = "1.5"
                                        d = "M3.5 16.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5zM3.5 27.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5zM11 39.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5zM22 40.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5zM36 18.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5zM38.5 25.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5zM34.5 34.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5zM29.5 6.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5zM11 8.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5z" / >
                                            <
                                            path fill = "#52A1FF"
                                        fillRule = "nonzero"
                                        stroke = "#282D32"
                                        strokeWidth = "1.5"
                                        d = "M20 15.75A5.257 5.257 0 0 0 14.75 21 5.257 5.257 0 0 0 20 26.25 5.256 5.256 0 0 0 25.25 21 5.257 5.257 0 0 0 20 15.75z" / >
                                            <
                                            /g> <
                                            /svg> <
                                            /div> <
                                            div className = "land__features-item-text" > Quorum blockchain < /div> <
                                            /li> <
                                            li className = "land__features-item" >
                                            <
                                            div className = "land__features-item-icon" >
                                            <
                                            svg xmlns = "http://www.w3.org/2000/svg"
                                        width = "84"
                                        height = "84"
                                        viewBox = "0 0 42 42" >
                                            <
                                            g fill = "none"
                                        fillRule = "evenodd"
                                        transform = "translate(0 -1)" >
                                            <
                                            path d = "M0 0h42v42H0z" / >
                                            <
                                            circle cx = "14.5"
                                        cy = "13.5"
                                        r = "12.5"
                                        fill = "#0BE0E2"
                                        fillOpacity = ".3" / >
                                            <
                                            path fill = "#282D32"
                                        fillRule = "nonzero"
                                        d = "M7 7.5V4c0-1.657 1.363-3 3.044-3h25.362c1.68 0 3.043 1.343 3.043 3v17.5H42V25c0 1.657-1.363 3-3.043 3H15.623c-1.68 0-3.043-1.343-3.043-3V7.5H7zM8.522 6h5.58v19c0 .828.68 1.5 1.521 1.5h23.334c.84 0 1.521-.672 1.521-1.5v-2h-3.55V4c0-.828-.682-1.5-1.522-1.5H10.044c-.84 0-1.522.672-1.522 1.5v2z" / >
                                            <
                                            path fill = "#282D32"
                                        fillRule = "nonzero"
                                        d = "M14.101 21.5V25c0 .828.682 1.5 1.522 1.5h1.015c.84 0 1.521-.672 1.521-1.5v-3.5h1.522V25c0 1.657-1.362 3-3.043 3h-1.015c-1.68 0-3.043-1.343-3.043-3v-3.5H14.1zM12.58 6V4c0-.828-.682-1.5-1.522-1.5h-1.015c-.84 0-1.521.672-1.521 1.5v2h4.058zM14.1 7.5H7V4c0-1.657 1.363-3 3.043-3h1.015c1.68 0 3.043 1.343 3.043 3v3.5zM17.652 7.5h9.13V9h-9.13V7.5zm0 4.5h15.725v1.5H17.652V12zm0 4.5h15.725V18H17.652v-1.5z" / >
                                            <
                                            path fill = "#282D32"
                                        fillRule = "nonzero"
                                        d = "M18.667 21.5h18.768V23H18.667zM40.25 41.25V31h1.5v11.75H.25V31h1.5v10.25z" / >
                                            <
                                            path fill = "#52A1FF"
                                        stroke = "#282D32"
                                        strokeWidth = "1.5"
                                        d = "M3.75 32.274h34.5v6.357H3.75z" / >
                                            <
                                            path fill = "#282D32"
                                        d = "M4.5 34.667h33v1.571h-33z" / >
                                            <
                                            /g> <
                                            /svg> <
                                            /div> <
                                            div className = "land__features-item-text" > Programmable Documents < /div> <
                                            /li> <
                                            li className = "land__features-item" >
                                            <
                                            div className = "land__features-item-icon" >
                                            <
                                            svg xmlns = "http://www.w3.org/2000/svg"
                                        width = "77"
                                        height = "78"
                                        viewBox = "0 0 77 78" >
                                            <
                                            g fill = "none"
                                        fillRule = "evenodd" >
                                            <
                                            circle cx = "27"
                                        cy = "25"
                                        r = "25"
                                        fill = "#0BE0E2"
                                        fillOpacity = ".3" / >
                                            <
                                            path fill = "#282D32"
                                        d = "M57 75V41h3v37H0V18h38v3H3v54z" / >
                                            <
                                            path fill = "#282D32"
                                        d = "M10 26h14v3H10v-3zm7 8h20v3H17v-3zm0 8h24v3H17v-3zm-7 24h34v3H10v-3zm0-8h22v3H10v-3zm0-8h34v3H10v-3zm26 8h14v3H36v-3z" / >
                                            <
                                            path fill = "#52A1FF"
                                        d = "M41 2h36v36H41V2zm24.5 22a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z" / >
                                            <
                                            path fill = "#282D32"
                                        fillRule = "nonzero"
                                        d = "M44 5v30h30V5H44zm-3-3h36v36H41V2z" / >
                                            <
                                            g fill = "#282D32"
                                        fillRule = "nonzero" >
                                            <
                                            path d = "M65.5 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 3a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z" / >
                                            <
                                            path d = "M48 18h15v3H48zM51 21h4v3h-4z" / >
                                            <
                                            /g> <
                                            /g> <
                                            /svg> <
                                            /div> <
                                            div className = "land__features-item-text" > Smart Contract < /div> <
                                            /li> <
                                            li className = "land__features-item" >
                                            <
                                            div className = "land__features-item-icon" >
                                            <
                                            svg xmlns = "http://www.w3.org/2000/svg"
                                        width = "84"
                                        height = "81"
                                        viewBox = "0 0 84 81" >
                                            <
                                            g fill = "none"
                                        fillRule = "evenodd"
                                        transform = "translate(0 -1)" >
                                            <
                                            path d = "M0 0h84v84H0z" / >
                                            <
                                            circle cx = "25"
                                        cy = "26"
                                        r = "25"
                                        fill = "#0BE0E2"
                                        fillOpacity = ".3" / >
                                            <
                                            path fill = "#282D32"
                                        fillRule = "nonzero"
                                        d = "M8 33h33v3H11v34H8V33zm53 25h3v12h-3V58z" / >
                                            <
                                            path fill = "#282D32"
                                        fillRule = "nonzero"
                                        d = "M18 43h23v3H18v-3zm0 8h23v3H18v-3zm0 8h36v3H18v-3zM1 70h70v8a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4v-8zm3 3v5a1 1 0 0 0 1 1h62a1 1 0 0 0 1-1v-5H4zM44 5h40v27.328a6 6 0 0 1-1.986 4.46L64 53 45.986 36.788A6 6 0 0 1 44 32.328V5zm3 3v24.328a3 3 0 0 0 .993 2.23L64 48.964l16.007-14.406a3 3 0 0 0 .993-2.23V8H47z" / >
                                            <
                                            path fill = "#52A1FF"
                                        fillRule = "nonzero"
                                        d = "M47 8v24.328a3 3 0 0 0 .993 2.23L64 48.964l16.007-14.406a3 3 0 0 0 .993-2.23V8H47z" / >
                                            <
                                            path fill = "#282D32"
                                        fillRule = "nonzero"
                                        d = "M62.132 29.678L73.799 18.01l2.121 2.122L62.132 33.92 54 25.79l2.121-2.122z" / >
                                            <
                                            /g> <
                                            /svg> <
                                            /div> <
                                            div className = "land__features-item-text" > Security < /div> <
                                            /li> <
                                            li className = "land__features-item" >
                                            <
                                            div className = "land__features-item-icon" >
                                            <
                                            svg xmlns = "http://www.w3.org/2000/svg"
                                        width = "84"
                                        height = "84"
                                        viewBox = "0 0 41 42" >
                                            <
                                            g fill = "none"
                                        fillRule = "evenodd"
                                        transform = "translate(-1)" >
                                            <
                                            circle cx = "14"
                                        cy = "14"
                                        r = "12.5"
                                        fill = "#0BE0E2"
                                        fillOpacity = ".3" / >
                                            <
                                            path fill = "#282D32"
                                        fillRule = "nonzero"
                                        d = "M7.089 17.056a5.678 5.678 0 0 1 4.762-4.243l1.192-.156.042-1.196c.19-5.317 4.582-9.546 9.941-9.546 4.426 0 8.283 2.904 9.532 7.061l.27.898.935.103c3.579.393 6.316 3.417 6.316 7.032 0 3.757-3.457 7.333-7.898 8.007l.08 1.413c5.113-.344 9.239-4.894 9.239-9.42 0-4.37-3.317-7.97-7.58-8.439A11.367 11.367 0 0 0 23.025.5c-6.14 0-11.144 4.848-11.36 10.91a7.099 7.099 0 0 0-6.027 5.615M15.75 29.925a3.751 3.751 0 0 1 .75-7.425 3.75 3.75 0 0 1 .75 7.425V33h-1.5v-3.075z" / >
                                            <
                                            path fill = "#52A1FF"
                                        d = "M16.952 28.455a2.251 2.251 0 1 0-.904 0l.452.092.452-.092z" / >
                                            <
                                            path fill = "#282D32"
                                        d = "M2.5 40h28v1.5h-28z" / >
                                            <
                                            path fill = "#282D32"
                                        d = "M16 37h1.5v4H16z" / >
                                            <
                                            path fill = "#282D32"
                                        fillRule = "nonzero"
                                        d = "M30.5 20v17H29V20H4v17H2.5V18.5h28V20z" / >
                                            <
                                            path fill = "#282D32"
                                        d = "M4 35.5h25V37H4z" / >
                                            <
                                            /g> <
                                            /svg> <
                                            /div> <
                                            div className = "land__features-item-text" > Privacy < /div> <
                                            /li> <
                                            li className = "land__features-item" >
                                            <
                                            div className = "land__features-item-icon" >
                                            <
                                            svg xmlns = "http://www.w3.org/2000/svg"
                                        width = "77"
                                        height = "78"
                                        viewBox = "0 0 77 78" >
                                            <
                                            g fill = "none"
                                        fillRule = "evenodd"
                                        transform = "translate(-4 -3)" >
                                            <
                                            path d = "M0 0h84v84H0z" / >
                                            <
                                            circle cx = "29"
                                        cy = "28"
                                        r = "25"
                                        fill = "#0BE0E2"
                                        fillOpacity = ".3" / >
                                            <
                                            path fill = "#52A1FF"
                                        d = "M62 8l8.66 5v10L62 28l-8.66-5V13L62 8zm10 17l8.66 5v10L72 45l-8.66-5V30L72 25zm-20 0l8.66 5v10L52 45l-8.66-5V30L52 25z" / >
                                            <
                                            path fill = "#282D32"
                                        fillRule = "nonzero"
                                        d = "M39 78h22V47h3v34H11V34h28v44zm-3-41H14v41h22V37zm-17 7h12v3H19v-3zm0 8h12v3H19v-3zm0 8h12v3H19v-3zm0 8h12v3H19v-3zm25-16h12v3H44v-3zm0 8h12v3H44v-3zm0 8h12v3H44v-3zm26.5-4h3v3h-3v-3zm0 7h3v3h-3v-3zM56.34 14.732v6.536L62 24.536l5.66-3.268v-6.536L62 11.464l-5.66 3.268zM62 8l8.66 5v10L62 28l-8.66-5V13L62 8zm4.34 23.732v6.536L72 41.536l5.66-3.268v-6.536L72 28.464l-5.66 3.268zM72 25l8.66 5v10L72 45l-8.66-5V30L72 25zm-25.66 6.732v6.536L52 41.536l5.66-3.268v-6.536L52 28.464l-5.66 3.268zM52 25l8.66 5v10L52 45l-8.66-5V30L52 25z" / >
                                            <
                                            /g> <
                                            /svg> <
                                            /div> <
                                            div className = "land__features-item-text" > API < /div> <
                                            /li> <
                                            /ul> <
                                            /div> <
                                            div className = "land__first-step" >
                                            <
                                            div className = "land__first-step-phone-img" / >
                                            <
                                            div >
                                            <
                                            h2 className = "land__first-step-title" > The First Step < /h2> <
                                            div className = "land__first-step-description" >
                                            The system will be an open standard
                                        for
                                        creating, issuing, viewing, and verifying
                                        blockchain - based programmable documents.
                                        These digital records are registered on a
                                        private blockchain, cryptographically signed,
                                        tamper - proof, and shareable. <
                                            /div> <
                                            a className = "land__first-step-button"
                                        href = "#" > Discover more→ < /a> <
                                            /div> <
                                            /div> <
                                            div className = "land__get" >
                                            <
                                            div className = "land__get-steps" >
                                            <
                                            div className = "land__get-stepper" / >
                                            <
                                            div className = "land__get-steps-wrapper" >
                                            <
                                            div className = "land__get-step land__get-step_1" >
                                            <
                                            h3 className = "land__get-step-title" > Get the free Cronica app < /h3> <
                                            div className = "land__get-step-description" >
                                            The solution relies on a Quorum blockchain setup that fulfils basic requirements
                                        for the system
                                            <
                                            /div> <
                                            /div> <
                                            div className = "land__get-step land__get-step_2" >
                                            <
                                            h3 className = "land__get-step-title" > Create an account < /h3> <
                                            div className = "land__get-step-description" >
                                            Document Certificate Recipients are the person or organizations in address of which certificate was issued <
                                            /div> <
                                            /div> <
                                            div className = "land__get-step land__get-step_3" >
                                            <
                                            h3 className = "land__get-step-title" > Issue document certificates < /h3> <
                                            div className = "land__get-step-description" >
                                            Document ID is generated by system when Certificate is recorded on a blockchain <
                                            /div> <
                                            /div> <
                                            /div>

                                        <
                                        div className = "land__get-steps-carousel-wrapper" >
                                            <
                                            button className = "button-carousel"
                                        id = "button-prev"
                                        onClick = { this.onPrevClick } >
                                            <
                                            svg xmlns = "http://www.w3.org/2000/svg"
                                        width = "8"
                                        height = "13"
                                        viewBox = "0 0 8 13"
                                        stroke = "currentColor" >
                                            <
                                            path fill = "none"
                                        fillRule = "evenodd"
                                        stroke = "currentColor"
                                        strokeWidth = "1.5"
                                        d = "M6.657 12.314l-4.95-4.95a1 1 0 0 1 0-1.414L6.657 1" / >
                                            <
                                            /svg> <
                                            /button> <
                                            div className = "land__get-steps-carousel" >
                                            <
                                            div className = "land__get-step-carousel land__get-step-carousel_1"
                                        id = "carousel-1"
                                        style = {
                                                { transform: `translateX(${translateX}%)` } } >
                                            <
                                            h3 className = "land__get-step-title" > Get the free Cronica app < /h3> <
                                            div className = "land__get-step-description" >
                                            The solution relies on a Quorum blockchain setup that fulfils basic requirements
                                        for the system
                                            <
                                            /div> <
                                            /div> <
                                            div className = "land__get-step-carousel land__get-step-carousel_2"
                                        id = "carousel-2"
                                        style = {
                                                { transform: `translateX(${translateX}%)` } } >
                                            <
                                            h3 className = "land__get-step-title" > Create an account < /h3> <
                                            div className = "land__get-step-description" >
                                            Document Certificate Recipients are the person or organizations in address of which certificate was issued <
                                            /div> <
                                            /div> <
                                            div className = "land__get-step-carousel land__get-step-car0usel_3"
                                        id = "carousel-3"
                                        style = {
                                                { transform: `translateX(${translateX}%)` } } >
                                            <
                                            h3 className = "land__get-step-title" > Issue document certificates < /h3> <
                                            div className = "land__get-step-description" >
                                            Document ID is generated by system when Certificate is recorded on a blockchain <
                                            /div> <
                                            /div> <
                                            /div> <
                                            button className = "button-carousel"
                                        id = "button-next"
                                        onClick = { this.onNextClick } >
                                            <
                                            svg xmlns = "http://www.w3.org/2000/svg"
                                        width = "7"
                                        height = "13"
                                        viewBox = "0 0 7 13"
                                        stroke = "currentColor" >
                                            <
                                            path fill = "none"
                                        fillRule = "evenodd"
                                        stroke = "currentColor"
                                        strokeWidth = "1.5"
                                        d = "M.657 1l4.95 4.95a1 1 0 0 1 0 1.414l-4.95 4.95" / >
                                            <
                                            /svg> <
                                            /button> <
                                            /div> <
                                            /div> <
                                            div className = "land__get-apps" >
                                            <
                                            h3 className = "land__get-apps-title" > Get the Free App < /h3> <
                                            div className = "land__get-apps-wrapper badges" >
                                            <
                                            div className = "badge" >
                                            <
                                            img className = "badge__icon icon-apple"
                                        src = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjU2LjY5MyIgdmlld0JveD0iMCAwIDU2LjY5MyA1Ni42OTMiIHdpZHRoPSI1Ni42OTMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTQxLjc3NyAzMC41MTdjLS4wNjItNi4yMzIgNS4wODItOS4yMiA1LjMxMi05LjM3Mi0yLjg5Mi00LjIyNy03LjM5Ni00LjgwNy05LTQuODczLTMuODMtLjM5LTcuNDc2IA0KMi4yNTYtOS40MiAyLjI1Ni0xLjkzOCAwLTQuOTQtMi4yLTguMTE2LTIuMTQzLTQuMTc4LjA2Mi04LjAzIDIuNDMtMTAuMTggNi4xNy00LjMzOCA3LjUyNy0xLjExIDE4LjY4MiAzLjEyIA0KMjQuNzkgMi4wNjYgMi45ODcgNC41MyA2LjM0NyA3Ljc2NSA2LjIyNCAzLjExNi0uMTI0IDQuMjkyLTIuMDE3IDguMDYtMi4wMTdzNC44MjYgMi4wMTYgOC4xMjMgMS45NTNjMy4zNTItLjA2IA0KNS40NzctMy4wNDMgNy41MjctNi4wNCAyLjM3My0zLjQ3IDMuMzUtNi44MyAzLjQwOC03LS4wNzMtLjAzMy02LjUzNC0yLjUwOC02LjYtOS45NXpNMzUuNTgyIDEyLjIzYzEuNzE1LTIuMDgzIA0KMi44NzctNC45NzYgMi41Ni03Ljg1Ni0yLjQ3NC4xLTUuNDcgMS42NDUtNy4yNDcgMy43MjUtMS41OTIgMS44NDUtMi45ODQgNC43ODQtMi42MSA3LjYxMiAyLjc2LjIxNCA1LjU3Ni0xLjQwNSA3LjI5Ny0zLjQ4M3oiLz48L3N2Zz4=" / >
                                            <
                                            div className = "badge__description" >
                                            <
                                            div className = "badge__hint" >
                                            Download on the <
                                            /div> <
                                            div className = "badge__name" >
                                            App Store <
                                            /div> <
                                            /div> <
                                            /div> <
                                            div className = "badge" >
                                            <
                                            img className = "badge__icon"
                                        src = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMyIiB2ZXJzaW9uPSIxIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggZD0iTTIzLjAyOCAxMS41MThsLTYuNjktMy44NjJTNC4xNDguNjE2IDMuNDMuMjAzQzIuNzE1LS4yMSAyIC4wNCAyIC45MDNWMzEuMjY0YzAgLjY1LjUxMi45MyAxLjEzMy41N2wxMy4yMDUtNy42MjYgNi42OS0zLjg2MiA2LjQzMy0zLjcxNGMuNzU1LS40MzUuNjg0LTEuMDMyLjA0Ni0xLjM3NnMtNi40NzgtMy43MzgtNi40NzgtMy43Mzh6IiBpZD0iYSIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9ImIiPjx1c2Ugb3ZlcmZsb3c9InZpc2libGUiIHhsaW5rOmhyZWY9IiNhIi8+PC9jbGlwUGF0aD48cGF0aCBjbGlwLXBhdGg9InVybCgjYikiIGZpbGw9IiMyQ0FGQTIiIGQ9Ik0yLS41MDRWMzIuMzY3bDE2LjU3Ny0xNi40MzUiLz48cGF0aCBjbGlwLXBhdGg9InVybCgjYikiIGZpbGw9IiM3N0U4ODgiIGQ9Ik0yMy4wMjggMTEuNTE4bC02LjY5LTMuODYzTDItLjYyNXYuMTJsMTYuNTc3IDE2LjQzNyIvPjxwYXRoIGNsaXAtcGF0aD0idXJsKCNiKSIgZmlsbD0iI0NDM0E3MiIgZD0iTTIgMzIuMzY3di4xMmwxNC4zMzgtOC4yNzggNi42OS0zLjg2My00LjQ1LTQuNDE1Ii8+PHBhdGggY2xpcC1wYXRoPSJ1cmwoI2IpIiBmaWxsPSIjRUE5MDUzIiBkPSJNMjMuMDI4IDExLjUxOGwtNC40NSA0LjQxNCA0LjQ1IDQuNDE1IDcuNjQ4LTQuNDE1Ii8+PC9zdmc+" / >
                                            <
                                            div className = "badge__description" >
                                            <
                                            div className = "badge__hint" >
                                            GET IN ON <
                                            /div> <
                                            div className = "badge__name" >
                                            Google Play <
                                            /div> <
                                            /div> <
                                            /div> <
                                            /div> <
                                            /div> <
                                            /div> <
                                            svg className = "land__support"
                                        xmlns = "http://www.w3.org/2000/svg"
                                        xmlns = "http://www.w3.org/1999/xlink"
                                        width = "92"
                                        height = "113" > < defs > < circle id = "b"
                                        cx = "22"
                                        cy = "22"
                                        r = "22" / > < filter id = "a"
                                        width = "431.8%"
                                        height = "431.8%"
                                        x = "-165.9%"
                                        y = "-113.6%"
                                        filterUnits = "objectBoundingBox" > < feOffset dy = "23" in = "SourceAlpha"
                                        result = "shadowOffsetOuter1" / > < feGaussianBlur in = "shadowOffsetOuter1"
                                        result = "shadowBlurOuter1"
                                        stdDeviation = "14.5" / > < feColorMatrix in = "shadowBlurOuter1"
                                        result = "shadowMatrixOuter1"
                                        values = "0 0 0 0 0.141176471 0 0 0 0 0.156862745 0 0 0 0 0.2 0 0 0 0.12 0" / > < feOffset in = "SourceAlpha"
                                        result = "shadowOffsetOuter2" / > < feGaussianBlur in = "shadowOffsetOuter2"
                                        result = "shadowBlurOuter2"
                                        stdDeviation = "9" / > < feColorMatrix in = "shadowBlurOuter2"
                                        result = "shadowMatrixOuter2"
                                        values = "0 0 0 0 0.141176471 0 0 0 0 0.156862745 0 0 0 0 0.2 0 0 0 0.08 0" / > < feMerge > < feMergeNode in = "shadowMatrixOuter1" / > < feMergeNode in = "shadowMatrixOuter2" / > < /feMerge></filter > < path id = "c"
                                        d = "M20.533 33.733c.75 0 1.485-2.51 2.196-2.604 5.43-.71 9.538-3.28 9.538-8.894 0-5.618-5.254-8.302-11.734-8.302S8.8 16.617 8.8 22.235c0 5.415 3.82 7.94 8.963 8.808.888.15 1.816 2.69 2.77 2.69z" / > < /defs><g fill="none" fillRule="evenodd" transform="translate(28 18)"><use fill="#000" filter="url(#a)" href="#b"/ > < use fill = "#FFF"
                                        href = "#b" / > < circle cx = "22"
                                        cy = "22"
                                        r = "22"
                                        fill = "#52A1FF" / > < use fill = "#FFF"
                                        href = "#c" / > < path stroke = "#FFF"
                                        strokeWidth = "2.2"
                                        d = "M20.16 32.74a.441.441 0 0 0 .004-.003zm.27-.378c.074-.119.163-.27.282-.478.304-.531.422-.727.603-.974.36-.49.723-.8 1.271-.871 5.56-.727 8.58-3.265 8.58-7.804 0-4.528-4.134-7.202-10.633-7.202-6.498 0-10.633 2.674-10.633 7.202 0 4.37 2.78 6.835 8.046 7.724.804.135 1.099.466 2.034 1.792.202.287.338.472.45.611zm2.47-.146l-.028.004a.875.875 0 0 0 .074-.013z" / > < path fill = "#FFF"
                                        d = "M12.256 14.793c2.024-3.05 6.284-4.526 11.21-4.526 6.886 0 12.467 2.883 12.467 8.916 0 3.395-1.382 5.753-3.62 7.302.907-1.35 1.42-3.034 1.42-5.102 0-6.033-5.581-8.916-12.466-8.916-3.543 0-6.741.763-9.01 2.326" / > < /g></svg >
                                            <
                                            /Fragment>}

                                        <
                                        footer className = "land__footer" >
                                            <
                                            header className = "land__footer-header" >
                                            <
                                            svg className = "land__footer-logo"
                                        xmlns = "http://www.w3.org/2000/svg"
                                        width = "148"
                                        height = "36"
                                        viewBox = "0 0 148 36" >
                                            <
                                            g fill = "none"
                                        fillRule = "evenodd" >
                                            <
                                            text fill = "#FFF"
                                        fontFamily = "MuseoSansCyrl"
                                        fontSize = "28"
                                        fontWeight = "700"
                                        letterSpacing = ".133"
                                        transform = "translate(0 -3)" >
                                            <
                                            tspan x = "50"
                                        y = "29" > cronica < /tspan> <
                                            /text> <
                                            path fill = "#FFF"
                                        fillRule = "nonzero"
                                        d = "M18 0v4C10.268 4 4 10.268 4 18s6.268 14 14 14c3.866 0 7.366-1.567 9.9-4.1l2.828 2.828A17.944 17.944 0 0 1 18 36C8.059 36 0 27.941 0 18S8.059 0 18 0z" / >
                                            <
                                            path stroke = "#FFF"
                                        strokeWidth = "4"
                                        d = "M34.956 5.485l-16.97 16.97L9.5 13.972" / >
                                            <
                                            /g> <
                                            /svg> <
                                            div className = "land__footer-header-aside" >
                                            <
                                            nav className = "land__nav" >
                                            <
                                            li className = "land__nav-item" >
                                            <
                                            a className = "land__nav-link land__nav-link_active"
                                        href = "#" > home < /a> <
                                            /li> <
                                            li className = "land__nav-item" >
                                            <
                                            a className = "land__nav-link"
                                        href = "#" > project < /a> <
                                            /li> <
                                            li className = "land__nav-item" >
                                            <
                                            a className = "land__nav-link"
                                        href = "#" > company < /a> <
                                            /li> <
                                            li className = "land__nav-item" >
                                            <
                                            a className = "land__nav-link"
                                        href = "#" > contacts < /a> <
                                            /li> <
                                            /nav> <
                                            /div> <
                                            /header> <
                                            div className = "land__copyright" >
                                            <
                                            span > The Open standard
                                        for Blockchain Certificates < /span> <
                                            span > ©CRONICA INC.2018 < /span> <
                                            /div> <
                                            /footer>

                                        <
                                        div className = {
                                                cn('land__menu_mobile', {
                                                    'land__menu_mobile-visible': this.state.isMobileMenu,
                                                })
                                            } >
                                            <
                                            div className = "land__menu-header_mobile" >
                                            <
                                            svg onClick = { this.closeMobileMenu }
                                        xmlns = "http://www.w3.org/2000/svg"
                                        width = "12"
                                        height = "12"
                                        viewBox = "0 0 12 12" >
                                            <
                                            path fill = "#FFF"
                                        fillRule = "nonzero"
                                        d = "M12 1.209L10.791 0 6 4.791 1.209 0 0 1.209 4.791 6 0 10.791 1.209 12 6 7.209 10.791 12 12 10.791 7.209 6z" / >
                                            <
                                            /svg> <
                                            svg className = "land__logo-mobile"
                                        xmlns = "http://www.w3.org/2000/svg"
                                        width = "23"
                                        height = "23" >
                                            <
                                            g fill = "none"
                                        fillRule = "evenodd" >
                                            <
                                            path fill = "#52A1FF"
                                        fillRule = "nonzero"
                                        d = "M11.077.846v2.462a8.615 8.615 0 1 0 6.092 14.707l1.74 1.74A11.042 11.042 0 0 1 11.077 23C4.959 23 0 18.04 0 11.923 0 5.805 4.96.846 11.077.846z" / >
                                            <
                                            path stroke = "#76D6FF"
                                        strokeWidth = "3.077"
                                        d = "M21.511 4.222L11.068 14.665 5.846 9.443" / >
                                            <
                                            /g> <
                                            /svg> <
                                            /div> <
                                            ul className = "land__menu-nav_mobile" >
                                            <
                                            li onClick = { this.closeMobileMenu }
                                        className = "land__menu-item_mobile land__menu-item_mobile-active" > HOME < /li> <
                                            li onClick = { this.closeMobileMenu }
                                        className = "land__menu-item_mobile" > PROJECT < /li> <
                                            li onClick = { this.closeMobileMenu }
                                        className = "land__menu-item_mobile" >
                                            <
                                            a className = "land__nav-link"
                                        href = "https://docs.cronica.io/"
                                        target = "_blank" > DEVELOPERS < /a>  <
                                            /li> <
                                            li onClick = { this.closeMobileMenu }
                                        className = "land__menu-item_mobile" > CONTACTS < /li> <
                                            /ul> <
                                            /div> <
                                            /div>
                                    )
                            }

                        closeMobileMenu = () => {
                            this.setState({
                                isMobileMenu: false,
                            })
                        }

                        openMobileMenu = () => {
                            this.setState({
                                isMobileMenu: true,
                            })
                        }

                        onButtonLoadClick = () => {
                            document.getElementById('input-file').click();
                        }

                        onPrevClick = () => {
                            const { translateX } = this.state;

                            document.getElementById('button-next').disabled = false;

                            if (translateX === 0) {
                                document.getElementById('button-prev').disabled = true;
                            } else if (translateX === -100) {
                                this.setState({
                                    translateX: translateX + 100,
                                });
                                document.getElementById('button-prev').disabled = true;
                            } else {
                                this.setState({
                                    translateX: translateX + 100,
                                });
                            }
                        }

                        onNextClick = () => {
                            const { translateX } = this.state;

                            document.getElementById('button-prev').disabled = false;

                            if (translateX === -200) {
                                document.getElementById('button-next').disabled = true;
                            } else if (translateX === -100) {
                                this.setState({
                                    translateX: translateX - 100,
                                });
                                document.getElementById('button-next').disabled = true;
                            } else {
                                this.setState({
                                    translateX: translateX - 100,
                                });
                            }
                        }

                        onFileUpload = (e) => {
                            const reader = new FileReader();

                            reader.onload = (() => {
                                return (e) => {
                                    try {
                                        const json = JSON.parse(JSON.parse(e.target.result));

                                        Api.post('v1/document/search-by-json', {
                                            ...json
                                        }).then((response) => {
                                            this.setState({
                                                error: '',
                                                documents: response.data,
                                            });
                                            if (response.data.length === 0) {
                                                this.setState({
                                                    error: 'Document not found',
                                                })
                                            }
                                        }).catch((error) => {
                                            this.setState({
                                                error: 'Document not found',
                                            })
                                        })
                                    } catch (ex) {
                                        alert('exeption when trying to parse json = ' + ex);
                                    }
                                }
                            })(e.target.files[0]);

                            reader.readAsText(e.target.files[0]);
                        }

                        onDocumentIdChange = (e) => {
                            this.setState({
                                documentId: e.target.value,
                            })
                        }

                        onSubmit = (e) => {
                            e.preventDefault();
                            const { documentId } = this.state;
                            this.setState({
                                isLoading: true,
                                error: '',
                            })

                            Api.get(`v1/document/${documentId}`)
                                .then((response) => {
                                    this.setState({
                                        error: '',
                                        documents: [response.data],
                                        isLoading: false,
                                    });
                                    if (!response.data) {
                                        this.setState({
                                            error: 'Document not found',
                                        })
                                    }
                                }).catch((error) => {
                                    this.setState({
                                        isLoading: false,
                                        error: 'Document not found',
                                    })
                                })
                        }

                        handlBackClick = () => {
                            window.scrollTo(0, 0);
                            this.setState({
                                documentId: '',
                                documents: null,
                            })
                        }
                    }

                    export default withRouter(Landing);