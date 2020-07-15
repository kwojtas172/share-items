import React, { Component } from 'react'

export default class OneColumn extends Component {
    render() {
        const {title, text} = this.props;
        return (
            <div className="home-three-columns__one-column">
                <h2 className="home-three-columns__one-column__primary-title">{title}</h2>
                <h3 className="home-three-columns__one-column__secondary-title">{text}</h3>
                <p className="home-three-columns__one-column__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante metus dictum at tempor commodo ullamcorper a. </p>
            </div>
        )
    }
}
