import React from 'react';

const StoreSearch = () => {
  return (
    <form className="teas-search-form" action="">
      <input className="teas-search-input" type="text" placeholder="Search..." name="search" />
      <button className="teas-search-btn">
        <img className="teas-search-icon" src="/images/searchIcon.svg" alt="Search Icon" />
      </button>
    </form>
  );
};

export default StoreSearch;
