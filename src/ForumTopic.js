//import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { NavLink } from 'react-router-dom'

import { useTranslation } from "react-i18next";
import i18n from './i18n';
import LocaleContext from './LocaleContext'
import { useState } from "react";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fas)

function ForumTopic() {

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
    <LocaleContext.Provider value={{locale, setLocale}}>
      <div id="belowNav">
        <Navbar/>
        <div className="dark-img" style={{zIndex: "-1"}}>
            <img id="houseImg" src="../discussions4.jpg" alt="House" style={{zIndex: "-1", height: "60vh"}}/>
            <div className="top-left2" style={{minWidth: "100%", marginTop: "11%"}}>
              <h1 style={{textAlign: "center", minWidth: "100%"}}>{t('eighthNav')}</h1>
            </div>
        </div>
        <h1 id="h1tagRequest" style={{color: "black", fontSize: "45px", padding: "2%", marginBottom: "2%"}}>Forum</h1>
        <div id="rulesForum" style={{float: "left", minWidth: "96%", height: "100%", background: "white"}}>
          <p><b><span className="errorNotification">{t('pTagDiscussions')}</span></b> {t('pTagSearchSecond')} <NavLink id="logOrRegister" to="/User/Login">{t('ninethNav')}</NavLink>.</p>
        </div>
        <div className="scrolltop" onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }} style={{display: visible ? 'inline' : 'none'}}>
          <FontAwesomeIcon icon="fa-solid fa-angles-up" />
        </div>
        <Footer/>
      </div>
    </LocaleContext.Provider>
  );
}

export default ForumTopic;