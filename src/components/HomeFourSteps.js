import React, { Component } from 'react';
import image from "../images/Decoration.svg";
import icon1 from "../images/Icon-1.svg";
import icon2 from "../images/Icon-2.svg";
import icon3 from "../images/Icon-3.svg";
import icon4 from "../images/Icon-4.svg";

export default class HomeFourSteps extends Component {
    render() {
        return (
            <section className="four-steps">
                <h2>Wystarczą 4 proste kroki</h2>
                <img src={image} alt="line-decoration" />
                <div className="four-steps__wrapper">
                    <div className="four-steps__wrapper__content">
                        <img src={icon1} alt="koszulka" />
                        <h3>Wybierz rzeczy</h3>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="four-steps__wrapper__content">
                        <img src={icon2} alt="pakunek" />
                        <h3>Spakuj je</h3>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className="four-steps__wrapper__content">
                        <img src={icon3} alt="lupa" />
                        <h3>Zdecyduj komu chcesz pomóc</h3>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div className="four-steps__wrapper__content">
                        <img src={icon4} alt="kółko ze strzałek" />
                        <h3>Zamów kuriera</h3>
                        <p>kurier przyjedze w dogodnym terminie</p>
                    </div>
                </div>
                <button className="basic-btn">oddaj rzeczy</button>
            </section>
        )
    }
}
