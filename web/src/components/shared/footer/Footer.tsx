import React from 'react';
import './style.css';

import twitter from '../../../assets/images/kz-twitter.svg';
import facebook from '../../../assets/images/kz-facebook.svg';
import instagram from '../../../assets/images/kz-instagram.svg';
import pinterest from '../../../assets/images/kz-pinterest.svg';
import payment from '../../../assets/images/payments.png';

export const Footer: React.FC = () => {
    function showRightsYear() {
        const currentYear = new Date().getFullYear().toString();

        if (currentYear === '2022') {
            return <span>{currentYear} </span>;
        } else {
            return <span>2022 - {currentYear} </span>;
        }
    }

    return (
        <div className={'footer-container'}>
            <div className={'footer'}>
                <div className={'footer__row'}>
                    <div className="footer__row1__social">
                        <a className="footer__social-item twitter" href="#">
                            <img alt="twitter" src={twitter} />
                        </a>
                        <a className="footer__social-item" href="#">
                            <img alt="facebook" src={facebook} />
                        </a>
                        <a className="footer__social-item " href="#">
                            <img alt="instagram" src={instagram} />
                        </a>
                        <a className="footer__social-item " href="#">
                            <img alt="pinterest" src={pinterest} />
                        </a>
                    </div>
                    <div className="footer__row1__policy">
                        <a className="footer__policy-item" href="#">
                            Returns Policy
                        </a>
                        <a className="footer__policy-item" href="#">
                            Privacy Policy
                        </a>
                    </div>
                    <div className="footer__row1__currency-language">
                        <div>
                            <label className="footer__label">Currency</label>
                            <button className="footer__button" type="button">
                                USD
                                <span className="dropdown-toggle-icon"></span>
                            </button>
                        </div>
                        <div>
                            <label className="footer__label">Language</label>
                            <button className="footer__button" type="button">
                                ENGLISH
                                <span className="dropdown-toggle-icon"></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={'footer__row'}>
                    <div className="footer__row2__rights">
                        <p className="rights">
                            &copy;
                            <span>{showRightsYear()}</span>
                            <span> - Sport Gen</span>
                        </p>
                    </div>
                    <div className="footer__row2__payment">
                        <a className="footer__payment-item" href="#">
                            <img alt="payment" src={payment} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
