// creating a file for making a search box 

import React from "react";

// here the function for search box 
const SearchBox = ({ searchfield, searchChange }) => {
    return (
      <div className='pa2'>
        <input
          className='pa3 ba b--green bg-lightest-blue'
          type='search'
          placeholder='search robots'
          onChange={searchChange}
        />
      </div>
    );
  }
  
  export default SearchBox;
  