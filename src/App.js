import React, { Component } from 'react';

import SearchBox from './searchbox';
import MovieCard from './moviecardlist';
import { movies } from './movies';

class App extends Component {
    constructor() {
        super();
        this.state = { 
            searchValue: '',
            movies: movies
            };
    }

    searchChange = (e) => {
        this.setState({ searchValue: e.target.value });
    }

    render() {

        const filted_movies = this.state.movies.filter(movie => {
            return movie.name.toLowerCase().includes(this.state.searchValue.toLowerCase());
        });

        console.log(this.state.searchValue); // for testing purposes
        console.log(filted_movies); // for testing

        return (
            <div className='tc'>
                <h1 className='tc bg-black white sticky-top'>Blockbuster Movies</h1>
                <SearchBox onSearchChange={this.searchChange} />
                <MovieCard movies={filted_movies} />
            </div>
        );
    }
}
export default App;