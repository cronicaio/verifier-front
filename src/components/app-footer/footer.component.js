import React from 'react';
import useReactRouter from 'use-react-router';
import Logo from '../../assets/tasreeh-final-logo.svg';
import { NavLink } from "react-router-dom";
import './footer.component.scss';

// import Home5 from '../../assets/svg/home5.svg';
// import Social from '../../assets/social.png';

function Footer() {
  const { location } = useReactRouter();

  if ((/searchBy/g).test(location.pathname))
    return (<div></div>);

  return (
    <div>

    </div>);
}

export { Footer };