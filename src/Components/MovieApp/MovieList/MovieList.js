import React from 'react';
import {matchGenres, MovieAppContext} from "../MovieApp";
import MovieThumbnail from "../MovieThumbnail/MovieThumbnail";
import "./MovieList.css";

export default function MovieList(){


    return (<div>
        <MovieAppContext.Consumer>
            {
                context => <div id={"movielist"}>
                    {context.movies.results ? context.movies.results.map(
                        movie => {
                            movie.genres = matchGenres(context.genreResponse, movie);
                            return(
                                <MovieThumbnail movie = {movie}/>
                            )
                        }
                    ) : null}
                </div>
            }
        </MovieAppContext.Consumer>
    </div>)
}