/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/header.scss';

const Header = ({ title = 'The King Of The Bahis' }) => (
  <div className="header-container">
    {title}
  </div>
);

export default Header;
