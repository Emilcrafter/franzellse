import React from 'react';
import './NavButton.css';

export class NavButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selected: this.props.selected};
    }
    buttonColor(){
        if(this.state.selected){
            return {color: "yellow"};
        }
        else return {color: "white"};
    }

    render() {
        return (
            <button onClick = {this.props.onClick} className={"nav-button"}>
                {this.props.children}
            </button>
        );
    }
}