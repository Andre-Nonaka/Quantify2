import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'    
import { NavLink } from 'react-router-dom'
import { useContext } from 'react';

import { useTranslation } from "react-i18next";
import i18n from './i18n';
import LocaleContext from './LocaleContext'
import { useEffect, useState } from "react";

library.add(fas)

function NavBar() {

    const [locale2, setLocale] = useState(i18n.language);
    const { locale } = useContext(LocaleContext);

    function changeLocale (l) {
        if (locale2 !== l) {
          i18n.changeLanguage(l);
        }
    }

    const { t } = useTranslation();
  
    i18n.on('languageChanged', (lng) => setLocale(i18n.language));

    const [navbarOpen, setNavbarOpen] = useState(false)
    const [hideLightbox, setHideLightbox] = useState(true)

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
        setHideLightbox(current => !current)
    }

    return(
        <div id="mainNav" style={{position: "sticky", top: "0", borderBottom: "2px solid black", zIndex: "9999999"}}>
            <LocaleContext.Provider value={{locale, setLocale}}>
                <div id="navbarNew">
                    <span id="mainText"><FontAwesomeIcon icon="fa-solid fa-chart-line" /> Quantify</span>
                    <div id="navDiv">
                        <div className="dropdown2">
                            <button className="dropbtn2">
                                <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">{t('firstNav')}</NavLink>
                            </button>
                        </div>
                        <div className="dropdown">
                            <button id="listingInfo" className="dropbtn">
                                {t('secondNav')} <FontAwesomeIcon icon="fa-solid fa-caret-down" /><FontAwesomeIcon icon="fa-solid fa-caret-up" />
                            </button>
                            <div className="dropdown-content">
                                <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/Listing/Popular">{t('thirdNav')}</NavLink>
                                <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/Listing/New">{t('fourthNav')}</NavLink>
                            </div>
                        </div> 
                        <div className="dropdown">
                            <button id="agentsInfo" className="dropbtn">
                                {t('fifthNav')} <FontAwesomeIcon icon="fa-solid fa-caret-down" /><FontAwesomeIcon icon="fa-solid fa-caret-up" />
                            </button>
                            <div className="dropdown-content">
                                <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/Agents/Request">{t('sixthNav')}</NavLink>
                            </div>
                        </div> 
                        <div className="dropdown">
                            <button id="pagesInfo" className="dropbtn">
                                {t('seventhNav')} <FontAwesomeIcon icon="fa-solid fa-caret-down" /><FontAwesomeIcon icon="fa-solid fa-caret-up" />
                            </button>
                            <div className="dropdown-content">
                                <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/Pages/Discussions">{t('eighthNav')}</NavLink>
                            </div>
                        </div>
                        <div className="dropdown2">
                            <button className="dropbtn2">
                                <NavLink className={({ isActive }) => (isActive ? "active" : "")} id="userLink" to="/User/Login"><FontAwesomeIcon icon="fa-solid fa-user-plus" /> {t('ninethNav')}</NavLink>
                            </button>
                        </div>
                        <div className="dropdown2">
                            <button id="bellInfo" className="dropbtn2">
                                <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/User/Notification"><FontAwesomeIcon icon="fa-solid fa-bell" /></NavLink>
                            </button>
                        </div> 
                        <div className="dropdown">
                            <button id="globeInfo" className="dropbtn">
                                <FontAwesomeIcon icon="fa-solid fa-globe" /> <FontAwesomeIcon icon="fa-solid fa-caret-down" /><FontAwesomeIcon icon="fa-solid fa-caret-up" />
                            </button>
                            <div className="dropdown-content">
                                <a href="#English" onClick={() => changeLocale('en')}><FontAwesomeIcon icon="fa-solid fa-globe" /> {t('twelvethNav')}</a>
                                <a href="#French"  onClick={() => changeLocale('fr')}><FontAwesomeIcon icon="fa-solid fa-globe" /> {t('eleventhNav')}</a>
                            </div>
                        </div> 
                        <div className="dropdown2">
                            <button className="dropbtn2">
                                <NavLink id="addToList" to="/Add/Listing"><FontAwesomeIcon icon="fa-solid fa-circle-plus" /><FontAwesomeIcon icon="fa-solid fa-circle-minus" /> {t('tenthNav')}</NavLink> 
                            </button>
                        </div>
                    </div>
                </div>
                <div id="navbarNew2">
                    <span id="mainText"><FontAwesomeIcon icon="fa-solid fa-chart-line" style={{float: "left"}}/> Quantify</span>
                    <div id="navDiv2" style={{width: "100%"}}>
                        <button id="navMobile" style={{float: "right", marginTop: "1%", marginRight: "1%"}} onClick={handleToggle}>
                            {navbarOpen ? (<FontAwesomeIcon icon="fa-solid fa-xmark" />) : (<FontAwesomeIcon icon="fa-solid fa-bars" />)}
                        </button>
                    </div>
                </div>
                <div id="lineh1"></div>
                <div className={`lightbox ${hideLightbox ? "" : "hide-lightbox"}`} style={{position: "absolute"}}>
                    <div className="dropdown2" style={{width: "100%"}}>
                        <button className="dropbtn2" style={{width: "100%", textAlign: "left"}}>
                            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">{t('firstNav')}</NavLink>
                        </button>
                    </div>
                    <div className="dropdown" style={{width: "100%"}}>
                        <button id="listingInfo" className="dropbtn" style={{width: "100%", textAlign: "left"}}>
                            {t('secondNav')} <FontAwesomeIcon icon="fa-solid fa-caret-down" /><FontAwesomeIcon icon="fa-solid fa-caret-up" />
                        </button>
                        <div className="dropdown-content" style={{width: "100%"}}>
                            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/Listing/Popular">{t('thirdNav')}</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/Listing/New">{t('fourthNav')}</NavLink>
                        </div>
                    </div> 
                    <div className="dropdown" style={{width: "100%"}}>
                        <button id="agentsInfo" className="dropbtn" style={{width: "100%", textAlign: "left"}}>
                           {t('fifthNav')} <FontAwesomeIcon icon="fa-solid fa-caret-down" /><FontAwesomeIcon icon="fa-solid fa-caret-up" />
                        </button>
                        <div className="dropdown-content" style={{width: "100%"}}>
                            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/Agents/Request">{t('sixthNav')}</NavLink>
                        </div>
                    </div> 
                    <div className="dropdown" style={{width: "100%"}}>
                        <button id="pagesInfo" className="dropbtn" style={{width: "100%", textAlign: "left"}}>
                            {t('seventhNav')} <FontAwesomeIcon icon="fa-solid fa-caret-down" /><FontAwesomeIcon icon="fa-solid fa-caret-up" />
                        </button>
                        <div className="dropdown-content" style={{width: "100%"}}>
                            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/Pages/Discussions">{t('eighthNav')}</NavLink>
                        </div>
                    </div>
                    <div className="dropdown2" style={{width: "100%"}}>
                        <button className="dropbtn2" style={{width: "100%", textAlign: "left"}}>
                            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/User/Login">{t('ninethNav')}</NavLink>
                        </button>
                    </div>
                    <div className="dropdown2" style={{width: "100%"}}>
                            <button id="bellInfo" className="dropbtn2" style={{width: "100%", textAlign: "left"}}>
                                <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/User/Notification">{t('notificationsTag')}</NavLink>
                            </button>
                        </div> 
                    <div className="dropdown" style={{width: "100%"}}>
                        <button id="globeInfo" className="dropbtn" style={{width: "100%", textAlign: "left"}}>
                            {t('languageTrans')} <FontAwesomeIcon icon="fa-solid fa-caret-down" /><FontAwesomeIcon icon="fa-solid fa-caret-up" />
                        </button>
                        <div className="dropdown-content" style={{width: "100%"}}>
                            <a href="#English" onClick={() => changeLocale('en')}><FontAwesomeIcon icon="fa-solid fa-globe" /> {t('twelvethNav')}</a>
                            <a href="#French"  onClick={() => changeLocale('fr')}><FontAwesomeIcon icon="fa-solid fa-globe" /> {t('eleventhNav')}</a>
                        </div>
                    </div> 
                    <div className="dropdown2" style={{width: "100%"}}>
                        <button className="dropbtn2" style={{width: "100%", textAlign: "left"}}>
                            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/Add/Listing">{t('tenthNav')}</NavLink>
                        </button>
                    </div>
                </div>
            </LocaleContext.Provider>
        </div>
    )
}

export default NavBar;