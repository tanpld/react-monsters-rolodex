import React from 'react';

import './styles.css';

const SearchBox = ({ placeholder, onChange }) => (
  <input
    className="search-box"
    type="search"
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default SearchBox;
