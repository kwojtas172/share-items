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
        this.setState({
            amountOfPages: Math.ceil(this.state.elements.length/3)
        }, () => this.calculateBtns())
    }

    calculateBtns = () => {
        if(this.state.amountOfPages > 1) {
            let tempArr = [];
            for(let i=1; i<=this.state.amountOfPages; i++) {
                tempArr.push(i);
            }
            console.log(tempArr)
            this.setState({
                btns: tempArr
            })
        }
    }

    render() {
        const {text} = this.props;
        const {elements, currentPage, elementsPerPage, amountOfPages, btns} = this.state;
        return (
            <div className="pagination">
                <h3>{text}</h3>
                <ul>
                {
                    elements.slice(currentPage*elementsPerPage-3, currentPage*elementsPerPage).map((el, idx) => {
                        return <li key={idx}>
                                    <p className="pagination__flex">
                                        <h4>Fundacja "{el.name}"</h4>
                                        <span>{el.target}</span>
                                    </p>
                                    <p className="pagination__no-flex">{el.items.map(el=><span>{el}, </span>)}</p>
                                </li>
                    })
                }
                </ul>
                {amountOfPages>1 && (
                    <div>
                        {btns.map((num, idx) => {
                            return <button className={currentPage === num ? "little-btn" : "little-btn non-border-btn"} data-value={num} key={idx} onClick={e=>this.setState({currentPage: e.target.dataset.value})}>{num}</button>
                        })}
                    </div>
                )}
            
            </div>
        )
    }
}
