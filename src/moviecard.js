import React from "react";
import './moviecard.css';

const Movie = ({ movie, onMovieClick, isFavorite, onToggleFavorite }) => {
    const handleClick = () => {
        onMovieClick(movie);
    };

    const handleFavoriteClick = (e) => {
        e.stopPropagation();
        onToggleFavorite(movie.id);
    };

    return (
        <div className="movie-card" onClick={handleClick}>
            <div className="movie-image-container">
                <img 
                    className="movie-image" 
                    src={movie.bannerUrl} 
                    alt={movie.name}
                    loading="lazy"
                />
                <div className="movie-overlay">
                    <button className="play-button">
                        ▶️ View Details
                    </button>
                </div>
                <button 
                    className={`favorite-button ${isFavorite ? 'favorited' : ''}`}
                    onClick={handleFavoriteClick}
                    aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                    {isFavorite ? '❤️' : '🤍'}
                </button>
                {movie.rating && (
                    <div className="rating-badge">
                        ⭐ {movie.rating}
                    </div>
                )}
            </div>
            
            <div className="movie-info">
                <h3 className="movie-title">{movie.name}</h3>
                <p className="movie-genre">{movie.genre}</p>
                <div className="movie-meta">
                    <span className="movie-year">{movie.releaseYear}</span>
                    {movie.country && <span className="movie-country">{movie.country}</span>}
                </div>
            </div>
        </div>
    );
};

export default Movie;