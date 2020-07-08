import React, { Component } from 'react';
import HomeHeaderImage from "./HomeHeaderImage";
import HomeHeaderNavigation from "./HomeHeaderNavigation";

export default class HomeHeader extends Component {
    render() {
        return (
            <header className="main-header">
                <HomeHeaderImage />
                <HomeHeaderNavigation />
            </header>
        )
    }
}
