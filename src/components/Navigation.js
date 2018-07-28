import React, { Component } from 'react';

export default class Navigation extends Component {
    render() {
        return(
            <div className="navigation">
                <a href="#">Home</a>
                <a href="#">Contact</a>
                <a href="#">Speakers</a>
                <a href="#">Workshops</a>
                <a href="#">Sponsors</a>
                <a href="#">Booth</a>
            </div>
        )
    }
}
