import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSignOutAlt, faLifeRing, faUser, faArrowLeft, faBars, faTimes, faCogs, faGhost } from '@fortawesome/free-solid-svg-icons'

import './Header.scss';

class Header extends Component {


  mainPagePath = '/explorer/search-documents';

  state = {
    isMenuActive: false,
    isMainPage: false
  };

  render() {
    const username = '';

    return (
      <header className="app-header header navbar">
        <div className="header__wrapper">
          <span className={"header__backBtn hiddenDesktop " + (this.state.isMainPage ? 'hideMe' : '')} onClick={this.goBack}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
          <span className="navbar-wrapper">
          <Link to="/" className="navbar-brand"></Link>
          {/* <span className="header__searchField hiddenMobile">
            <input type="text" />
            <FontAwesomeIcon icon={faSearch} />
          </span> */}
          </span>
          <span className="header__menuBtn hiddenDesktop">
            <FontAwesomeIcon icon={faBars} onClick={this.toggleMobileMenu} />
          </span>
          <div className={"header__nav" + (this.state.isMenuActive ? ' active' : '')} >
            <span className="header__menuBtn hiddenDesktop menuClose">
              <FontAwesomeIcon icon={faTimes} onClick={this.toggleMobileMenu} />
            </span>
            {/* <Link className="header__link" to="/" onClick={this.closeMobileMenu}>
              <i><FontAwesomeIcon icon={faUser} /></i>
              <span>Users</span>
            </Link>
            <Link className="header__link" to="/" onClick={this.closeMobileMenu}>
              <i><FontAwesomeIcon icon={faGhost} /></i>
              <span>OAuth Users</span>
            </Link>
            <Link className="header__link" to="/" onClick={this.closeMobileMenu}>
              <i><FontAwesomeIcon icon={faLifeRing} /></i>
              <span>Need Help</span>
            </Link>
            <div className="header__link" onClick={this.onSignout}>
              <i><FontAwesomeIcon icon={faSignOutAlt} /></i>
              <span>Log Out</span>
            </div> */}
            <Link className="header__link ProfileLink hiddenDesktop" to="/explorer/profile" onClick={this.closeMobileMenu}>
              <i><FontAwesomeIcon icon={faCogs} /></i>
              <span>{username}</span>
            </Link>
          </div>
        </div>
      </header>
    );
  }

  onSignout = () => {
    this.context.clearUser();
    this.closeMobileMenu();
  }

  goBack = () => {
    this.props.history.goBack();
  }

  toggleMobileMenu = () => {
    this.setState({ isMenuActive: !this.state.isMenuActive });
  }

  closeMobileMenu = () => {
    if (this.state.isMenuActive)
      this.setState({ isMenuActive: false });
  }
}

export default withRouter(Header);
