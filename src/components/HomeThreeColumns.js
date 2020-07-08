import React, { Component } from 'react';
import OneColumn from "./OneColumn";

export default class HomeThreeColumns extends Component {
    render() {
        return (
            <section className="home-three-columns" id="what-is-going-on">
                <OneColumn title="10" text="oddanych worków" />
                <OneColumn title="5" text="wspartych organizacji" />
                <OneColumn title="7" text="zorganizowanych zbiórek" />
            </section>
        )
    }
}
