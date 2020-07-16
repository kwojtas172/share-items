import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';
import image from "../images/Decoration.svg";
import ShareItemsForm from "./ShareItemsForm";
import HomeFooter from "./HomeFooter";

export default class ShareItem extends Component {
    
    render() {
        const {isLogin, displayName} = this.props;
        return (
            <div className="share-items">
                <div className="main-header__nav-wrapper right0">
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
                <div className="share-items__header">
                    <h2 className="share-items__header__primary-title">Oddaj rzeczy, których już nie chcesz <br></br><span className="share-items__header__primary-title__text">potrzebującym</span></h2>
                    <img className="share-items__header__img" src={image} alt="decoration-line" />
                    <h3 className="share-items__header__secondary-title">Wystarczą 4 proste kroki:</h3>
                    <div className="share-items__header__content">
                        <div className="share-items__header__content__square">
                            <p className="share-items__header__content__square__text">1</p>
                            <p className="share-items__header__content__square__text">Wybierz <br></br>rzeczy</p>
                        </div>
                        <div className="share-items__header__content__square">
                            <p className="share-items__header__content__square__text">2</p>
                            <p className="share-items__header__content__square__text">Spakuj je<br></br> w worki</p>
                        </div>
                        <div className="share-items__header__content__square">
                            <p className="share-items__header__content__square__text">3</p>
                            <p className="share-items__header__content__square__text">Wybierz<br></br> fundację</p>
                        </div>
                        <div className="share-items__header__content__square">
                            <p className="share-items__header__content__square__text">4</p>
                            <p className="share-items__header__content__square__text">Zamów <br></br>kuriera</p>
                        </div>
                    </div>
                </div>
                <ShareItemsForm />
                <HomeFooter />
            </div>
        )
    }
}
