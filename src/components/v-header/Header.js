import React, { Component } from 'react';
import { withRouter } from 'react-router';

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
      <div></div>
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
