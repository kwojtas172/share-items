import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';
import image from "../images/Decoration.svg";

export default class HomeHeaderNavigation extends Component {
    render() {
        return (
            <div className="main-header__wrapper" id="start">
                <div className="main-header__nav-wrapper">
                    <nav className="main-header__nav-router">
                        <ul>
                            <li>
                                <NavLink to="/logowanie">Zaloguj</NavLink>
                            </li>
                            <li>
                                <NavLink to="/rejestracja" className="gold-border" >Załóż konto</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <nav className="main-header__nav-scroll">
                        <ul>
                            <li><Link to="start" activeClass="dark-border" spy={true} smooth={true} duration={500}>Start</Link></li>
                            <li><Link to="what-is-going-on" activeClass="dark-border" spy={true} smooth={true} duration={500}>O co chodzi?</Link></li>
                            <li><Link to="about-us" activeClass="dark-border" spy={true} smooth={true} duration={500}>O nas</Link></li>
                            <li><Link to="fundation" activeClass="dark-border" spy={true} smooth={true} duration={500}>Fundacja i organizacje </Link></li>
                            <li><Link to="contact" activeClass="dark-border" spy={true} smooth={true} duration={500}>Kontakt</Link></li>
                        </ul>
                    </nav>
                </div>
                <h1 className="main-header__title">Zacznij pomagać! <br></br>
        Oddaj niechciane rzeczy w zaufane ręce.</h1>
                <img src={image} alt="decoration line" className="decoration-line" />
                <div className="main-header__btns">
                    <button className="basic-btn">oddaj rzeczy</button>
                    <button className="basic-btn">zorganizuj zbiórkę</button>
                </div>
            </div>
        )
    }
}
