import { useState } from 'react';
import Popup from '../popup/Popup';
import { PopupPosition } from '../popup/types';
import './emailme.scss';

const CONFIG = {
    title: 'Contact me',
    showHeader: true,
    showFooter: true,
    showOverlay: true,
    positionX: PopupPosition.center,
    positionY: PopupPosition.center,
    padding: '20px',
};
/*
const ERRORS = {
    fillField: 'Please fill in the field',
    errorInEmail: 'Maybe you forgot @ ?',
    errorInName: 'The name must consist of the letters',
};
*/

export default function EmailMe(props: { open: boolean; onClose: () => void }) {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const onChangeName = () => {};

    return (
        <Popup {...props} config={CONFIG}>
            <form className="emailme__form" role="form">
                <div className="emailme__group">
                    <div className="emailme__input-title">Whats your name </div>
                    <div className="emailme__input-block">
                        <input
                            type="text"
                            autoComplete="name"
                            name="Name"
                            className="emailme__input"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            placeholder="Ryan Gosling"
                        />
                        <div className="emailme__input-error"></div>
                    </div>
                </div>
                <div className="emailme__group">
                    <div className="emailme__input-title">E-mail</div>
                    <div className="emailme__input-block">
                        <input
                            type="text"
                            autoComplete="email"
                            name="E-mail"
                            className="emailme__input"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="helloworld@example.com"
                        />
                        <div className="emailme__input-error"></div>
                    </div>
                </div>
                <div className="emailme__errorbox">
                    <div className="emailme__errorbox-wrapper" style={{ display: 'none' }}>
                        <div className="emailme__errorbox-text">
                            <p className="emailme__errorbox-item"></p>
                        </div>
                    </div>
                </div>
            </form>
        </Popup>
    );
}
