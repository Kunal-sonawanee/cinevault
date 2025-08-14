import React from 'react';
import './searchbox.css';

const SearchBox = ({ onSearchChange, searchValue }) => {
    return (
        <div className="search-container">
            <div className="search-box">
                <span className="search-icon">🔍</span>
                <input 
                    className="search-input" 
                    type="search" 
                    placeholder="Search movies by title, genre, or director..." 
                    value={searchValue}
                    onChange={onSearchChange}
                />
                {searchValue && (
                    <button 
                        className="clear-search"
                        onClick={() => onSearchChange({ target: { value: '' } })}
                        aria-label="Clear search"
                    >
                        ✕
                    </button>
                )}
            </div>
        </div>
    );
};

export default SearchBox;