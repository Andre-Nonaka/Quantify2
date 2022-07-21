import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import i18n from './i18n';
import LocaleContext from './LocaleContext'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fas)

function Notification() {

  const { t } = useTranslation();
  const [locale, setLocale] = useState(i18n.language);

  i18n.on('languageChanged', (lng) => setLocale(i18n.language));

  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div id="belowNav">
      <LocaleContext.Provider value={{locale, setLocale}}>
        <Navbar/>
        <div className="dark-img" style={{zIndex: "-1"}}>
            <img id="houseImg" src="../notification.jpeg" alt="House" style={{zIndex: "-1", height: "60vh"}}/>
            <div className="top-left2" style={{minWidth: "100%", marginTop: "11%"}}>
              <h1 style={{textAlign: "center", minWidth: "100%"}}>{t('errorMainTitleText')}</h1>
            </div>
        </div>
        <h1 id="h1tagRequest" style={{color: "black", fontSize: "45px", padding: "2%", marginBottom: "2%"}}>{t('errorTitleText')}</h1>
        <div id="rulesForum" style={{float: "left", minWidth: "96%", height: "100%", background: "white"}}>
          <p><b><span className="errorNotification">{t('errorText')}</span></b> {t('error')} <NavLink id="logOrRegister" to="/User/Login">{t('errorLogin')}</NavLink>.</p>
        </div>
        <div className="scrolltop" onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }} style={{display: visible ? 'inline' : 'none'}}>
          <FontAwesomeIcon icon="fa-solid fa-angles-up" />
        </div>
        <Footer/>
      </LocaleContext.Provider>
    </div>
  );
}

export default Notification;
