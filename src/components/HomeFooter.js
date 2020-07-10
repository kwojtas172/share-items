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
            text: ""
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.name.indexOf(" "))
        console.log(this.state.email.lastIndexOf("."), this.state.email.length)

    }
    
    render() {
        return (
            <footer className="home-footer" id="contact">
                <div className="home-footer__form">
                    <h3>Skontaktuj się z nami</h3>
                    <img src={image} alt="decoration-line" />
                    <form className="footer-form" onSubmit={this.handleSubmit}>
                        <label className="footer-form__name">Wpisz swoje imię<input type="text" placeholder="Imię" onChange={e=>this.setState({name: e.target.value})} /></label>
                        <label className="footer-form__email">Wpisz swój e-mail<input type="e-mail" placeholder="e-mail" onChange={e=>this.setState({email: e.target.value})} /></label>
                        <label className="footer-form__text">Wpisz swoją wiadomość<textarea type="text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo." onChange={e=>this.setState({text: e.target.value})} /></label>
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
