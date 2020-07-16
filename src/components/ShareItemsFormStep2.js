import React, { Component } from 'react'

export default class ShareItemsFormStep2 extends Component {
    render() {
        const {bags, chooseBags} = this.props;
        return (
            <form className="share-items__form__content-step-2">
                <h4 className="share-items__form__content__title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h4>
                <select value={bags} className="share-items__form__content-step-2__select" onChange={e=>chooseBags(e)}>
                    <option value="0" className="share-items__form__content-step-2__select__option">— wybierz —</option>
                    <option value="1" className="share-items__form__content-step-2__select__option">1</option>
                    <option value="2" className="share-items__form__content-step-2__select__option">2</option>
                    <option value="3" className="share-items__form__content-step-2__select__option">3</option>
                    <option value="4" className="share-items__form__content-step-2__select__option">4</option>
                    <option value="5" className="share-items__form__content-step-2__select__option">5</option>
                </select>
            </form>
        )
    }
}
