import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Details() {
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);
    const selectedMovie = useSelector(store => store.selectedMovie);

    return (
        <h1>Movie Detail</h1>

    )
}


export default Details;