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
            note: "",
            warningInfo: ""
        }
    }

    

    handleNextStep = e => {
        const {currentStep, items, bags, helpGroups, cities, localizationSpecific, street, city, postCode, phone, date, time} = this.state;
        e.preventDefault();
        

        switch(currentStep) {
            case 1:
                let filteredItems = items.filter(item=>item.isChecked);
                if(filteredItems.length>0) {
                    this.setState({
                        currentStep: currentStep + 1,
                        warningInfo: ""
                    })
                } else {
                    this.setState({
                        warningInfo: "Wybierz rzeczy do oddania!"
                    })
                };
                break;
            case 2:
                if(bags>0) {
                    this.setState({
                        currentStep: currentStep + 1,
                        warningInfo: ""
                    })
                } else {
                    this.setState({
                        warningInfo: "Wybierz liczbę worków!"
                    })
                };
                break;
            case 3:
                let filteredHelpGroups = helpGroups.filter(group=>group.isChecked);
                if(filteredHelpGroups.length>0 && (cities !== "— wybierz —" || localizationSpecific.length>2)) {
                    this.setState({
                        currentStep: currentStep + 1,
                        warningInfo: ""
                    })
                } else {
                    this.setState({
                        warningInfo: "Wybierz lokalizację i grupę, której chcesz pomóc!"
                    })
                };
                break;
            case 4:
                console.log(city.length, street.length, postCode.length, postCode[2], typeof +postCode[0])
                if(city.length > 2 && street.length > 2 && postCode.length === 6 && postCode[2] === "-" && typeof +postCode[0] === "number" && typeof +postCode[1] === "number"  && typeof +postCode[3] === "number" && typeof +postCode[4] === "number" && typeof +postCode[5] === "number" && phone.length === 9 && typeof +phone === "number" && date.length>0 && time.length>0) {
                    this.setState({
                        currentStep: currentStep + 1,
                        warningInfo: ""
                    })
                } else {
                    this.setState({
                        warningInfo: "Musisz podać nazwę miasta oraz ulicy, kod pocztowy musi być podany w formacie: XX-XXX (gdzie X to cyfra), numer telefonu powinien zawierać 9 cyfr, musisz podać dzień i godzinę odbioru!"
                    })
                };
                break;
            case 5:
                let itemsCopy = [...items];
                let helpGroupsCopy = [...helpGroups];
                itemsCopy.forEach(el=>el.isChecked===false);
                helpGroupsCopy.forEach(el=>el.isChecked===false)
                this.setState({
                    currentStep: currentStep + 1,
                    warningInfo: "",
                    items: itemsCopy,
                    helpGroups: helpGroupsCopy,
                    cities: "— wybierz —",
                    localizationSpecific: "",
                    street: "",
                    city: "",
                    postCode: "",
                    phone: "",
                    date: "",
                    time: "",
                    note: "",
                });
                break;
            default: 
                return null;
        }
    }
    handlePreviousStep = e => {
        e.preventDefault();
        this.setState({
            currentStep: this.state.currentStep - 1,
            warningInfo: ""
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
            items: tempArr,
            warningInfo: ""
        })
    }
    chooseBags = e => {
        this.setState({
            bags: +e.target.value,
            warningInfo: ""
        })
    }
    chooseFromCities = city => {
        this.setState({
            cities: city,
            warningInfo: ""
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
            helpGroups: tempArr,
            warningInfo: ""
        })
    }
    changeLocalizationSpecific = e => {
        this.setState({
            localizationSpecific: e.target.value,
            warningInfo: ""
        })
    }
    changeCity = e => {
        this.setState({
            city: e.target.value,
            warningInfo: ""
        })
    }
    changeStreet = e => {
        this.setState({
            street: e.target.value,
            warningInfo: ""
        })
    }
    changePostCode = e => {
        this.setState({
            postCode: e.target.value,
            warningInfo: ""
        })
    }
    changePhone = e => {
        this.setState({
            phone: e.target.value,
            warningInfo: ""
        })
    }
    changeDate = e => {
        this.setState({
            date: e.target.value,
            warningInfo: ""
        })
    }
    changeTime = e => {
        this.setState({
            time: e.target.value,
            warningInfo: ""
        })
    }
    changeNote = e => {
        this.setState({
            note: e.target.value,
            warningInfo: ""
        })
    }

    componentDidMount() {
        this.setState({
            currentStep: 1
        })
    }

    render() {
        const {currentStep, items, bags, helpGroups, cities, localizationSpecific, street, city, postCode, phone, date, time, note, warningInfo} = this.state;
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
                    {currentStep === 1 && <ShareItemsFormStep1 addItem={this.addItem} items={items} warningInfo={warningInfo} />}
                    {currentStep === 2 && <ShareItemsFormStep2 bags={bags} chooseBags={this.chooseBags} addGroup={this.addGroup} warningInfo={warningInfo} />}
                    {currentStep === 3 && <ShareItemsFormStep3 cities={cities} helpGroups={helpGroups} localizationSpecific={localizationSpecific} addGroup={this.addGroup} chooseFromCities={this.chooseFromCities} changeLocalizationSpecific={this.changeLocalizationSpecific} warningInfo={warningInfo} />}
                    {currentStep === 4 && <ShareItemsFormStep4 city={city} street={street} postCode={postCode} phone={phone} date={date} time={time} note={note} changeCity={this.changeCity} changeStreet={this.changeStreet} changePostCode={this.changePostCode} changePhone={this.changePhone} changeDate={this.changeDate} changeTime={this.changeTime} changeNote={this.changeNote} warningInfo={warningInfo} />}
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
