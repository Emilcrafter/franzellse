import React from "react";
import {MovieAppContext} from "../MovieApp";
import "./NavDots.css"


const numberOfDots = 5;
const interDot = "·"

const makeDots = (numberOfDots, context) => {
    let dots = [];
    for (let i = 0; i < numberOfDots; i++) {
        if(i === context.bannerIndex){
            dots.push(<div className={"dot selected"}>{interDot}</div>)
        }
        else {
            dots.push(<div className={"dot"}>{interDot}</div> )
        }
    }
    return dots;
}

export default function NavDots() {


        return (
            <MovieAppContext.Consumer>
                { context =>
                    <div className={"navDots"}>
                        {makeDots(numberOfDots, context)}
                    </div>
                }
            </MovieAppContext.Consumer>
        );
}
