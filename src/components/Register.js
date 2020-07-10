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
                                <NavLink to="logowanie">Zaloguj</NavLink>
                            </li>
                            <li>
                                <NavLink to="rejestracja" className="gold-border" onClick={e=>e.preventDefault()} >Załóż konto</NavLink>
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
                <Form isRegister={true}/>
            </div>
        )
    }
}
