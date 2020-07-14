import React, { Component } from 'react'

export default class ShareItemsForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            items: [{item: "ubrania, które nadają się do ponownego użycia", isChecked: false}, {item: "ubrania do wyrzucenia", isChecked: false}, {item: "zabawki", isChecked: false}, {item: "książki", isChecked: false}, {item: "inne", isChecked: false}],
            numberOfBags: 0
        }
    }

    handleNextStep = e => {
        e.preventDefault();
        this.setState({
            currentStep: this.state.currentStep + 1
        })
    }

    handlePreviousStep = e => {
        e.preventDefault();
        this.setState({
            currentStep: this.state.currentStep - 1
        })
    }

    addItem = e => {
        let tempArr = [...this.state.items]
        if(e.target.checked) {
            tempArr[e.target.name].isChecked = true
            
        } else {
            tempArr[e.target.name].isChecked = false
        }
        this.setState({
            items: tempArr
        })
    }


    render() {
        return (
            <section className="share-items__form">
                <div className="share-items__form__header">
                    <h3>Ważne!</h3>
                    {this.state.currentStep === 1 && <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>}
                    {this.state.currentStep === 2 && <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz <span>tutaj</span></p>}
                    {this.state.currentStep === 3 && <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>}
                    {this.state.currentStep === 4 && <p>Podaj adres oraz termin odbioru rzeczy.</p>}
                </div>
                <div className="share-items__form__content">
                    <h4>Krok {this.state.currentStep}/4</h4>
                    {this.state.currentStep === 1 && (
                        <form className="share-items__form__content-step-1">
                            {this.state.items.map((item, idx) => {
                                return (
                                    <label key={idx}><span></span>
                                        <input type="checkbox" name={idx} defaultChecked={item.isChecked} value={item.item} onClick={e => this.addItem(e)} />{item.item}
                                        </label>)
                            })}
                    </form>
                    )}
                    {this.state.currentStep === 2 && (
                        <form className="share-items__form__content-step-2">
                            <h4>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h4>
                            <select>
                                <option selected value="fsgdgfhmfg"><span></span>Wybierz</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </form>
                    )}
                    <div>
                       {this.state.currentStep > 1 && this.state.currentStep < 5 &&  <button className="basic-btn" onClick={this.handlePreviousStep}>Wstecz</button>}
                       {this.state.currentStep < 5 && <button className="basic-btn" onClick={this.handleNextStep}>Dalej</button>}
                     </div>
                </div>
            </section>
        )
    }
}
