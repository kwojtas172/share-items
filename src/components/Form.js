import React, { Component } from 'react';
import image from "../images/Decoration.svg";
import { NavLink } from "react-router-dom";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailLogin: "",
            passwordLogin: "",
            emailRegister: "",
            passwordRegister: "",
            repeatPassword: "",
            emailWrongLogin: false,
            passwordWrongLogin: false,
            emailWrongRegister: false,
            passwordWrongRegister: false,
            repeatPasswordWrong: false
        }
    }

    handleSubmitLogin = e => {
        e.preventDefault();

        if (this.state.emailLogin.length < 5 || this.state.emailLogin.indexOf("@") === -1 || this.state.emailLogin.indexOf(".") === -1) {
            this.setState({
                emailWrongLogin: true
            })
        }

        if (this.state.emailLogin.length > 4 && this.state.emailLogin.indexOf("@") !== -1 && this.state.emailLogin.indexOf(".") !== -1) {
            this.setState({
                emailWrongLogin: false
            })
        }

        if(this.state.passwordLogin.length < 6) {
            this.setState({
                passwordWrongLogin: true
            })
        }

        if(this.state.passwordLogin.length > 5) {
            this.setState({
                passwordWrongLogin: false
            })
        }

        if(this.state.emailLogin.length > 4 && this.state.emailLogin.indexOf("@") !== -1 && this.state.emailLogin.indexOf(".") !== -1 && this.state.passwordLogin.length > 5) {
            this.props.submitOnLogin(this.state.emailLogin, this.state.passwordLogin)
            console.log(this.props.location)
  
        }
    }

    //final form


    handleSumitRegister = e => {
        e.preventDefault();

        if (this.state.emailRegister.length < 5 || this.state.emailRegister.indexOf("@") === -1 || this.state.emailRegister.indexOf(".") === -1) {
            this.setState({
                emailWrongRegister: true
            })
        }

        if (this.state.emailRegister.length > 4 && this.state.emailRegister.indexOf("@") !== -1 && this.state.emailRegister.indexOf(".") !== -1) {
            this.setState({
                emailWrongRegister: false
            })
        }

        if(this.state.passwordRegister.length < 6) {
            this.setState({
                passwordWrongRegister: true
            })
        }

        if(this.state.passwordRegister.length > 5) {
            this.setState({
                passwordWrongRegister: false
            })
        }


        if(this.state.passwordRegister.localeCompare(this.state.repeatPassword) !== 0) {
            this.setState({
                repeatPasswordWrong: true
            })
        }

        if(this.state.passwordRegister.localeCompare(this.state.repeatPassword) === 0) {
            this.setState({
                repeatPasswordWrong: false
            })
        }

        if(this.state.emailRegister.length > 4 && this.state.emailRegister.indexOf("@") !== -1 && this.state.emailRegister.indexOf(".") !== -1 && this.state.passwordRegister.length > 5 && this.state.passwordRegister.localeCompare(this.state.repeatPassword) === 0) {
            this.props.submitOnRegister(this.state.emailRegister, this.state.passwordRegister)
        }
    }
    
    
    render() {//kompozyji - this.props.children
        if(this.props.isLogin) {
            return (
                <div className="form-wrapper">
                    <h3>Zaloguj się</h3>
                    <img src={image} alt="decoration-line" />
                    <form className="form" onSubmit={this.handleSubmitLogin}>
                        <label><span>Email</span><input type="email" onChange={e=>this.setState({emailLogin: e.target.value, emailWrongLogin: false})} />{this.state.emailWrongLogin && <p className="wrong-info">Podany email jest nieprawidłowy!</p>}</label>
                        <label><span>Hasło</span><input type="password" onChange={e=>this.setState({passwordLogin: e.target.value, passwordWrongLogin: false})} />{this.state.passwordWrongLogin && <p className="wrong-info">Podane hasło jest nieprawidłowe!</p>}</label>
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
                    <form className="form" onSubmit={this.handleSumitRegister}>
                        <label><span>Email</span><input type="email" onChange={e=>this.setState({emailRegister: e.target.value, emailWrongRegister: false})} />{this.state.emailWrongRegister && <p className="wrong-info">Podany email jest nieprawidłowy</p>}</label>
                        <label><span>Hasło</span><input type="password" onChange={e=>this.setState({passwordRegister: e.target.value, passwordWrongRegister: false})} />{this.state.passwordWrongRegister && <p className="wrong-info">Podane hasło jest nieprawidłowe!</p>}</label>
                        <label><span>Powtórz hasło</span><input type="password" onChange={e=>this.setState({repeatPassword: e.target.value, repeatPasswordWrong: false})} />{this.state.repeatPasswordWrong && <p className="wrong-info">Podane hasła nie są identyczne!</p>}</label>
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
