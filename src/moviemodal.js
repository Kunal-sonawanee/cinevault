import React from 'react';
import './moviemodal.css';

const MovieModal = ({ movie, onClose, isFavorite, onToggleFavorite }) => {
    const openTrailer = () => {
        if (movie.trailerUrl) {
            window.open(movie.trailerUrl, '_blank');
        }
    };

    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('modal-backdrop')) {
            onClose();
        }
    };

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    ✕
                </button>
                
                <div className="modal-header">
                    <img 
                        src={movie.bannerUrl} 
                        alt={movie.name}
                        className="modal-poster"
                    />
                    <div className="modal-info">
                        <h2 className="modal-title">{movie.name}</h2>
                        <div className="modal-meta">
                            <span className="year">{movie.releaseYear}</span>
                            <span className="duration">{movie.duration}</span>
                            <span className="rating">⭐ {movie.rating}/10</span>
                        </div>
                        <p className="genre">{movie.genre}</p>
                        <p className="country">🌍 {movie.country}</p>
                        {movie.director && <p className="director">🎬 Directed by {movie.director}</p>}
                    </div>
                </div>

                {movie.description && (
                    <div className="modal-description">
                        <h3>Synopsis</h3>
                        <p>{movie.description}</p>
                    </div>
                )}

                {movie.cast && movie.cast.length > 0 && (
                    <div className="modal-cast">
                        <h3>Cast</h3>
                        <div className="cast-list">
                            {movie.cast.map((actor, index) => (
                                <span key={index} className="cast-member">
                                    {actor}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                <div className="modal-actions">
                    <button 
                        className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
                        onClick={onToggleFavorite}
                    >
                        {isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
                    </button>
                    
                    {movie.trailerUrl && (
                        <button className="trailer-btn" onClick={openTrailer}>
                            ▶️ Watch Trailer
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieModal;
