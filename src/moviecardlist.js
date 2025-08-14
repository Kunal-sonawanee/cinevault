import React from "react";
import Movie from './moviecard';
import './moviecardlist.css';

const MovieCard = ({ movies, onMovieClick, favorites, onToggleFavorite }) => {
    if (movies.length === 0) {
        return (
            <div className="no-movies">
                <div className="no-movies-icon">🎬</div>
                <h3>No movies found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        );
    }

    return (
        <div className="movies-grid">
            {movies.map((movie) => (
                <Movie 
                    key={movie.id} 
                    movie={movie}
                    onMovieClick={onMovieClick}
                    isFavorite={favorites.includes(movie.id)}
                    onToggleFavorite={onToggleFavorite}
                />
            ))}
        </div>
    );
};

export default MovieCard;