import React, { Component } from 'react';
import HeaderImg from '../img/header-img.png';
import Navigation from './Navigation';
import '../css/Header.css';

export default class Header extends Component {
    render() {
        return (
            <header>
              <img src={HeaderImg}/>
              <div className="headerTitle">
                <h1>
                  UW Blockchain Expo
                </h1>
                <h3>
                  <i>Connecting students and industry in blockchain</i>
                </h3>
              </div>
              <Navigation/>
            </header>
        )
    }
}