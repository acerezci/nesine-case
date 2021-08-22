import React from 'react';
// import PropTypes from 'prop-types';
import '../styles/header.scss';

const Header = ({ title }) => (
  <div className="header-container">
    {title}
  </div>
);

// Header.propTypes = {
//   title: PropTypes.string,
// };

// Header.defaultProps = {
//   title: 'The King Of The Bahis',
// };

export default Header;
