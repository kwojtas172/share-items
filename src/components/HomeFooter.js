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
        e.preventDefault();

        if(this.state.name.indexOf(" ") !== -1 || this.state.name.length < 2) {
            this.setState({
                nameWrong: true
            })
        } 
        
        if (this.state.name.indexOf(" ") === -1 && this.state.name.length > 1) {
            this.setState({
                nameWrong: false
            })
        }

        if (this.state.email.length < 5 || this.state.email.indexOf("@") === -1 || this.state.email.indexOf(".") === -1) {
            this.setState({
                emailWrong: true
            })
        }

        if (this.state.email.length > 4 && this.state.email.indexOf("@") !== -1 && this.state.email.indexOf(".") !== -1) {
            this.setState({
                emailWrong: false
            })
        }

        if(this.state.text.length < 120) {
            this.setState({
                textWrong: true
            })
        }

        if(this.state.text.length > 119) {
            this.setState({
                textWrong: false
            })
        }

        if(this.state.name.indexOf(" ") === -1 && this.state.name.length > 1 && this.state.email.length > 4 && this.state.email.indexOf("@") !== -1 && this.state.email.indexOf(".") !== -1 && this.state.text.length > 119) {
            console.log("gotowe do POST-a")

            const data = { name: this.state.name, email: this.state.email, message: this.state.text };

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
        return (
            <footer className="home-footer" id="contact">
                <div className="home-footer__form">
                    <h3>Skontaktuj się z nami</h3>
                    <img src={image} alt="decoration-line" />
                    {this.state.isSusccessSend && <p className="success-info"><span>Wiadomość została wysłana!</span><br></br><span>Wkrótce się skontaktujemy.</span></p>}
                    <form className="footer-form" onSubmit={this.handleSubmit}>
                        <label className="footer-form__name">Wpisz swoje imię<input type="text" placeholder="Imię" onChange={e=>this.setState({name: e.target.value, nameWrong: false, isSusccessSend: false})} />{this.state.nameWrong && <p className="wrong-info">Podane imię jest nieprawidłowe</p>}</label>
                        <label className="footer-form__email">Wpisz swój e-mail<input type="e-mail" placeholder="e-mail" onChange={e=>this.setState({email: e.target.value, emailWrong: false, isSusccessSend: false})} />{this.state.emailWrong && <p className="wrong-info">Podany email jest nieprawidłowy</p>}</label>
                        <label className="footer-form__text">Wpisz swoją wiadomość<textarea type="text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo." onChange={e=>this.setState({text: e.target.value, textWrong: false, isSusccessSend: false})} />{this.state.textWrong && <p className="wrong-info">Wiadomość musi mieć co najmniej 120 znaków</p>}</label>
                        <button type="submit" className="basic-btn">Wyślij</button>
                    </form>
                </div>
                <div className="home-footer__rest">
                    <p>Copyright by Coders Lab</p>
                    <p>Created by Kamil Wojtas</p>
                    <div className="home-footer__rest__wrapper-icons">
                        <img src={fbIcon} alt="facebook-icon" />
                        <img src={instagramIcon} alt="instagram-icon" />
                    </div>
                </div>
            </footer>
        )
    }
}
