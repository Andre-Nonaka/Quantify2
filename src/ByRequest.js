//import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';

import { useTranslation } from "react-i18next";
import i18n from './i18n';
import LocaleContext from './LocaleContext'
import { useState } from "react";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fas)

function ByRequest() {

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
            <img id="houseImg" src="../staffs.png" alt="House" style={{zIndex: "-1", height: "55vh"}}/>
            <div className="top-left2" style={{minWidth: "100%", marginTop: "10%"}}>
              <h1 style={{textAlign: "center", minWidth: "100%"}}>{t('agentTitleTag')}</h1>
            </div>
        </div>
        <h1 id="h1tagRequest" style={{color: "black", fontSize: "45px", padding: "2%"}}>Contact</h1>
        <p id="ptagRequest">{t('belowContactTag')}</p>
        <div id="agDiv" style={{padding: "2%", marginBottom: "0%"}}>
          <div style={{minWidth: "100%", height: "350px", marginBottom: "0%"}}>
            <div id="mainPerson1" style={{float: "left", minWidth: "50%"}}><img id="person1" src="../img4.webp" alt="Patty Roberts"/></div>
            <div id="person1MoreDetails" style={{float: "left", minWidth: "50%", marginLeft: "-10%"}}>
              <h1 style={{marginTop: "0%"}}>Patty</h1>
              <p style={{marginTop: "-3%"}}>{t('sendButton')} Patty {t('afterName')}!</p>
              <form action="mailto:patty@quantify.com" method="post" encType="text/plain">
                {t('nameTag')}*<br/>
                <input id="nameAgent2" type="text" name="name" placeholder={t('placeholderName')} style={{marginTop: "0.5%"}} required/><br/><br/><br/>
                Email*<br/>
                <input id="emailAgent2" type="email" name="mail" placeholder={t('placeholderEmail')} style={{marginTop: "0.5%"}} required/><br/><br/><br/>
                {t('commentTag')}*<br/>
                <input id="commentAgent2" type="text" name="comment" size="50" placeholder={t('placeholderComment')} style={{marginTop: "0.5%"}} required/><br/><br/><br/><br/>
                <input type="submit" value={t('sendButton')}/>
                <input type="reset" value={t('resetButton')}/>
              </form>
            </div>
          </div>
          <br/>
          <div style={{minWidth: "100%", paddingTop: "0%", height: "350px"}}>
            <div id="mainPerson1" style={{float: "left", minWidth: "50%"}}><img id="person1" src="../img3.webp" alt="Stella Rize"/></div>
            <div id="person1MoreDetails" style={{float: "left", minWidth: "50%", marginLeft: "-10%"}}>
              <h1 style={{marginTop: "0%"}}>Stella</h1>
              <p style={{marginTop: "-3%"}}>{t('sendButton')} Stella {t('afterName')}!</p>
              <form action="mailto:stella@quantify.com" method="post" encType="text/plain">
                {t('nameTag')}*<br/>
                <input id="nameAgent2" type="text" name="name" placeholder={t('placeholderName')} style={{marginTop: "0.5%"}} required/><br/><br/><br/>
                Email*<br/>
                <input id="emailAgent2" type="email" name="mail" placeholder={t('placeholderEmail')} style={{marginTop: "0.5%"}} required/><br/><br/><br/>
                {t('commentTag')}*<br/>
                <input id="commentAgent2" type="text" name="comment" size="50" placeholder={t('placeholderComment')} style={{marginTop: "0.5%"}} required/><br/><br/><br/><br/>
                <input type="submit" value={t('sendButton')}/>
                <input type="reset" value={t('resetButton')}/>
              </form>
            </div>
          </div>
        </div>
        <div className="scrolltop" onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }} style={{display: visible ? 'inline' : 'none'}}>
          <FontAwesomeIcon icon="fa-solid fa-angles-up" />
        </div>
        <Footer/>
      </div>
    </LocaleContext.Provider>
  );
}

export default ByRequest;
