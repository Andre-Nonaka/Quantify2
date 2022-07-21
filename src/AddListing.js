//import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'   
import React, { useState } from "react";
import { NavLink } from 'react-router-dom'

import { useTranslation } from "react-i18next";
import i18n from './i18n';
import LocaleContext from './LocaleContext'

library.add(fas)

function MostPopularAgent() {

  const { t } = useTranslation();
  const [locale, setLocale] = useState(i18n.language);

  i18n.on('languageChanged', (lng) => setLocale(i18n.language));

  const [img, setImg] = useState();

  const displayImage = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };

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
            <img id="houseImg" src="../homeImage.webp" alt="House" style={{zIndex: "-1", height: "60vh"}}/>
            <div className="top-left2" style={{minWidth: "100%", marginTop: "11%"}}>
              <h1 style={{textAlign: "center", minWidth: "100%"}}>{t('addListingTitle')}</h1>
            </div>
        </div>
        <h1 id="h1tagRequest" style={{padding: "2%  ", color: "black", fontSize: "45px", marginBottom: "0%"}}>{t('belowListingTitle')}</h1>
        <p id="belowTagRequest" style={{padding: "2%", marginTop: "-4%", marginBottom: "3%"}}>{t('belowListingTitleTag')}</p>
        <div id="rulesForum" style={{float: "left", minWidth: "100%", height: "100%", background: "white"}}>
          <p style={{borderLeft: "2px solid red", padding: "1%", width: "100%", marginBottom: "2.5%"}}><b><mark>Note:</mark></b> {t('noteBelow')} <NavLink id="logOrRegister" to="/User/Login">{t('errorLogin')}</NavLink>.</p>
          <form>
            <p style={{marginBottom: "1%"}}>{t('addressTag')}*</p>
            <input className="addListingForm" type="text" style={{padding: "1%"}} placeholder={t('enterFullAddress')} required></input>
            <br></br>
            <br></br>
            <br></br>
            <p className="addListingFormPtag" style={{marginBottom: "1%"}}>{t('fullNameTag')}*</p>
            <input className="addListingForm" type="text" style={{padding: "1%"}} placeholder={t('enterAgentFullName')} required></input>
            <br></br>
            <br></br>
            <br></br>
            <p className="addListingFormPtag" style={{marginBottom: "1%"}}>{t('startDateTag')}*</p>
            <input className="addListingForm" type="date" style={{padding: "1%"}} placeholder={t('enterAuctionStartDate')} required></input>
            <br></br>
            <p className="addListingFormPtag" style={{marginBottom: "1%", marginTop: "2%"}}>{t('endingDateTag')}*</p>
            <input className="addListingForm" type="date" style={{padding: "1%"}} placeholder={t('enterAuctionEndDate')} required></input>
            <br></br>
            <p className="addListingFormPtag" style={{marginBottom: "1%", marginTop: "2%"}}>{t('startingPrice')}*</p>
            <input className="addListingForm" type="text" style={{padding: "1%"}} placeholder={t('enterListingPrice')} required></input>
            <br></br>
            <br></br>
            <br></br>
            <p className="addListingFormPtag" style={{marginBottom: "1%"}}>{t('phoneNumberTag')}*</p>
            <input className="addListingForm" type="tel" style={{padding: "1%"}} placeholder={t('enterAgentPhoneNumber')} required></input>
            <br></br>
            <p className="addListingFormPtag" style={{marginBottom: "1%", marginTop: "2%"}}>{t('descriptionTag')}*</p>
            <input className="addListingForm" type="text" style={{padding: "1%"}} placeholder={t('enterListingDescription')} required></input>
            <br></br>
            <br></br>
            <p className="addListingFormPtag" style={{marginBottom: "1%", marginTop: "2.8%"}}>{t('propertySizeTag')}*</p>
            <input className="addListingForm" type="text" style={{padding: "1%"}} placeholder={t('enterPropertySize')} required></input>
            <br></br>
            <br></br>
            <p className="addListingFormPtag" style={{marginBottom: "1%", marginTop: "2.8%"}}>{t('numberOfBaths')}*</p>
            <input className="addListingForm" type="number" style={{padding: "1%"}} placeholder={t('enterNumberOfBaths')} required></input>
            <br></br>
            <p className="addListingFormPtag" style={{marginBottom: "1%", marginTop: "2%"}}>{t('numberOfGarages')}*</p>
            <input className="addListingForm" type="number" style={{padding: "1%"}} placeholder={t('enterNumberOfGarages')} required></input>
            <br></br>
            <p className="addListingFormPtag" style={{marginBottom: "1%", marginTop: "2%"}}>{t('numberOfBedrooms')}*</p>
            <input className="addListingForm" type="number" style={{padding: "1%"}} placeholder={t('enterNumberOfBedrooms')} required></input>
            <br></br>
            <p className="addListingFormPtag" style={{marginBottom: "1%", marginTop: "2%"}}>{t('propertyTag')}*</p>
            <input className="addListingForm" type="number" style={{padding: "1%"}} placeholder={t('enterTypeProperty')} required></input>
            <br></br>
            <p className="addListingFormPtag" style={{marginBottom: "1%", marginTop: "2%"}}>{t('propertyImage')}*</p>
            <input className="addListingFormImage" type='file' onChange={displayImage} required></input>
            <br></br>
            <br></br>
            <div style={{width: "300px", height: "200px", border: "2px solid black"}}>
              <img id="houseImageDisplay" src={img} alt={t('houseTag')} style={{width: "300px", height: "200px"}}/>
            </div>
            <br></br>
            <input type="submit" disabled style={{cursor: "no-drop"}} value={t('submitButton')}></input>
            <p id="disclaimerInfo" style={{borderLeft: "2px solid red", padding: "1%", marginTop: "2%"}}><b><mark>{t('disclaimerTitle')}</mark></b> {t('disclaimerTag')}</p>
          </form>
        </div>
        <div className="scrolltop" onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }} style={{display: visible ? 'inline' : 'none'}}>
          <FontAwesomeIcon icon="fa-solid fa-angles-up" />
        </div>
        <Footer/>
      </div>
    </LocaleContext.Provider>
  );
}

export default MostPopularAgent;