import React, { Component } from 'react'

export default class ShareItemsFormStep1 extends Component {
    render() {
        const {items, warningInfo} = this.props;
        return (
            <form className="share-items__form__content-step-1">
                    {items.map((item, idx) => {
                        return (
                            <label key={idx} className="share-items__form__content-step-1__label">
                                <input type="checkbox" className="share-items__form__content-step-1__label__input--checkbox" name={idx} defaultChecked={item.isChecked} value={item.item} onClick={e => this.props.addItem(e)} />{item.item}
                                </label>)
                    })}
                    <p className="wrong-info steps">{warningInfo}</p>
            </form>
        )
    }
}
