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

function Listing() {

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
        <img id="houseImg" src="../buildings3.jpg" alt="House" style={{zIndex: "-1", height: "60vh"}}/>
            <div className="top-left2" style={{minWidth: "100%", marginTop: "11%"}}>
              <h1 style={{textAlign: "center", minWidth: "100%"}}>Information</h1>
            </div>
        </div>
        <h1 id="h1tagRequest" style={{color: "black", fontSize: "45px", padding: "2%"}}>{t('descriptionTag')}</h1>
        <p id="ptagRequest">{t('tagBelowDescription')}</p>
        <p style={{paddingLeft: "2%", paddingRight: "2%", marginTop: "3%"}}><b>{t('houseDescriptionTag')}</b></p>
        <p style={{paddingLeft: "2%", paddingRight: "2%", marginBottom: "0%"}}>{t('fullHouseDescription')}</p>
        <div id="agDiv" style={{padding: "2%", marginBottom: "0%"}}>
          <div style={{minWidth: "100%", height: "350px", marginBottom: "0%"}}>
            <div id="mainPerson1" style={{float: "left", minWidth: "50%"}}><img id="person1" src="https://images.adsttc.com/media/images/5e1d/02c3/3312/fd58/9c00/06e9/large_jpg/NewHouse_SA_Photo_01.jpg?1578959519" alt="House For Sale"/></div>
            <div id="person1MoreDetails" style={{float: "left", minWidth: "50%", marginLeft: "-10%"}}>
              <h1 style={{marginTop: "0%"}}>54 Seaton Crescent</h1>
              <p style={{marginTop: "-3%"}}>Tillsonbourg, Ontario</p>
              <p><b>{t('startingPrice')}:</b> $929,000</p>
              <p><b>Date:</b> $929,000</p>
              <p><b>{t('highestBid')}:</b> $1,029,000</p>
              <p><b>{t('numberBaths')}:</b> 4</p>
              <p><b>{t('numberGarages')}:</b> 4</p>
              <p><b>{t('propertySizeTag')}:</b> 2175 m<sup>2 </sup></p>
              <p><b>{t('yearBuilt')}:</b> 2015</p>
              <p><b>{t('fourthTagFilter')}:</b> {t('detachedHome')}</p>
            </div>
          </div>
          <br/>
          <h1 id="h1tagRequest3" style={{color: "black", fontSize: "45px", paddingBottom: "2%"}}>{t('agentTag')}</h1>
          <p id="ptagRequest3">{t('tagBelowAgent')}</p>
          <div style={{minWidth: "100%", paddingTop: "0%", height: "370px"}}>
            <div id="mainPerson1" style={{float: "left", minWidth: "50%"}}><img id="person1" src="../img3.webp" alt="Stella Rize"/></div>
            <div id="person1MoreDetails" style={{float: "left", minWidth: "50%", marginLeft: "-10%"}}>
              <h1 style={{marginTop: "0%"}}>Stella</h1>
              <p style={{marginTop: "-3%"}}>{t('belowAgentName')}</p>
              <form action="mailto:someone@example.com" method="post" encType="text/plain">
                {t('nameTag')}:<br/>
                <input id="nameAgent2" type="text" name="name" placeholder={t('placeholderName')}/><br/><br/><br/>
                Email:<br/>
                <input id="emailAgent2" type="email" name="mail" placeholder={t('placeholderEmail')}/><br/><br/><br/>
                {t('commentTag')}:<br/>
                <input id="commentAgent2" type="text" name="comment" size="50" placeholder={t('placeholderComment')}/><br/><br/><br/><br/>
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

export default Listing;