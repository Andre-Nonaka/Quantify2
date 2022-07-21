import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'    
import { NavLink } from 'react-router-dom'

import { useTranslation } from "react-i18next";
import { useState, useEffect} from "react";
import i18n from './i18n';
import LocaleContext from './LocaleContext'

library.add(fas)

function Footer() {

    const { t } = useTranslation();
    const [locale, setLocale] = useState(i18n.language);

    i18n.on('languageChanged', (lng) => setLocale(i18n.language));

    const [isOpened, setIsOpened] = useState(false);

    const sendMessage = (e) => {
        e.preventDefault();
        setIsOpened(true);
    };

    return(
        <LocaleContext.Provider value={{locale, setLocale}}>
            <footer>
                <div id="contentDiv">
                    <div id="left" style={{float: "left"}}>
                        <p id="logoFooter"><FontAwesomeIcon icon="fa-solid fa-chart-line" /> Quantify</p>
                        <p id="quantifyText">{t('footerCompany')}</p>
                        <p id="methodPayment">{t('paymentMethod')}</p>
                        <img id="visaCard" height="40" src="https://shoplineimg.com/assets/footer/card_visa.png" alt="Visa Card" onclick="window.open(this.src)"/>
                        <img id="masterCard" height="40" src="https://shoplineimg.com/assets/footer/card_master.png" alt="Master Card" onclick="window.open(this.src)"/>
                        <img id="paypalCard" height="40" src="https://shoplineimg.com/assets/footer/card_paypal.png" alt="Paypal" onclick="window.open(this.src)"/>
                        <p id="methodSocials">{t('contactUs')}</p>
                        <a href="#Facebook" className="fa fa-facebook"></a>
                        <a href="#Twitter" className="fa fa-twitter"></a>
                        <a href="#Google" className="fa fa-google"></a>
                        <a href="#Linkedin" className="fa fa-linkedin"></a>
                        <a href="#Instagram" className="fa fa-instagram"></a>
                    </div>
                    <div id="middle" style={{float: "left"}}>
                        <p id="methodLink">{t('popularLink')}</p>
                        <div id="leftLinks">
                            <p><NavLink id="a1" to="/">{t('firstNav')}</NavLink></p>
                            <p><NavLink id="a2" to="/Listing/Popular">{t('thirdNav')}</NavLink></p>
                            <p><NavLink id="a3" to="/Listing/New">{t('fourthNav')}</NavLink></p>
                            <p><NavLink id="a4" to="/Pages/Discussions">{t('eighthNav')}</NavLink></p>
                        </div>
                        <div id="rightLinks">
                            <p><NavLink id="a6" to="/Agents/Request">{t('sixthNav')}</NavLink></p>
                            <p><NavLink id="a8" to="/User/Notification">{t('notificationsTag')}</NavLink></p>
                            <p><NavLink id="a9" to="/User/Login">{t('ninethNav')}</NavLink></p>
                            <p><NavLink id="a10" to="/Add/Listing">{t('tenthNav')}</NavLink></p>
                        </div>
                        <p id="methodCareer">{t('patnersTag')}</p>
                        <img id="logo1" height="65" src="../logo1.png" alt="Partner 1" onclick="window.open(this.src)"/>
                        <img id="logo2" height="65" src="../logo2.png" alt="Partner 2" onclick="window.open(this.src)"/>
                        <img id="logo3" height="65" src="../logo3.png" alt="Partner 3" onclick="window.open(this.src)"/>
                    </div>
                    <div id="right" style={{float: "left"}}>
                        <p id="methodLetter">{t('newsLetterTag')}</p>
                        <p id="newsLetterLogo">{t('newsTagBelow')}</p>
                        <form onSubmit={sendMessage}>
                            <input id="newLetterEmail" type="email" aria-label="Email Signup" placeholder={t('placeholderEmail')} required/>
                            <button id="submitBtnFooter" type="submit">{t('subscribeButton')}</button>{isOpened && (<span className="boxContent">{t('resultShow')} <FontAwesomeIcon icon="fa-solid fa-check" /></span>)}
                        </form>
                        <p id="methodContact">{t('contactUsNow')}</p>
                        <a id="callCompany" href="tel:+19054533125" style={{textDecoration: "none"}}><div id="phoneDiv">
                            <div id="leftPhone">
                                <FontAwesomeIcon icon="fa-solid fa-phone" />
                            </div>
                            <div id="rightPhone">
                                <p id="textlogoFooter" style={{textDecoration: "none"}}>(905)-453-3125</p>
                            </div>
                        </div></a>
                        <div id="phoneDiv">
                            <div id="leftPhone">
                                <FontAwesomeIcon icon="fa-solid fa-clock" />
                            </div>
                            <div id="rightPhone">
                                <p id="textfooterTime">{t('dayTime')}</p>
                            </div>
                        </div>
                        <a id="showAddress" href="https://www.google.com/maps/place/17+Mario+St,+Brampton,+ON+L6P+1N1/@43.7798091,-79.6621344,20.5z/data=!4m13!1m7!3m6!1s0x882b234d50aa2b31:0x3384c63b8abee7ec!2sMario+St,+Brampton,+ON!3b1!8m2!3d43.7797433!4d-79.6617625!3m4!1s0x882b234d5a9a57f9:0x40564ec0b3e38df9!8m2!3d43.7799185!4d-79.6620296"><div id="phoneDiv">
                            <div id="leftPhone">
                                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                            </div>
                            <div id="rightPhone">
                                <p id="textfooterAddress">17 Mario St, Brampton, ON L6P 1N1</p>
                            </div>
                        </div></a>
                        <a id="emailTo" href="mailto:info@quantify.com"><div id="phoneDiv">
                            <div id="leftPhone">
                                <FontAwesomeIcon icon="fa-solid fa-envelope" />
                            </div>
                            <div id="rightPhone">
                                <p id="textfooterEmail">info@quantify.com</p>
                            </div>
                        </div></a>
                    </div>
                    <div id="center">
                        <div id="bottomPart">
                            <p id="footerBottom">{t('allRights')}</p>
                            <p id="footerBottomLeft"><NavLink id="tagTerms" to="/Documents/Terms"><span id="termsAndServices">{t('termsTag')}</span></NavLink> | <NavLink id="tagPrivacy" to="/Documents/Privacy"><span id="privacyPolicy">{t('policyTag')}</span></NavLink></p>
                        </div>
                    </div>
                </div>
            </footer>
        </LocaleContext.Provider>
    )
}

export default Footer;