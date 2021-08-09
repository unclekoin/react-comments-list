import React from 'react';
import './search.css';

const Search = ({ onUpdateSearch }) => {

  const onUpdateSearchHandler = ({ target }) => {
    const term = target.value;
    onUpdateSearch(term);
  };

  return (
    <input
      className="search__input form-control"
      onChange={ onUpdateSearchHandler }
      type="text"
      placeholder="Search notes..."
    />
  );
};

export default Search;
