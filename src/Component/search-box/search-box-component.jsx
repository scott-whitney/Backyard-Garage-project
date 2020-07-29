import React from "react";
import { Search } from 'semantic-ui-react';

export const SearchBox = ({ placeholder, handlechange }) => (
  <div className='search-box.container'>
    <Search
      className="search-box"
      type="search"
      placeholder={placeholder}
      onSearchChange={handlechange}
    />
  </div>
);
