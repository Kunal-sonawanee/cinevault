import React from 'react';
import './filterpanel.css';

const FilterPanel = ({ 
    genres, 
    countries, 
    selectedGenre, 
    selectedCountry, 
    minRating, 
    sortBy, 
    showFavoritesOnly, 
    onFilterChange,
    favoritesCount 
}) => {
    return (
        <div className="filter-panel">
            <div className="filter-group">
                <label htmlFor="genre-select">Genre:</label>
                <select 
                    id="genre-select"
                    value={selectedGenre} 
                    onChange={(e) => onFilterChange('selectedGenre', e.target.value)}
                    className="filter-select"
                >
                    {genres.map(genre => (
                        <option key={genre} value={genre}>{genre}</option>
                    ))}
                </select>
            </div>

            <div className="filter-group">
                <label htmlFor="country-select">Country:</label>
                <select 
                    id="country-select"
                    value={selectedCountry} 
                    onChange={(e) => onFilterChange('selectedCountry', e.target.value)}
                    className="filter-select"
                >
                    {countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                    ))}
                </select>
            </div>

            <div className="filter-group">
                <label htmlFor="rating-range">Min Rating: {minRating}</label>
                <input 
                    id="rating-range"
                    type="range" 
                    min="0" 
                    max="10" 
                    step="0.1"
                    value={minRating}
                    onChange={(e) => onFilterChange('minRating', parseFloat(e.target.value))}
                    className="rating-slider"
                />
            </div>

            <div className="filter-group">
                <label htmlFor="sort-select">Sort by:</label>
                <select 
                    id="sort-select"
                    value={sortBy} 
                    onChange={(e) => onFilterChange('sortBy', e.target.value)}
                    className="filter-select"
                >
                    <option value="name">Name</option>
                    <option value="year">Year</option>
                    <option value="rating">Rating</option>
                </select>
            </div>

            <div className="filter-group favorites-toggle">
                <label className="checkbox-label">
                    <input 
                        type="checkbox" 
                        checked={showFavoritesOnly}
                        onChange={(e) => onFilterChange('showFavoritesOnly', e.target.checked)}
                        className="favorites-checkbox"
                    />
                    <span className="checkmark"></span>
                    Show Favorites Only ({favoritesCount})
                </label>
            </div>
        </div>
    );
};

export default FilterPanel;
