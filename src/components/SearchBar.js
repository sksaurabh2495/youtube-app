import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <input
        className="input-search"
        type="text"
        placeholder="Search for videos"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="button-search" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
