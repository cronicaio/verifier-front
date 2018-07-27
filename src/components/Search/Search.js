import React, {Component} from 'react';
import { withRouter } from 'react-router';
import Verify from '../../components/Verify';
import cn from 'classnames';
import { Api } from '../../api';
import './Search.scss';

class Search extends Component {
  state = {
    documents: null,
    error: '',
  }

  componentDidMount() {
    Api.get(`v1/document/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({
          error: '',
          documents: [response.data],
        });
        if (!response.data) {
          this.setState({
            error: 'Document not found',
          })
        }
    }).catch((error) => {
      this.setState({
        error: 'Document not found',
      })
    })
  }

  render() {
    const { documents, error } = this.state;

    return (
      <div className="land">
        <div className="land__welcome">
          <header className="land__header">
            <svg onClick={this.openMobileMenu} className="land__burger-menu" xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14">
              <path fill="#FFF" fillRule="evenodd" d="M1 6h18a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2zm0-6h18a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2zm0 12h18a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2z"/>
            </svg>
            <svg className="land__logo" xmlns="http://www.w3.org/2000/svg" width="148" height="36" viewBox="0 0 148 36">
              <g fill="none" fillRule="evenodd">
                <text fill="#FFF" fontFamily="MuseoSansCyrl" fontSize="28" fontWeight="700" letterSpacing=".133" transform="translate(0 -3)">
                  <tspan x="50" y="29">cronica</tspan>
                </text>
                <path fill="#FFF" fillRule="nonzero" d="M18 0v4C10.268 4 4 10.268 4 18s6.268 14 14 14c3.866 0 7.366-1.567 9.9-4.1l2.828 2.828A17.944 17.944 0 0 1 18 36C8.059 36 0 27.941 0 18S8.059 0 18 0z"/>
                <path stroke="#FFF" strokeWidth="4" d="M34.956 5.485l-16.97 16.97L9.5 13.972"/>
              </g>
            </svg>
            <svg className="land__logo-mobile" xmlns="http://www.w3.org/2000/svg" width="23" height="23">
              <g fill="none" fillRule="evenodd">
                <path fill="#52A1FF" fillRule="nonzero" d="M11.077.846v2.462a8.615 8.615 0 1 0 6.092 14.707l1.74 1.74A11.042 11.042 0 0 1 11.077 23C4.959 23 0 18.04 0 11.923 0 5.805 4.96.846 11.077.846z"/>
                <path stroke="#76D6FF" strokeWidth="3.077" d="M21.511 4.222L11.068 14.665 5.846 9.443"/>
              </g>
            </svg>
            <div className="land__header-aside">
              <nav className="land__nav">
                <li className="land__nav-item">
                  <a className="land__nav-link land__nav-link_active" href="#">home</a>
                </li>
                <li className="land__nav-item">
                  <a className="land__nav-link" href="#">project</a>
                </li>
                <li className="land__nav-item">
                  <a className="land__nav-link" href="https://docs.cronica.io/" target="_blank">developers</a>
                </li>
                <li className="land__nav-item">
                  <a className="land__nav-link" href="#">contacts</a>
                </li>
              </nav>
            </div>
          </header>
          {!!documents && documents.map((document, i) => (
            <Verify key={i} document={document} onBackClick={this.handlBackClick} />
          ))}
          {error && !documents && <div className="search__error">{error}</div>}
        </div>
        <footer className="land__footer">
          <header className="land__footer-header">
            <svg className="land__footer-logo" xmlns="http://www.w3.org/2000/svg" width="148" height="36" viewBox="0 0 148 36">
              <g fill="none" fillRule="evenodd">
                <text fill="#FFF" fontFamily="MuseoSansCyrl" fontSize="28" fontWeight="700" letterSpacing=".133" transform="translate(0 -3)">
                  <tspan x="50" y="29">cronica</tspan>
                </text>
                <path fill="#FFF" fillRule="nonzero" d="M18 0v4C10.268 4 4 10.268 4 18s6.268 14 14 14c3.866 0 7.366-1.567 9.9-4.1l2.828 2.828A17.944 17.944 0 0 1 18 36C8.059 36 0 27.941 0 18S8.059 0 18 0z"/>
                <path stroke="#FFF" strokeWidth="4" d="M34.956 5.485l-16.97 16.97L9.5 13.972"/>
              </g>
            </svg>
            <div className="land__footer-header-aside">
              <nav className="land__nav">
                <li className="land__nav-item">
                  <a className="land__nav-link land__nav-link_active" href="#">home</a>
                </li>
                <li className="land__nav-item">
                  <a className="land__nav-link" href="#">project</a>
                </li>
                <li className="land__nav-item">
                  <a className="land__nav-link" href="#">company</a>
                </li>
                <li className="land__nav-item">
                  <a className="land__nav-link" href="#">contacts</a>
                </li>
              </nav>
            </div>
          </header>
          <div className="land__copyright">
            <span>The Open standard for Blockchain Certificates</span>
            <span>© CRONICA INC. 2018</span>
          </div>
        </footer>

        <div className={cn('land__menu_mobile', {
          'land__menu_mobile-visible': this.state.isMobileMenu,
        })}>
          <div className="land__menu-header_mobile">
            <svg onClick={this.closeMobileMenu} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
              <path fill="#FFF" fillRule="nonzero" d="M12 1.209L10.791 0 6 4.791 1.209 0 0 1.209 4.791 6 0 10.791 1.209 12 6 7.209 10.791 12 12 10.791 7.209 6z"/>
            </svg>
            <svg className="land__logo-mobile" xmlns="http://www.w3.org/2000/svg" width="23" height="23">
              <g fill="none" fillRule="evenodd">
                <path fill="#52A1FF" fillRule="nonzero" d="M11.077.846v2.462a8.615 8.615 0 1 0 6.092 14.707l1.74 1.74A11.042 11.042 0 0 1 11.077 23C4.959 23 0 18.04 0 11.923 0 5.805 4.96.846 11.077.846z"/>
                <path stroke="#76D6FF" strokeWidth="3.077" d="M21.511 4.222L11.068 14.665 5.846 9.443"/>
              </g>
            </svg>
          </div>
          <ul className="land__menu-nav_mobile">
            <li onClick={this.closeMobileMenu} className="land__menu-item_mobile land__menu-item_mobile-active">HOME</li>
            <li onClick={this.closeMobileMenu} className="land__menu-item_mobile">PROJECT</li>
            <li onClick={this.closeMobileMenu} className="land__menu-item_mobile">
              <a className="land__nav-link" href="https://docs.cronica.io/" target="_blank">DEVELOPERS</a> 
            </li>
            <li onClick={this.closeMobileMenu} className="land__menu-item_mobile">CONTACTS</li>
          </ul>
        </div>
      </div>
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

  handlBackClick = () => {
    this.props.history.push('/');
  }
}

export default withRouter(Search);
