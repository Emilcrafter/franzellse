import React from 'react';
import "./MovieThumbnail.css";
import {getImageURL, getMovieTitle} from "../MovieApp";


export default function MovieThumbnail(props) {

    return (<div className={"MovieThumbnail"}>
        <a style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
            <div className={'thumbnail-image'} style={{
                backgroundImage: props.movie ? getImageURL(props.movie.poster_path) : 'none',
                width: '100%'
            }}/>
            <div className={"thumbnail-footer"}>
                <h3 className={'thumbnail-title'}>
                    {getMovieTitle(props.movie)}
                </h3>
                <div className={"thumbnail-genre-container"}>
                {props.movie.genres.map(
                    (genre) => <h4 className={'thumbnail-genre'}>
                        {genre}
                    </h4>
                )}
                </div>
                <div className={"rating-heart"}>
                    <img src={"https://cdn-icons-png.flaticon.com/512/2107/2107845.png"} alt={"rating heart grey"} className={"grayscale"}/>
                    <img src={"https://cdn-icons-png.flaticon.com/512/2107/2107845.png"} alt={"rating heart"} className={"red-heart"}
                         style={{clipPath: 'inset(' + (100 - props.movie.vote_average * 10) +  '% 0 0 0)'}}/>
                    <h2 className={"rating"}>{
                        props.movie.vote_average
                    }</h2>
                </div>
            </div>

        </a>
    </div>);
}