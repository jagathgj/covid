import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(props) {
  // HTML Properties for each of the links in UI
  const navLinkProps = (path, animationDelay) => ({
    className: `fadeInUp ${window.location.pathname === path ? 'focused' : ''}`,
    style: {
      animationDelay: `${animationDelay}s`,
    },
  });

  if (window.location.pathname !== '/summary') {
    return (
      <div
        className="Navbar"
        style={{
          animationDelay: '0.5s',
          transition: 'all 0.3s ease-in-out',
        }}
      >
         <div className="navbar-left">
              <Link to={props.pages[0].pageLink}>
                <span
                  {...navLinkProps(props.pages[0].pageLink, props.pages[0].animationDelayForNavbar)}
                >
                  {props.pages[0].displayName}
                </span>
              </Link>
        </div>
        <img
          className="fadeInUp logo"
          alt="Kerala COVID-19 Tracker"
          src="/icon.png"
          style={{
            animationDelay: '0.0s',
            transition: 'all 0.3s ease-in-out',
          }}
        />

        <div className="navbar-right">
              <Link to={props.pages[1].pageLink}>
                <span
                  {...navLinkProps(props.pages[1].pageLink, props.pages[1].animationDelayForNavbar)}
                >
                  {props.pages[1].displayName}
                </span>
              </Link>
        </div>

      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Navbar;
