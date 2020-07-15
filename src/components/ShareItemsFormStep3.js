import React, { Component } from 'react'

export default class ShareItemsFormStep3 extends Component {
    
    render() {
        const {cities, helpGroups, localizationSpecific, addGroup, chooseFromCities, changeLocalizationSpecific} = this.props;
        return (
            <form className="share-items__form__content-step-3">
                            <h4 className="share-items__form__content-step-3__title">Lokalizacja:</h4>
                            <select value={cities} className="share-items__form__content-step-3__select" onChange={e=>chooseFromCities(e.target.value)}>
                                <option value="Warszawa" className="share-items__form__content-step-3__select__option">{cities}</option>
                                <option value="Poznań" className="share-items__form__content-step-3__select__option">Poznań</option>
                                <option value="Warszawa" className="share-items__form__content-step-3__select__option">Warszawa</option>
                                <option value="Kraków" className="share-items__form__content-step-3__select__option">Kraków</option>
                                <option value="Wrocław" className="share-items__form__content-step-3__select__option">Wrocław</option>
                                <option value="Katowice" className="share-items__form__content-step-3__select__option">Katowice</option>
                            </select>
                            <h4 className="share-items__form__content-step-3__title">Komu chcesz pomóc</h4>
                            <div className="share-items__form__content-step-3__checkboxes">
                                {helpGroups.map((people, idx) => {
                                    return (
                                        <label key={idx} className={people.isChecked ? "label-checked share-items__form__content-step-3__checkboxes__label" : "share-items__form__content-step-3__checkboxes__label"}>
                                            <input type="checkbox" name={idx} defaultChecked={people.isChecked} value={people.group} className="share-items__form__content-step-3__checkboxes__label__input--checkbox" onClick={e =>addGroup(e)} /><span className="share-items__form__content-step-3__checkboxes__label__span">{people.group}</span>
                                            </label>)
                                })}
                            </div>
                            <h4 className="share-items__form__content-step-3__title">Wpisz nazwę lokalizacji (opcjonalnie):</h4>
                            <input type="text" className="input-localization" value={localizationSpecific} onChange={e=>changeLocalizationSpecific(e)} />
                        </form>
        )
    }
}
