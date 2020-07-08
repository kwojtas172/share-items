import React, { Component } from 'react'

export default class OneColumn extends Component {
    render() {
        const {title, text} = this.props;
        return (
            <div className="one-column">
                <h2>{title}</h2>
                <h3>{text}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante metus dictum at tempor commodo ullamcorper a. </p>
            </div>
        )
    }
}
