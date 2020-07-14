import React, { Component } from 'react'

export default class ShareItemsForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            items: [{item: "ubrania, które nadają się do ponownego użycia", isChecked: false}, {item: "ubrania do wyrzucenia", isChecked: false}, {item: "zabawki", isChecked: false}, {item: "książki", isChecked: false}, {item: "inne", isChecked: false}],
            bags: "— wybierz —",
            helpGroups: [{group: "dzieciom", isChecked: false}, {group: "samotnym matkom", isChecked: false}, {group: "bezdomnym", isChecked: false}, {group: "niepełnosprawnym", isChecked: false}, {group: "osobom starszym", isChecked: false}],
            cities: "— wybierz —",
            localizationSpecific: "",
            street: "",
            city: "",
            postCode: "",
            phone: "",
            date: "",
            time: "",
            note: ""
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

    addGroup = e => {
        let tempArr = [...this.state.helpGroups]
        if(e.target.checked) {
            tempArr[e.target.name].isChecked = true
            
        } else {
            tempArr[e.target.name].isChecked = false
        }
        this.setState({
            helpGroups: tempArr
        })
    }


    render() {
        return (
            <section className="share-items__form">
                {this.state.currentStep < 5 && (
                    <div className="share-items__form__header">
                    <h3>Ważne!</h3>
                    {this.state.currentStep === 1 && <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>}
                    {this.state.currentStep === 2 && <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz <span>tutaj</span></p>}
                    {this.state.currentStep === 3 && <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>}
                    {this.state.currentStep === 4 && <p>Podaj adres oraz termin odbioru rzeczy.</p>}
                </div>
                )}
                <div className="share-items__form__content">
                    {this.state.currentStep < 5 && (
                        <h4>Krok {this.state.currentStep}/4</h4>
                    )}
                    {this.state.currentStep === 1 && (
                        <form className="share-items__form__content-step-1">
                            {this.state.items.map((item, idx) => {
                                return (
                                    <label key={idx}>
                                        <input type="checkbox" name={idx} defaultChecked={item.isChecked} value={item.item} onClick={e => this.addItem(e)} />{item.item}
                                        </label>)
                            })}
                    </form>
                    )}


                    {this.state.currentStep === 2 && (
                        <form className="share-items__form__content-step-2">
                            <h4>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h4>
                            <select value={this.state.bags} onChange={e=>this.setState({bags: +e.target.value})}>
                                <option value={this.state.bags}>{this.state.bags}</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </form>
                    )}


                    {this.state.currentStep === 3 && (
                        <form className="share-items__form__content-step-3">
                            <h4>Lokalizacja:</h4>
                            <select value={this.state.cities} onChange={e=>this.setState({cities: e.target.value})}>
                                <option value={this.state.cities}>{this.state.cities}</option>
                                <option value="Poznań">Poznań</option>
                                <option value="Warszawa">Warszawa</option>
                                <option value="Kraków">Kraków</option>
                                <option value="Wrocław">Wrocław</option>
                                <option value="Katowice">Katowice</option>
                            </select>
                            <h5>Komu chcesz pomóc</h5>
                            <div className="share-items__form__content-step-3__wrapper-checkboxes">
                                {this.state.helpGroups.map((people, idx) => {
                                    return (
                                        <label key={idx} className={people.isChecked ? "label-checked" : ""}>
                                            <input type="checkbox" name={idx} defaultChecked={people.isChecked} value={people.group} onClick={e => this.addGroup(e)} /><span>{people.group}</span>
                                            </label>)
                                })}
                            </div>
                            <h4>Wpisz nazwę lokalizacji (opcjonalnie):</h4>
                            <input type="text" className="input-localization" value={this.state.localizationSpecific} onChange={e=>this.setState({localizationSpecific: e.target.value})} />
                        </form>
                    )}

                    {this.state.currentStep === 4 && (
                        <form className="share-items__form__content-step-4">
                            <h4>Podaj adres oraz termin odbioru rzeczy przez kuriera</h4>
                            <div className="share-items__form__content-step-4__form-wrapper">
                                <div className="share-items__form__content-step-4__form-column">
                                    <h5>Adres odbioru:</h5>
                                    <label>Ulica<input type="text" value={this.state.street} onChange={e=>this.setState({street: e.target.value})} /></label>
                                    <label>Miasto<input type="text" value={this.state.city} onChange={e=>this.state({city: e.target.value})} /></label>
                                    <label>Kod pocztowy<input value={this.state.postCode} onChange={e=>this.setState({postCode: e.target.value})} /></label>
                                    <label>Numer telefonu<input value={this.state.phone} onChange={e=> this.setState({phone: e.target.value})} /></label>
                                </div>
                                <div className="share-items__form__content-step-4__form-column">
                                <h5>Termin odbioru:</h5>
                                    <label>Data<input type="date" value={this.state.date} onChange={e=>this.setState({date: e.target.value})} /></label>
                                    <label>Godzina<input type="time" value={this.state.time} onChange={e=>this.setState({time: e.target.value})} /></label>
                                    <label>Uwagi dla kuriera<textarea value={this.state.note} onChange={e=>this.setState({note: e.target.value})} /></label>
                                </div>
                            </div>
                        </form>
                    )}

                    {this.state.currentStep === 5 && (
                        <div className="share-items__summary">
                            <h2>Podsumowanie Twojej darowizny</h2>
                            <div className="share-items__summary__content-with-icons">
                                <h3>Oddajesz</h3>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="share-items__summary__data">
                                <div className="share-items__summary__data__column"></div>
                                <div className="share-items__summary__data__column"></div>
                            </div>
                        </div>
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
