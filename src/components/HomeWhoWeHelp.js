import React, { Component } from 'react';
import server from "./server.json";
import image from "../images/Decoration.svg";
import Pagination from "./Paginations";


export default class HomeWhoWeHelp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: server,
            isFoundations: true,
            isOrganizations: false,
            isLocals: false,
            textForFoundations: "W naszej bazie znajdziesz listę zweryfikowanych fundacji, z którymi współpracujemy. Możesz sprawdzić, czym się zajmują, komu pomagają i czego potrzebują.",
            textForOrganizations: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac. Pretium nibh ipsum consequat nisl vel pretium lectus quam id.",
            textForLocals: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac. Pretium nibh ipsum consequat nisl vel pretium lectus quam id."
        }
    }
    
    render() {
        const {data, isFoundations, isOrganizations, isLocals, textForFoundations, textForOrganizations, textForLocals} = this.state;
        return (
            <section className="who-we-help" id="fundation">
                <h2 className="who-we-help__title">Komu pomagamy?</h2>
                <img className="who-we-help__img" src={image} alt="decoration-line" />
                <div className="who-we-help__wrapper">
                    <button className={isFoundations ? "basic-btn" : "basic-btn non-border-btn"} onClick={()=>this.setState({isFoundations: true, isOrganizations: false, isLocals: false})}>Fundacjom</button>
                    <button className={isOrganizations ? "basic-btn" : "basic-btn non-border-btn"} onClick={()=>this.setState({isFoundations: false, isOrganizations: true, isLocals: false})}>Organizacjom pozarządowym</button>
                    <button className={isLocals ? "basic-btn" : " basic-btn non-border-btn"} onClick={()=>this.setState({isFoundations: false, isOrganizations: false, isLocals: true})}>Lokalnym zbiórkom</button>
                </div>
                {isFoundations && <Pagination text={textForFoundations} data={data.fundations} />}
                {isOrganizations && <Pagination text={textForOrganizations} data={data.organizations}  />}
                {this.state.isLocals && <Pagination text={textForLocals} data={data.locals}  />}
            </section>
        )
    }
}
