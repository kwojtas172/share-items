import React, { Component } from 'react';
import image from "../images/Home-Hero-Image.jpg";

export default class HomeHeaderImage extends Component {
    render() {
        return (
            <img className="main-header__img" src={image} alt="pudło z niepotrzebnymi rzeczami" />
        )
    }
}
//przerobic na funkcyjny
//nie zgadzam sie xD
//usrState(), useEffrct()