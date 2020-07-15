import React, { Component } from 'react';
import image1 from "../images/Icon-1.svg";
import image2 from "../images/Icon-4.svg";
import decoration from "../images/Decoration.svg";
import ShareItemsFormStep1 from "./ShareItemsFormStep1";
import ShareItemsFormStep2 from "./ShareItemsFormStep2";
import ShareItemsFormStep3 from "./ShareItemsFormStep3";

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

    chooseBags = num => {
        this.setState({
            bags: num
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
                        <h4 className="share-items__form__content__title">Krok {currentStep}/4</h4>
                    )}
                    {currentStep === 1 && <ShareItemsFormStep1 addItem={this.addItem} items={items} />}


                    {currentStep === 2 && <ShareItemsFormStep2 bags={bags} chooseBags={this.chooseBags} addGroup={this.addGroup} />}


                    {currentStep === 3 && <ShareItemsFormStep3 cities={cities} helpGroups={helpGroups} localizationSpecific={localizationSpecific} addGroup={this.addGroup} chooseFromCities={this.chooseFromCities} changeLocalizationSpecific={this.changeLocalizationSpecific} />
                    // (
                    //     <form className="share-items__form__content-step-3">
                    //         <h4>Lokalizacja:</h4>
                    //         <select value={cities} onChange={e=>this.setState({cities: e.target.value})}>
                    //             <option value={cities}>{cities}</option>
                    //             <option value="Poznań">Poznań</option>
                    //             <option value="Warszawa">Warszawa</option>
                    //             <option value="Kraków">Kraków</option>
                    //             <option value="Wrocław">Wrocław</option>
                    //             <option value="Katowice">Katowice</option>
                    //         </select>
                    //         <h5>Komu chcesz pomóc</h5>
                    //         <div className="share-items__form__content-step-3__wrapper-checkboxes">
                    //             {helpGroups.map((people, idx) => {
                    //                 return (
                    //                     <label key={idx} className={people.isChecked ? "label-checked" : ""}>
                    //                         <input type="checkbox" name={idx} defaultChecked={people.isChecked} value={people.group} onClick={e => this.addGroup(e)} /><span>{people.group}</span>
                    //                         </label>)
                    //             })}
                    //         </div>
                    //         <h4>Wpisz nazwę lokalizacji (opcjonalnie):</h4>
                    //         <input type="text" className="input-localization" value={localizationSpecific} onChange={e=>this.setState({localizationSpecific: e.target.value})} />
                    //     </form>
                    // )
                    }

                    {currentStep === 4 && (
                        <form className="share-items__form__content-step-4">
                            <h4>Podaj adres oraz termin odbioru rzeczy przez kuriera</h4>
                            <div className="share-items__form__content-step-4__form-wrapper">
                                <div className="share-items__form__content-step-4__form-column">
                                    <h5>Adres odbioru:</h5>
                                    <label>Ulica<input type="text" value={street} onChange={e=>this.setState({street: e.target.value})} /></label>
                                    <label>Miasto<input type="text" value={city} onChange={e=>this.setState({city: e.target.value})} /></label>
                                    <label>Kod pocztowy<input value={postCode} onChange={e=>this.setState({postCode: e.target.value})} /></label>
                                    <label>Numer telefonu<input value={phone} onChange={e=> this.setState({phone: e.target.value})} /></label>
                                </div>
                                <div className="share-items__form__content-step-4__form-column">
                                <h5>Termin odbioru:</h5>
                                    <label>Data<input type="date" value={date} onChange={e=>this.setState({date: e.target.value})} /></label>
                                    <label>Godzina<input type="time" value={time} onChange={e=>this.setState({time: e.target.value})} /></label>
                                    <label>Uwagi dla kuriera<textarea value={note} onChange={e=>this.setState({note: e.target.value})} /></label>
                                </div>
                            </div>
                        </form>
                    )}

                    {currentStep === 5 && (
                        <div className="share-items__summary">
                            <h2>Podsumowanie Twojej darowizny</h2>
                            <div className="share-items__summary__content-with-icons">
                                <h3>Oddajesz</h3>
                                <div className="share-items__summary__content-with-icons__wrapper">
                                    <img src={image1} alt="shirt-icon" />
                                    <p>
                                        <span>
                                            {bags} {bags === 1 ? "worek" : "work"}{this.state.bags === 0 || bags === 5 ? "ów" : ""}{bags === 2 || bags === 3 || bags === 4 ? "i" : ""},
                                        </span>
                                        {items.filter(item => item.isChecked)
                                        .map((item, idx) => {
                                            return <span key={idx}> {item.item},</span>
                                        })}
                                        {helpGroups.filter(group => group.isChecked)
                                        .map((group, idx) => {
                                            return <span key={idx}> {group.group},</span>
                                        })}
                                    </p>
                                </div>
                                <div className="share-items__summary__content-with-icons__wrapper">
                                    <img src={image2} alt="recycling-icon" />
                                    <p>
                                        <span>Dla lokalizacji:</span>
                                        <span> {cities}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="share-items__summary__data">
                                <div className="share-items__summary__data__column">
                                    <h4>Adres odbioru:</h4>
                                    <p><span>Ulica</span><span>{street}</span></p>
                                    <p><span>Miasto</span><span>{cities}</span></p>
                                    <p><span>Kod pocztowy</span><span>{postCode}</span></p>
                                    <p><span>Numer telefonu</span><span>{phone}</span></p>
                                </div>
                                <div className="share-items__summary__data__column">
                                    <h4>Termin odbioru</h4>
                                    <p><span>Data</span><span>{date}</span></p>
                                    <p><span>Godzina</span><span>{time}</span></p>
                                    <p><span>Uwagi do kuriera</span><span>{note}</span></p>
                                </div>
                            </div>
                        </div>
                    )}

                    {currentStep === 6 && (
                        <div className="share-items__thanks-you">
                            <h3>
                                Dziękujemy za przesłanie formularza, na maila prześlemy wszelkie informacje o odbiorze.
                            </h3>
                            <img src={decoration} alt="decoration-line" />
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
