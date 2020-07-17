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
            repeatPasswordWrong: false,
            registerSuccess: false
        }
    }

    handleSubmitLogin = e => {
        const {emailLogin, passwordLogin} = this.state;
        e.preventDefault();

        if (emailLogin.length < 5 || emailLogin.indexOf("@") === -1 || emailLogin.indexOf(".") === -1) {
            this.setState({
                emailWrongLogin: true
            })
        }

        if (emailLogin.length > 4 && emailLogin.indexOf("@") !== -1 &&emailLogin.indexOf(".") !== -1) {
            this.setState({
                emailWrongLogin: false
            })
        }

        if(passwordLogin.length < 6) {
            this.setState({
                passwordWrongLogin: true
            })
        }

        if(passwordLogin.length > 5) {
            this.setState({
                passwordWrongLogin: false
            })
        }

        if(emailLogin.length > 4 && emailLogin.indexOf("@") !== -1 && this.state.emailLogin.indexOf(".") !== -1 && passwordLogin.length > 5) {
            this.props.submitOnLogin(emailLogin, passwordLogin)
            console.log(this.props.location)
  
        }
    }


    handleSumitRegister = e => {
        const {emailRegister, passwordRegister, repeatPassword} = this.state;
        e.preventDefault();

        if (emailRegister.length < 5 || emailRegister.indexOf("@") === -1 || emailRegister.indexOf(".") === -1) {
            this.setState({
                emailWrongRegister: true
            })
        }

        if (emailRegister.length > 4 && emailRegister.indexOf("@") !== -1 && emailRegister.indexOf(".") !== -1) {
            this.setState({
                emailWrongRegister: false
            })
        }

        if(passwordRegister.length < 6) {
            this.setState({
                passwordWrongRegister: true
            })
        }

        if(passwordRegister.length > 5) {
            this.setState({
                passwordWrongRegister: false
            })
        }


        if(passwordRegister.localeCompare(repeatPassword) !== 0) {
            this.setState({
                repeatPasswordWrong: true
            })
        }

        if(passwordRegister.localeCompare(repeatPassword) === 0) {
            this.setState({
                repeatPasswordWrong: false
            })
        }

        if(emailRegister.length > 4 && emailRegister.indexOf("@") !== -1 && this.state.emailRegister.indexOf(".") !== -1 && passwordRegister.length > 5 && passwordRegister.localeCompare(repeatPassword) === 0) {
            this.props.submitOnRegister(emailRegister, passwordRegister);
        }
    }
    
    
    render() {
        const {emailWrongLogin, passwordWrongLogin, emailWrongRegister, passwordWrongRegister, repeatPasswordWrong} = this.state;
        if(this.props.isLogin) {
            return (
                <div className="form-wrapper">
                    <h3>Zaloguj się</h3>
                    <img src={image} alt="decoration-line" />
                    <form className="form" onSubmit={this.handleSubmitLogin}>
                        <label><span>Email</span><input type="email" onChange={e=>this.setState({emailLogin: e.target.value, emailWrongLogin: false})} />{emailWrongLogin && <p className="wrong-info">Podany email jest nieprawidłowy!</p>}</label>
                        <label><span>Hasło</span><input type="password" onChange={e=>this.setState({passwordLogin: e.target.value, passwordWrongLogin: false})} />{passwordWrongLogin && <p className="wrong-info">Podane hasło jest nieprawidłowe!</p>}</label>
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
                        <label><span>Email</span><input type="email" onChange={e=>this.setState({emailRegister: e.target.value, emailWrongRegister: false})} />{emailWrongRegister && <p className="wrong-info">Podany email jest nieprawidłowy</p>}</label>
                        <label><span>Hasło</span><input type="password" onChange={e=>this.setState({passwordRegister: e.target.value, passwordWrongRegister: false})} />{passwordWrongRegister && <p className="wrong-info">Podane hasło jest nieprawidłowe!</p>}</label>
                        <label><span>Powtórz hasło</span><input type="password" onChange={e=>this.setState({repeatPassword: e.target.value, repeatPasswordWrong: false})} />{repeatPasswordWrong && <p className="wrong-info">Podane hasła nie są identyczne!</p>}</label>
                        <div className="form-wrapper__btns">
                            <button className="basic-btn">Załóż konto</button>
                            <NavLink to="/logowanie"><button className="basic-btn non-border-btn">Zaloguj się</button></NavLink>
                        </div>
                    </form>
                </div>
            )
        }  if(!this.props.isLogin) {
            return (
                <div className="logout-content">
                    <h2>{this.props.communicate} <br></br><span>pomyślnie!</span></h2>
                    <img src={image} alt="decoration-line" />
                    <NavLink to="/"><button className="basic-btn">Strona główna</button></NavLink>
                </div>
            )
        }
    }
    
}
