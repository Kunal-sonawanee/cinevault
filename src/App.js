import React, { Component } from 'react';
import './App.css';
import SearchBox from './searchbox';
import MovieCard from './moviecardlist';
import MovieModal from './moviemodal';
import FilterPanel from './filterpanel';
import { movies } from './movies';

class App extends Component {
    constructor() {
        super();
        this.state = { 
            searchValue: '',
            movies: movies,
            filteredMovies: movies,
            selectedMovie: null,
            showModal: false,
            favorites: JSON.parse(localStorage.getItem('favorites')) || [],
            showFavoritesOnly: false,
            selectedGenre: 'All',
            selectedCountry: 'All',
            minRating: 0,
            sortBy: 'name',
            darkMode: JSON.parse(localStorage.getItem('darkMode')) || false,
            loading: false
        };
    }

    componentDidMount() {
        // Apply dark mode class to body if enabled
        if (this.state.darkMode) {
            document.body.classList.add('dark-mode');
        }
        this.applyFilters();
    }

    searchChange = (e) => {
        this.setState({ searchValue: e.target.value }, this.applyFilters);
    }

    applyFilters = () => {
        const { searchValue, movies, selectedGenre, selectedCountry, minRating, showFavoritesOnly, favorites, sortBy } = this.state;
        
        let filtered = movies.filter(movie => {
            const matchesSearch = movie.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                                movie.genre.toLowerCase().includes(searchValue.toLowerCase()) ||
                                movie.director?.toLowerCase().includes(searchValue.toLowerCase());
            
            const matchesGenre = selectedGenre === 'All' || movie.genre.includes(selectedGenre);
            const matchesCountry = selectedCountry === 'All' || movie.country === selectedCountry;
            const matchesRating = movie.rating >= minRating;
            const matchesFavorites = !showFavoritesOnly || favorites.includes(movie.id);

            return matchesSearch && matchesGenre && matchesCountry && matchesRating && matchesFavorites;
        });

        // Sort movies
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'year':
                    return b.releaseYear - a.releaseYear;
                case 'rating':
                    return b.rating - a.rating;
                default:
                    return 0;
            }
        });

        this.setState({ filteredMovies: filtered });
    }

    handleMovieClick = (movie) => {
        this.setState({ selectedMovie: movie, showModal: true });
    }

    closeModal = () => {
        this.setState({ showModal: false, selectedMovie: null });
    }

    toggleFavorite = (movieId) => {
        const { favorites } = this.state;
        let newFavorites;
        
        if (favorites.includes(movieId)) {
            newFavorites = favorites.filter(id => id !== movieId);
        } else {
            newFavorites = [...favorites, movieId];
        }
        
        this.setState({ favorites: newFavorites }, () => {
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            this.applyFilters();
        });
    }

    handleFilterChange = (filterType, value) => {
        this.setState({ [filterType]: value }, this.applyFilters);
    }

    toggleDarkMode = () => {
        const newDarkMode = !this.state.darkMode;
        this.setState({ darkMode: newDarkMode }, () => {
            localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
            if (newDarkMode) {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
        });
    }

    getUniqueGenres = () => {
        const genres = [...new Set(this.state.movies.map(movie => movie.genre))];
        return ['All', ...genres];
    }

    getUniqueCountries = () => {
        const countries = [...new Set(this.state.movies.map(movie => movie.country))];
        return ['All', ...countries];
    }

    render() {
        const { 
            searchValue, 
            filteredMovies, 
            selectedMovie, 
            showModal, 
            favorites, 
            showFavoritesOnly,
            selectedGenre,
            selectedCountry,
            minRating,
            sortBy,
            darkMode,
            loading
        } = this.state;

        return (
            <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
                <header className="app-header">
                    <div className="header-content">
                        <h1 className="app-title">🎬 CineVault</h1>
                        <p className="app-subtitle">Discover Amazing Movies</p>
                        <button 
                            className="theme-toggle"
                            onClick={this.toggleDarkMode}
                            title={`Switch to ${darkMode ? 'Light' : 'Dark'} Mode`}
                        >
                            {darkMode ? '☀️' : '🌙'}
                        </button>
                    </div>
                </header>

                <div className="controls-section">
                    <SearchBox 
                        onSearchChange={this.searchChange} 
                        searchValue={searchValue}
                    />
                    
                    <FilterPanel
                        genres={this.getUniqueGenres()}
                        countries={this.getUniqueCountries()}
                        selectedGenre={selectedGenre}
                        selectedCountry={selectedCountry}
                        minRating={minRating}
                        sortBy={sortBy}
                        showFavoritesOnly={showFavoritesOnly}
                        onFilterChange={this.handleFilterChange}
                        favoritesCount={favorites.length}
                    />
                </div>

                <div className="stats-bar">
                    <span className="movie-count">
                        {filteredMovies.length} movie{filteredMovies.length !== 1 ? 's' : ''} found
                    </span>
                    <span className="favorites-count">
                        {favorites.length} favorite{favorites.length !== 1 ? 's' : ''}
                    </span>
                </div>

                {loading ? (
                    <div className="loading-container">
                        <div className="loading-spinner"></div>
                        <p>Loading movies...</p>
                    </div>
                ) : (
                    <MovieCard 
                        movies={filteredMovies} 
                        onMovieClick={this.handleMovieClick}
                        favorites={favorites}
                        onToggleFavorite={this.toggleFavorite}
                    />
                )}

                {showModal && selectedMovie && (
                    <MovieModal
                        movie={selectedMovie}
                        onClose={this.closeModal}
                        isFavorite={favorites.includes(selectedMovie.id)}
                        onToggleFavorite={() => this.toggleFavorite(selectedMovie.id)}
                    />
                )}

                <footer className="app-footer">
                    <p>© 2024 CineVault - Your Ultimate Movie Companion</p>
                </footer>
            </div>
        );
    }
}

export default App;