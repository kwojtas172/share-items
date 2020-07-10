import React, { Component } from 'react';
import image from "../images/Decoration.svg";
import { NavLink } from "react-router-dom";

export default class Form extends Component {
    
    render() {
        if(this.props.isLogin) {
            return (
                <div className="form-wrapper">
                    <h3>Zaloguj się</h3>
                    <img src={image} alt="decoration-line" />
                    <form className="form">
                        <label><span>Email</span><input type="email" /></label>
                        <label><span>Hasło</span><input type="password" /></label>
                        <div className="form-wrapper__btns">
                        <NavLink to="/rejestracja"><button className="basic-btn non-border-btn">Załóż konto</button></NavLink>
                            <button className="basic-btn">Zaloguj się</button>
                        </div>
                    </form>
                </div>
            )
        } if(this.props.isRegister) {
            return (
                <div className="form-wrapper">
                    <h3>Załóż konto</h3>
                    <img src={image} alt="decoration-line" />
                    <form className="form">
                        <label><span>Email</span><input type="email" /></label>
                        <label><span>Hasło</span><input type="password" /></label>
                        <label><span>Powtórz hasło</span><input type="password" /></label>
                        <div className="form-wrapper__btns">
                            <button className="basic-btn">Załóż konto</button>
                            <NavLink to="/logowanie"><button className="basic-btn non-border-btn">Zaloguj się</button></NavLink>
                        </div>
                    </form>
                </div>
            )
        }
    }
}
