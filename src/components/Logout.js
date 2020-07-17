import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';
import image from "../images/Decoration.svg";

export default class LogOut extends Component {
    render() {
        const {isLogin, displayName} = this.props;
        return (
            <div className="container-nav-form">
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
                        <li className="main-header__nav-scroll__list__element"><NavLink to="/" activeclass="dark-border" className="main-header__nav-scroll__list__element__link">Start</NavLink></li>
                            <li className="main-header__nav-scroll__list__element"><Link to="what-is-going-on" activeclass="dark-border" className="main-header__nav-scroll__list__element__link">O co chodzi?</Link></li>
                            <li className="main-header__nav-scroll__list__element"><Link to="about-us" activeclass="dark-border" className="main-header__nav-scroll__list__element__link">O nas</Link></li>
                            <li className="main-header__nav-scroll__list__element"><Link to="fundation" activeclass="dark-border" className="main-header__nav-scroll__list__element__link">Fundacja i organizacje </Link></li>
                            <li className="main-header__nav-scroll__list__element"><Link to="contact" activeclass="dark-border" className="main-header__nav-scroll__list__element__link">Kontakt</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="logout-content">
                    <h2>Wylogowanie nastąpiło <br></br><span>pomyślnie!</span></h2>
                    <img src={image} alt="decoration-line" />
                    <NavLink to="/"><button className="basic-btn">Strona główna</button></NavLink>
                </div>
            </div>
        )
    }
}
