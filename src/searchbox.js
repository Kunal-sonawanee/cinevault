import React from 'react';

const SearchBox = ({onSearchChange}) => {

    return (
        <input 
        className='pa3 tc ba b--black-10' 
        type="search" placeholder="Search for movies..." 
        onChange={onSearchChange}

         />
        );

        }
export default SearchBox;