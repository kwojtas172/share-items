import React from 'react';
import decoration from "../images/Decoration.svg";

export default function HomeAboutUs() {
        return (
            <section className="home-about-us" id="about-us">
                <div className="home-about-us__content">
                    <h3 className="home-about-us__content__title">O nas</h3>
                    <img className="home-about-us__content__img" src={decoration} alt="decoration-line" />
                    <p className="home-about-us__content__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante metus dictum at tempor commodo ullamcorper a. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Dui accumsan sit amet nulla facilisi morbi. </p>
                </div>
                <div className="home-about-us__background"></div>
            </section>
        )
}
