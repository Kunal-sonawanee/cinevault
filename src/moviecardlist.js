import React from "react";
import Movie from './moviecard';

const MovieCard = ({movies}) => {
    const cardComponet = movies.map((movie, index) => {
        return (
            <Movie key={index} name={movie.name} url={movie.bannerUrl} genre = {movie.genre} />
        );
    });

    return (
        <div>{cardComponet}</div>
    )
}

export default MovieCard;