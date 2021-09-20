import React from "react";
import "./MovieListContainer.css";
import MovieList from "../MovieList/MovieList";
import MovieListNav from "../MovieListNav/MovieListNav";



export default function MovieListContainer() {

    return (<div id={'MovieListContainer'}>
        <MovieListNav/>
        <MovieList>

        </MovieList>
    </div>)
}