import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';
import image from "../images/Decoration.svg";
import ShareItemsForm from "./ShareItemsForm";
import HomeFooter from "./HomeFooter";

export default class ShareItem extends Component {
    
    render() {
        return (
            <div className="share-items">
                <div className="main-header__nav-wrapper right0">
                    <nav className="main-header__nav-router">
                        <ul>
                            {this.props.isLogin && <li>Cześć {this.props.displayName}</li>}
                            <li>
                                <NavLink to={this.props.isLogin ? "/oddaj-rzeczy" : "/logowanie"} className={this.props.isLogin ? "gold-border" : ""}>{this.props.isLogin ? "Oddaj rzeczy" : "Zaloguj"}</NavLink>
                            </li>
                            <li>
                                <NavLink to={this.props.isLogin ? "/wylogowano" : "/rejestracja"} className={this.props.isLogin ? "" : "gold-border"} >{this.props.isLogin ? "Wyloguj" : "Załóż konto"}</NavLink>
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
                <div className="share-items__header">
                    <h2>Oddaj rzeczy, których już nie chcesz <br></br><span>potrzebującym</span></h2>
                    <img src={image} alt="decoration-line" />
                    <h3>Wystarczą 4 proste kroki:</h3>
                    <div className="share-items__header__wrapper">
                        <div><p>1</p><p>Wybierz <br></br>rzeczy</p></div>
                        <div><p>2</p><p>Spakuj je<br></br> w worki</p></div>
                        <div><p>3</p><p>Wybierz<br></br> fundację</p></div>
                        <div><p>4</p><p>Zamów <br></br>kuriera</p></div>
                    </div>
                </div>
                <ShareItemsForm />
                <HomeFooter />
            </div>
        )
    }
}
