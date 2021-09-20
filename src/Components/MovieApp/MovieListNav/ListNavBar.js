import React, {useEffect, useState} from "react";
import "./MovieListNav.css"

export default function ListNavBar(props){


    let currentlySelected = 0;

    let [buttons, setButtons] = useState([])

    useEffect(() => {
            let buttonsSelected = [<div className={"nav-item selected"} >
                In theaters
            </div>,
                <div className={"nav-item selected"}>
                    Coming soon
                </div>,
                <div className={"nav-item selected"}>
                    Charts
                </div>,
                <div className={"nav-item selected"}>
                    Tv series
                </div>,
                <div className={"nav-item selected"}>
                    Trailers
                </div>,
            ]
            let buttonsUnselected = [<div className={"nav-item"}>
                In theaters
            </div>,
                <div className={"nav-item"}>
                    Coming soon
                </div>,
                <div className={"nav-item"}>
                    Charts
                </div>,
                <div className={"nav-item"}>
                    Tv series
                </div>,
                <div className={"nav-item"}>
                    Trailers
                </div>,
                <div className={"nav-item dropdown"}>
                    More
                </div>]
        setButtons(buttonsUnselected, setButtons(
            buttons.slice(0,currentlySelected) + buttonsSelected[currentlySelected],
            buttons.slice(currentlySelected, buttons.length)));
        }
        , [buttons, currentlySelected])

    return(
        <div>
            <div id={"all-items"}>
                {buttons}
                <div className={"nav-item dropdown"}>
                    More
                </div>
                <div className={"nav-item"}>A</div>
            </div>



        </div>
    )
}