import React, { Component } from 'react'

export default class Paginations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: [...this.props.data],
            currentPage: 1,
            elementsPerPage: 3,
            amountOfPages: 0,
            btns: []
        }
    }



    componentDidMount() {
        const { elements, elementsPerPage } = this.state;
        this.setState({
            amountOfPages: Math.ceil(elements.length / elementsPerPage)
        }, () => this.calculateBtns())
    }

    calculateBtns = () => {
        const { amountOfPages } = this.state;
        if (amountOfPages > 1) {
            let tempArr = [];
            for (let i = 1; i <= amountOfPages; i++) {
                tempArr.push(i);
            }
            this.setState({
                btns: tempArr
            })
        } else return null
    }

    render() {
        const { text } = this.props;
        const { elements, currentPage, elementsPerPage, amountOfPages, btns } = this.state;
        return (
            <div className="who-we-help__pagination">
                <h3 className="who-we-help__pagination__title">{text}</h3>
                <ul className="who-we-help__pagination__list">
                    {
                        elements.slice(currentPage * elementsPerPage - elementsPerPage, currentPage * elementsPerPage).map((el, idx) => {
                            return <li key={idx} className="who-we-help__pagination__list__element">
                                <div className="who-we-help__pagination__list__element__pagination__flex">
                                    <h4 className="who-we-help__pagination__list__element__pagination__flex__title">Fundacja "{el.name}"</h4>
                                    <span className="who-we-help__pagination__list__element__pagination__flex__text">{el.target}</span>
                                </div>
                                <p className="who-we-help__pagination__list__element__pagination__no-flex">{el.items.map((el, idx) => <span key={idx} className="who-we-help__pagination__list__element__pagination__no-flex__text">{el}, </span>)}</p>
                            </li>
                        })
                    }
                </ul>
                {amountOfPages > 1 && (
                    <div className="who-we-help__pagination__bnts-wrapper">
                        {btns.map((num, idx) => {
                            return <button className={+currentPage === num ? "little-btn" : "little-btn non-border-btn"} data-value={num} key={idx} onClick={e => this.setState({ currentPage: e.target.dataset.value })}>{num}</button>
                        })}
                    </div>
                )}

            </div>
        )
    }
}