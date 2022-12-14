import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const selectedMovie = useSelector(store => store.selectedMovie);

    useEffect(() => {
        console.log('page load.');
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const chooseMovie = (movieId) => {
        console.log('in chooseMovie');
        // Pass selected movie to reducer
        dispatch({ type: 'SELECT_MOVIE', payload: movieId});
        // history.push
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} onClick={() => chooseMovie(movie.id)} />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;