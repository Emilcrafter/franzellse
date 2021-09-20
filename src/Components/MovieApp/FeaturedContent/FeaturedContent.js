import React from 'react';
import {MovieAppContext} from "../MovieApp";
import("./FeaturedContent.css");


function formatDate(date) {
    if(!date){
        return null;
    }
    const months = {
        '01' : 'Jan',
        '02' : 'Feb',
        '03' : 'Mar',
        '04' : 'Apr',
        '05' : 'May',
        '06' : 'Jun',
        '07' : 'Jul',
        '08' : 'Aug',
        '09' : 'Sep',
        '10' : 'Oct',
        '11' : 'Nov',
        '12' : 'Dec'
    }
    let subs = date.split('-')
    let year = subs[0]
    //console.log(subs[1])
    let month = months[subs[1]] + ','

    let day = subs[2]
    return [day, month, year].join(' ')
}

export class FeaturedContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: this.props.movie,
        }

    }




    render() {
        return (
            <MovieAppContext.Consumer>
                 { context =>
                    <div className={'container'}>
                        <div className={"title-genres"}>
                        <h1>
                            {context.currentFeaturedMovie ? (context.currentFeaturedMovie.name ?
                                context.currentFeaturedMovie.name :
                                context.currentFeaturedMovie.title) : "hej"}
                        </h1>
                        <div className={'genres'}>
                            {context.currentFeaturedMovie.genres ?
                                context.currentFeaturedMovie.genres.map((g, i) => <h2 key={i}>{g}</h2>) :
                                <div/>
                            }
                        </div>
                        </div>
                        <button>
                            Watch Trailer
                        </button>
                        {context.currentFeaturedMovie ?
                            <div>
                                <h3 className={'in-theaters'}>
                                    {context.currentFeaturedMovie.release_date ? "In theaters" : "First aired"}
                                </h3>
                                <h4 className={'date'}>
                                    {context.currentFeaturedMovie.release_date ? formatDate(context.currentFeaturedMovie.release_date) :
                                        formatDate(context.currentFeaturedMovie.first_air_date)}
                                </h4>
                            </div> : null}
                    </div>}
            </MovieAppContext.Consumer>
        )
}
}
