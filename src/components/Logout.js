import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';
import image from "../images/Decoration.svg";

export default class LogOut extends Component {
    render() {
        return (
            <div className="container-nav-form">
                <div className="main-header__nav-wrapper">
                    <nav className="main-header__nav-router">
                        <ul>
                            <li>
                                <NavLink to="/logowanie"  >Zaloguj</NavLink>
                            </li>
                            <li>
                                <NavLink to="/rejestracja" className="gold-border" >Załóż konto</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <nav className="main-header__nav-scroll">
                        <ul>
                            <li><NavLink to="/" activeclass="dark-border">Start</NavLink></li>
                            <li><Link to="what-is-going-on" activeclass="dark-border">O co chodzi?</Link></li>
                            <li><Link to="about-us" activeclass="dark-border">O nas</Link></li>
                            <li><Link to="fundation" activeclass="dark-border">Fundacja i organizacje </Link></li>
                            <li><Link to="contact" activeclass="dark-border">Kontakt</Link></li>
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
