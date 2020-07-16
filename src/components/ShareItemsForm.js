import React, { Component } from 'react';
import decoration from "../images/Decoration.svg";
import ShareItemsFormStep1 from "./ShareItemsFormStep1";
import ShareItemsFormStep2 from "./ShareItemsFormStep2";
import ShareItemsFormStep3 from "./ShareItemsFormStep3";
import ShareItemsFormStep4 from "./ShareItemsFormStep4";
import ShareItemsFormSummary from "./ShareItemsFormSummary";

export default class ShareItemsForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            items: [{item: "ubrania, które nadają się do ponownego użycia", isChecked: false}, {item: "ubrania do wyrzucenia", isChecked: false}, {item: "zabawki", isChecked: false}, {item: "książki", isChecked: false}, {item: "inne", isChecked: false}],
            bags: 0,
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
    chooseBags = e => {
        this.setState({
            bags: +e.target.value
        })
    }
    chooseFromCities = city => {
        this.setState({
            cities: city
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
    changeLocalizationSpecific = e => {
        this.setState({
            localizationSpecific: e.target.value
        })
    }
    changeCity = e => {
        this.setState({
            city: e.target.value
        })
    }
    changeStreet = e => {
        this.setState({
            street: e.target.value
        })
    }
    changePostCode = e => {
        this.setState({
            postCode: e.target.value
        })
    }
    changePhone = e => {
        this.setState({
            phone: e.target.value
        })
    }
    changeDate = e => {
        this.setState({
            date: e.target.value
        })
    }
    changeTime = e => {
        this.setState({
            time: e.target.value
        })
    }
    changeNote = e => {
        this.setState({
            note: e.target.value
        })
    }

    render() {
        const {currentStep, items, bags, helpGroups, cities, localizationSpecific, street, city, postCode, phone, date, time, note} = this.state;
        return (
            <section className="share-items__form">
                {currentStep < 5 && (
                    <div className="share-items__form__header">
                    <h3 className="share-items__form__header__title">Ważne!</h3>
                    {currentStep === 1 && <p className="share-items__form__header__text">Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>}
                    {currentStep === 2 && <p className="share-items__form__header__text">Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz <span>tutaj</span></p>}
                    {currentStep === 3 && <p className="share-items__form__header__text">Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>}
                    {currentStep === 4 && <p className="share-items__form__header__text">Podaj adres oraz termin odbioru rzeczy.</p>}
                </div>
                )}
                <div className="share-items__form__content">
                    {currentStep < 5 && (
                        <h4 className="share-items__form__content__title">Krok {currentStep}/4</h4>)}
                    {currentStep === 1 && <ShareItemsFormStep1 addItem={this.addItem} items={items} />}
                    {currentStep === 2 && <ShareItemsFormStep2 bags={bags} chooseBags={this.chooseBags} addGroup={this.addGroup} />}
                    {currentStep === 3 && <ShareItemsFormStep3 cities={cities} helpGroups={helpGroups} localizationSpecific={localizationSpecific} addGroup={this.addGroup} chooseFromCities={this.chooseFromCities} changeLocalizationSpecific={this.changeLocalizationSpecific} />}
                    {currentStep === 4 && <ShareItemsFormStep4 city={city} street={street} postCode={postCode} phone={phone} date={date} time={time} note={note} changeCity={this.changeCity} changeStreet={this.changeStreet} changePostCode={this.changePostCode} changePhone={this.changePhone} changeDate={this.changeDate} changeTime={this.changeTime} changeNote={this.changeNote} />}
                    {currentStep === 5 && <ShareItemsFormSummary bags={bags} items={items} helpGroups={helpGroups} cities={cities} street={street} city={city} postCode={postCode} phone={phone} date={date} time={time} note={note}  />}
                    {currentStep === 6 && (
                        <div className="share-items__thanks-you">
                            <h3 className="share-items__thanks-you__title">
                                Dziękujemy za przesłanie formularza, na maila prześlemy wszelkie informacje o odbiorze.
                            </h3>
                            <img src={decoration} alt="decoration-line" className="share-items__thanks-you__img" />
                        </div>
                    )}
                    <div>
                       {currentStep > 1 && currentStep < 6 &&  <button className="basic-btn share-items__form__content__btn" onClick={this.handlePreviousStep}>Wstecz</button>}
                       {currentStep < 6 && <button className="basic-btn share-items__form__content__btn" onClick={this.handleNextStep}>{currentStep === 5 ? "Potwierdź" : "Dalej"}</button>}
                     </div>
                </div>
            </section>
        )
    }
}
