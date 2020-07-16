import React, { Component } from 'react';
import image from "../images/Decoration.svg";
import fbIcon from "../images/Facebook.svg";
import instagramIcon from "../images/Instagram.svg";

export default class HomeFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            text: "",
            nameWrong: false,
            emailWrong: false,
            textWrong: false,
            isSusccessSend: false
        }
    }

    handleSubmit = e => {
        const {name, email, text} = this.state;
        e.preventDefault();
        if(name.indexOf(" ") !== -1 || name.length < 2) {
            this.setState({
                nameWrong: true
            })
        } 
        if (name.indexOf(" ") === -1 && name.length > 1) {
            this.setState({
                nameWrong: false
            })
        }
        if (email.length < 5 || email.indexOf("@") === -1 || email.indexOf(".") === -1) {
            this.setState({
                emailWrong: true
            })
        }
        if (email.length > 4 && email.indexOf("@") !== -1 && email.indexOf(".") !== -1) {
            this.setState({
                emailWrong: false
            })
        }
        if(text.length < 120) {
            this.setState({
                textWrong: true
            })
        }
        if(text.length > 119) {
            this.setState({
                textWrong: false
            })
        }
        if(name.indexOf(" ") === -1 && name.length > 1 && email.length > 4 && email.indexOf("@") !== -1 && email.indexOf(".") !== -1 && text.length > 119) {
            console.log("gotowe do POST-a")
            const data = { name: name, email: email, message: text };

            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            this.setState({
                isSusccessSend: true
            })
            })
            .catch((error) => {
            console.error('Error:', error);
            });
        }
    }
    
    render() {
        const {nameWrong, emailWrong, textWrong, isSusccessSend} = this.state;
        return (
            <footer className="home-footer" id="contact">
                <div className="home-footer__content">
                    <h3 className="home-footer__content__title">Skontaktuj się z nami</h3>
                    <img className="home-footer__content__img" src={image} alt="decoration-line" />
                    {isSusccessSend && <p className="success-info">
                        <span>Wiadomość została wysłana!</span>
                        <br></br>
                        <span>Wkrótce się skontaktujemy.</span></p>}
                    <form className="home-footer__content__form" onSubmit={this.handleSubmit}>
                        <label className="home-footer__content__form__label home-footer__content__form__label--name">Wpisz swoje imię<input className="home-footer__content__form__label__input" type="text" placeholder="Imię" onChange={e=>this.setState({name: e.target.value, nameWrong: false, isSusccessSend: false})} />{nameWrong && <p className="wrong-info">Podane imię jest nieprawidłowe</p>}</label>
                        <label className="home-footer__content__form__label home-footer__content__form__label--email">Wpisz swój e-mail<input className="home-footer__content__form__label__input" type="e-mail" placeholder="e-mail" onChange={e=>this.setState({email: e.target.value, emailWrong: false, isSusccessSend: false})} />{emailWrong && <p className="wrong-info">Podany email jest nieprawidłowy</p>}</label>
                        <label className="home-footer__content__form__label home-footer__content__form__label--text ">Wpisz swoją wiadomość<textarea className="home-footer__content__form__label__textarea" type="text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo." onChange={e=>this.setState({text: e.target.value, textWrong: false, isSusccessSend: false})} />{textWrong && <p className="wrong-info">Wiadomość musi mieć co najmniej 120 znaków</p>}</label>
                        <button type="submit" className="basic-btn home-footer__content__form__button">Wyślij</button>
                    </form>
                </div>
                <div className="home-footer__rest">
                    <p className="home-footer__rest__text">Copyright by Coders Lab</p>
                    <p className="home-footer__rest__text">Created by Kamil Wojtas</p>
                    <div className="home-footer__rest__wrapper-icons">
                        <img className="home-footer__rest__icons" src={fbIcon} alt="facebook-icon" />
                        <img className="home-footer__rest__icons" src={instagramIcon} alt="instagram-icon" />
                    </div>
                </div>
            </footer>
        )
    }
}
