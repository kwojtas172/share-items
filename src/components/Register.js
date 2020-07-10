import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';
import Form from "./Form";

export default class Login extends Component {
    render() {
        return (
            <div className="container-nav-form">
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
                            <li><NavLink to="/" activeClass="dark-border" spy={true} smooth={true} duration={500}>Start</NavLink></li>
                            <li><Link to="what-is-going-on" activeClass="dark-border" spy={true} smooth={true} duration={500}>O co chodzi?</Link></li>
                            <li><Link to="about-us" activeClass="dark-border" spy={true} smooth={true} duration={500}>O nas</Link></li>
                            <li><Link to="fundation" activeClass="dark-border" spy={true} smooth={true} duration={500}>Fundacja i organizacje </Link></li>
                            <li><Link to="contact" activeClass="dark-border" spy={true} smooth={true} duration={500}>Kontakt</Link></li>
                        </ul>
                    </nav>
                </div>
                <Form isRegister={true}/>
            </div>
        )
    }
}
