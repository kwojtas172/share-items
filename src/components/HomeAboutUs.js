import React, { Component } from 'react';
import decoration from "../images/Decoration.svg";

export default class HomeAboutUs extends Component {
    render() {
        return (
            <section className="home-about-us" id="about-us">
                <div className="home-about-us__text">
                    <h3>O nas</h3>
                    <img src={decoration} alt="decoration-line" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante metus dictum at tempor commodo ullamcorper a. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Dui accumsan sit amet nulla facilisi morbi. </p>
                </div>
                <div className="home-about-us__img"></div>
            </section>
        )
    }
}
