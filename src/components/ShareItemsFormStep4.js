import React, { Component } from 'react'

export default class ShareItemsFormStep4 extends Component {
    render() {
        const {city, street, postCode, phone, date, time, note, changeCity, changeStreet, changePostCode, changePhone, changeDate, changeTime, changeNote} = this.props;
        return (
            <form className="share-items__form__content-step-4">
                            <h4 className="share-items__form__content-step-4__title">Podaj adres oraz termin odbioru rzeczy przez kuriera</h4>
                            <div className="share-items__form__content-step-4__form">
                                <div className="share-items__form__content-step-4__form-column">
                                    <h5 className="share-items__form__content-step-4__form-column__title">Adres odbioru:</h5>
                                    <label className="share-items__form__content-step-4__form-column__label">Ulica<input type="text" className="share-items__form__content-step-4__form-column__label__input" value={street} onChange={e=>changeStreet(e)} /></label>
                                    <label className="share-items__form__content-step-4__form-column__label">Miasto<input type="text" className="share-items__form__content-step-4__form-column__label__input" value={city} onChange={e=>changeCity(e)} /></label>
                                    <label className="share-items__form__content-step-4__form-column__label">Kod pocztowy<input value={postCode} className="share-items__form__content-step-4__form-column__label__input" onChange={e=>changePostCode(e)} /></label>
                                    <label className="share-items__form__content-step-4__form-column__label">Numer telefonu<input value={phone} className="share-items__form__content-step-4__form-column__label__input" onChange={e=> changePhone(e)} /></label>
                                </div>
                                <div className="share-items__form__content-step-4__form-column">
                                <h5 className="share-items__form__content-step-4__form-column__title">Termin odbioru:</h5>
                                    <label className="share-items__form__content-step-4__form-column__label">Data<input type="date" value={date} className="share-items__form__content-step-4__form-column__label__input" onChange={e=>changeDate(e)} /></label>
                                    <label className="share-items__form__content-step-4__form-column__label">Godzina<input type="time" value={time} className="share-items__form__content-step-4__form-column__label__input" onChange={e=>changeTime(e)} /></label>
                                    <label className="share-items__form__content-step-4__form-column__label">Uwagi dla kuriera<textarea value={note} className="share-items__form__content-step-4__form-column__label__input share-items__form__content-step-4__form-column__label__input--textarea" onChange={e=>changeNote(e)} /></label>
                                </div>
                            </div>
                        </form>
                    
        )
    }
}
