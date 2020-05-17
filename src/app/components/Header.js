import React from 'react';

/**
 * Stateless component (example)
 * @param {*} props Component properties
 */
export const Header = (props) => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          {props.brandName}
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
