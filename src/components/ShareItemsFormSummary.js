import React, { Component } from 'react';
import image1 from "../images/Icon-1.svg";
import image2 from "../images/Icon-4.svg";

export default class ShareItemsFormSummary extends Component {
    render() {
        const {bags, items, helpGroups, cities, street, city, postCode, phone, date, time, note} = this.props;
        return (
            <div className="share-items__summary">
                            <h2 className="share-items__summary__title">Podsumowanie Twojej darowizny</h2>
                            <div className="share-items__summary__content-with-icons">
                                <h3 className="share-items__summary__content-with-icons__title">Oddajesz</h3>
                                <div className="share-items__summary__content-with-icons__main">
                                    <img src={image1} alt="shirt-icon" className="share-items__summary__content-with-icons__main__img" />
                                    <p className="share-items__summary__content-with-icons__main__paragraph">
                                        <span className="share-items__summary__content-with-icons__main__paragraph__text">
                                            {bags} {bags === 1 ? "worek" : "work"}{bags === 0 || bags === 5 ? "ów" : ""}{bags === 2 || bags === 3 || bags === 4 ? "i" : ""},
                                        </span>
                                        {items.filter(item => item.isChecked)
                                        .map((item, idx) => {
                                            return <span key={idx} className="share-items__summary__content-with-icons__main__paragraph__text"> {item.item},</span>
                                        })}
                                        {helpGroups.filter(group => group.isChecked)
                                        .map((group, idx) => {
                                            return <span key={idx} className="share-items__summary__content-with-icons__main__paragraph__text"> {group.group},</span>
                                        })}
                                    </p>
                                </div>
                                <div className="share-items__summary__content-with-icons__main">
                                    <img src={image2} alt="recycling-icon" />
                                    <p className="share-items__summary__content-with-icons__main__paragraph">
                                        <span className="share-items__summary__content-with-icons__main__paragraph__text">Dla lokalizacji:</span>
                                        <span className="share-items__summary__content-with-icons__main__paragraph__text"> {cities}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="share-items__summary__data">
                                <div className="share-items__summary__data__column">
                                    <h4 className="share-items__summary__data__column__title">Adres odbioru:</h4>
                                    <p className="share-items__summary__data__column__paragraph"><span>Ulica: </span><span>{street}</span></p>
                                    <p className="share-items__summary__data__column__paragraph"><span>Miasto: </span><span>{city}</span></p>
                                    <p className="share-items__summary__data__column__paragraph"><span>Kod pocztowy: </span><span>{postCode}</span></p>
                                    <p className="share-items__summary__data__column__paragraph"><span>Numer telefonu: </span><span>{phone}</span></p>
                                </div>
                                <div className="share-items__summary__data__column">
                                    <h4 className="share-items__summary__data__column__title">Termin odbioru</h4>
                                    <p className="share-items__summary__data__column__paragraph"><span>Data: </span><span>{date}</span></p>
                                    <p className="share-items__summary__data__column__paragraph"><span>Godzina: </span><span>{time}</span></p>
                                    <p className="share-items__summary__data__column__paragraph"><span>Uwagi do kuriera: </span><span>{note}</span></p>
                                </div>
                            </div>
                        </div>
        )
    }
}
