import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';
import image from "../images/Decoration.svg";

export default class HomeHeaderNavigation extends Component {
    render() {
        const {isLogin, displayName} = this.props;
        return (
            <div className="main-header__wrapper" id="start">
                <div className="main-header__nav-wrapper">
                    <nav className="main-header__nav-router">
                        <ul className="main-header__nav-router__list">
                            {isLogin && <li className="main-header__nav-router__list__element">Cześć {displayName}</li>}
                            <li className="main-header__nav-router__list__element">
                                <NavLink to={isLogin ? "/oddaj-rzeczy" : "/logowanie"} className={isLogin ? "main-header__nav-router__list__element__link gold-border" : "main-header__nav-router__list__element__link"}>{isLogin ? "Oddaj rzeczy" : "Zaloguj"}</NavLink>
                            </li>
                            <li className="main-header__nav-router__list__element">
                                <NavLink to={isLogin ? "/wylogowano" : "/rejestracja"} className={isLogin ? "main-header__nav-router__list__element__link" : "main-header__nav-router__list__element__link gold-border"} onClick={isLogin ? this.props.logout : null} >{isLogin ? "Wyloguj" : "Załóż konto"}</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <nav className="main-header__nav-scroll">
                        <ul className="main-header__nav-scroll__list">
                            <li className="main-header__nav-scroll__list__element"><Link to="start" activeClass="dark-border" className="main-header__nav-scroll__list__element__link" spy={true} smooth={true} duration={500}>Start</Link></li>
                            <li className="main-header__nav-scroll__list__element"><Link to="what-is-going-on" activeClass="dark-border" className="main-header__nav-scroll__list__element__link" spy={true} smooth={true} duration={500}>O co chodzi?</Link></li>
                            <li className="main-header__nav-scroll__list__element"><Link to="about-us" activeClass="dark-border" className="main-header__nav-scroll__list__element__link" spy={true} smooth={true} duration={500}>O nas</Link></li>
                            <li className="main-header__nav-scroll__list__element"><Link to="fundation" activeClass="dark-border" className="main-header__nav-scroll__list__element__link" spy={true} smooth={true} duration={500}>Fundacja i organizacje </Link></li>
                            <li className="main-header__nav-scroll__list__element"><Link to="contact" activeClass="dark-border" className="main-header__nav-scroll__list__element__link" spy={true} smooth={true} duration={500}>Kontakt</Link></li>
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
