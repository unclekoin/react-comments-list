import React from 'react';
import './header.css';

const Header = ({ liked, posts }) => {

  return (
    <div className="header d-flex">
      <h1>Pavel Koryakin</h1>
      <h2>{ posts } notes, liked { liked }</h2>
    </div>
  );
};

export default Header;
