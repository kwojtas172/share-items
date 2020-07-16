import React, { Component } from 'react';
import HomeHeaderImage from "./HomeHeaderImage";
import HomeHeaderNavigation from "./HomeHeaderNavigation";

export default class HomeHeader extends Component {
    render() {
        const {isLogin, displayName} = this.props;
        return (
            <header className="main-header">
                <HomeHeaderImage />
                <HomeHeaderNavigation isLogin={isLogin} displayName={displayName} />
            </header>
        )
    }
}
