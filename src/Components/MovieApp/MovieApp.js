import React from 'react';
import {NavButton} from "./NavButton/NavButton";
import {FeaturedContent} from "./FeaturedContent/FeaturedContent";
import NavDots from "./NavDots/NavDots";
import NavArrows from "./NavArrows/NavArrows";
import MovieListContainer from "./MovieListContainer/MovieListContainer";
import("./MovieApp.css");

const apiReq = "https://api.themoviedb.org/3/trending/all/day?api_key=92b5e938987fec6f91bfac8f2a3b3a7d";
const genreReq = "https://api.themoviedb.org/3/genre/movie/list?api_key=92b5e938987fec6f91bfac8f2a3b3a7d&language=en-US";

const imgURL = "https://image.tmdb.org/t/p/";

export const MovieAppContext = React.createContext({
    movies: [],
    currentFeaturedMovie: {},
    setBannerIndex : () => {},
    bannerIndex : 0,
    maxIndex : 0,
    genreResponse: {},

})

export function matchGenres(genres, movie) {
    let matchedGenres = [];
    genres.genres.forEach(
        (e) => {
            if (
                movie.genre_ids.includes(e.id)) {
                matchedGenres.push(e.name);
            }
        }
    )
    if(matchedGenres.length > 3) {
        matchedGenres = matchedGenres.slice(0, 3);
    }
    return matchedGenres;
}

export function getMovieTitle(movie) {
    return(movie ? (movie.title ? movie.title : movie.name) : null);
}

export function getImageURL(path, size = "original") {
    if(path === null){
        return "none";
    }
    else {
        return "url(" + imgURL + size + path + ")";
    }}

export class MovieApp extends React.Component {
    constructor(props) {
        super(props);
        this.linkInfo = {}
        this.state = {
            response: {},
            genreResponse : {},
            movie: {},
            background: "none",
            bannerIndex: 0,
        };
        this.setBannerIndex = this.setBannerIndex.bind(this);
    }

    componentDidMount() {

        const fetchData = () => {
            return fetch(apiReq)
                .then((response) => response.json())
                .then((data) => this.setState({response: data}))
                .finally(this.instateData)
        }
        const fetchGenres = () => {
            return fetch(genreReq)
                .then((response => response.json()))
                .then((data) => this.setState({genreResponse: data}))
                .finally(fetchData)
        }
        this.instateData = this.instateData.bind(this);
        console.log(fetchGenres())
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if((prevState.bannerIndex !== this.state.bannerIndex) && this.state.genreResponse.genres) {
            console.log(JSON.stringify(JSON.stringify(this.state.response) + "RESPONSE"))
            let newMovie = this.state.response.results[this.state.bannerIndex];
            console.log(JSON.stringify(newMovie + "dhsjagd"))
            newMovie.genres = matchGenres(this.state.genreResponse, newMovie)
            this.setState({movie: newMovie});
            this.setState({background: getImageURL(this.state.response.results[this.state.bannerIndex].backdrop_path)});
        }
    }

    instateData(){
        //console.log(this.state.response);
        this.setState({movie: this.state.response.results[0]});
        let newMovie = this.state.movie;
        newMovie.genres = matchGenres(this.state.genreResponse, newMovie);
        this.setState({movie: newMovie});
        this.setState({background: getImageURL(this.state.response.results[0].backdrop_path)},
            () => this.state.response.results.forEach((r) => {
                const img = new Image();
                img.src = r.backdrop_path;
            }));
    }

    setBannerIndex(index){
        this.setState({
            bannerIndex : index
        })
    }

    render(){

        return(
            <MovieAppContext.Provider value={
                {
                    movies: this.state.response,
                    setBannerIndex: this.setBannerIndex,
                    currentFeaturedMovie: this.state.movie,
                    bannerIndex: this.state.bannerIndex,
                    maxIndex: 4,
                    genreResponse: this.state.genreResponse
                }
            }>
                <div >
                    <section id={"banner"} style={{backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), '+ this.state.background}}>
                    <header>
                        <div id="logo">
                            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"} alt={"logo"}/>
                        </div>
                        <nav>
                            <NavButton>Movies</NavButton>
                            <NavButton>Celebs & Photos</NavButton>
                            <NavButton>Community</NavButton>
                            <NavButton>News</NavButton>
                        </nav>
                        <div className={"profile-pic"}/>
                    </header>
                        <div className={"FeaturedContainer"}>
                            <NavDots/>
                            <FeaturedContent movie={this.state.movie ? this.state.movie : {}}/>
                            <NavArrows/>
                        </div>
                    </section>
                    <section id={"MovieListContainer"}>
                        <MovieListContainer>

                        </MovieListContainer>
                    </section>
                </div>
            </MovieAppContext.Provider>
        );
    }
}
