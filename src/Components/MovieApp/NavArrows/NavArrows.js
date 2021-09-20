import React from "react";
import {MovieAppContext} from "../MovieApp";
import "./NavArrows.css"
import arrow from './arrow.png';


const changeIndex = (context, delta) => {
    if(!context.currentFeaturedMovie){
        return null;
    }
    if(context.bannerIndex + delta > context.maxIndex) {
        context.setBannerIndex(0)
    }
    else if(context.bannerIndex + delta === -1){
        context.setBannerIndex(context.maxIndex)
    }
    else {
        context.setBannerIndex(context.bannerIndex + delta)
    }
}

export default function NavArrows() {

    return (
        <MovieAppContext.Consumer>
            {context => <div className={"arrows"}>
                    <img src={arrow} onClick={() => changeIndex(context, -1)} alt={"previous banner image"}/>
                    <img src={arrow} onClick={() => changeIndex(context, 1)} className={"upside-down"} alt={"next banner image"}/>
            </div>}
        </MovieAppContext.Consumer>
            );
}
