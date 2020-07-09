import React, { Component } from 'react';
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeFooter from "./HomeFooter";

export default class Home extends Component {
    render() {
        return (
            <div>
                <HomeHeader />
                <HomeThreeColumns />
                <HomeFourSteps />
                <HomeAboutUs />
                <HomeWhoWeHelp />
                <HomeFooter />
            </div>
        )
    }
}
