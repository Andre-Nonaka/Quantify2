//import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Map from './Map';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'   

import { useTranslation } from "react-i18next";
import i18n from './i18n';
import LocaleContext from './LocaleContext'
import { useState, useRef } from "react";
import { NavLink } from 'react-router-dom'
import video from "./homePageVideo2.mp4"

library.add(fas)

function App() {

  const { t } = useTranslation();
  const [locale, setLocale] = useState(i18n.language);

  i18n.on('languageChanged', (lng) => setLocale(i18n.language));

  const [isShown, setIsShown] = useState(true);

  const handleClick = event => {
    setIsShown(current => !current);
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
    <div id="belowNav">
      <LocaleContext.Provider value={{locale, setLocale}}>
        <Navbar/>
        <div className="dark-img" style={{zIndex: "-1"}}>
            <video id="seImhoug" autoPlay muted loop style={{zIndex: "-1"}}>
              <source src={video} type="video/mp4"/>
            </video>
            <div className="top-left">
              <h1>{t('titleHome')}</h1>
              <p>{t('belowHome')}<br/>{t('belowHomeSecondPart')}</p>
            </div>
        </div>
        <div id="bringTop" style={{display: isShown ? 'block' : 'none'}}>
          <button id="rentBtn" style={{backgroundColor:"#696969", color: "white"}}>{t('buttonRent')}</button>
          <button id="buyBtn" onClick={handleClick}>{t('buyButton')}</button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div id="inputSearch">
            <form>
              <input type="text" aria-label="location" placeholder={t('locationTag')}/>
              <input type="text" aria-label="location" placeholder={t('propertyTag')}/>
              <input type="text" aria-label="location" placeholder={t('propertySizeTag')}/>
              <input type="text" aria-label="location" placeholder={t('PropertyPriceTag')}/>
              <input type="submit" id="submitBtn" aria-label="Submit Button" value={t('searchButton')}/>
            </form>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p id="optionsTag" style={{float: "left", color: "white"}}>{t('searchOptions')}</p><NavLink to="/Search/Advanced"><button id="advancedSearch" style={{float: "left", marginTop: "1.3%"}}>{t('advancedSearch')}</button></NavLink>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <button id="btnIcon" style={{float: "left"}}><FontAwesomeIcon icon="fa-solid fa-angles-down" /></button><p id="optionsTag" style={{float: "left", color: "white", marginLeft: "0.5%"}}>{t('scrollDiscover')}</p>
        </div>
        <div id="bringTop" style={{display: isShown ? 'none' : 'block'}}>
          <button id="rentBtn" onClick={handleClick}>{t('buttonRent')}</button>
          <button id="buyBtn" style={{backgroundColor:"#696969", color: "white"}}>{t('buyButton')}</button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div id="inputSearch">
            <form>
              <input type="text" aria-label="location" placeholder={t('locationTag')}/>
              <input type="text" aria-label="location" placeholder={t('propertyTag')}/>
              <input type="text" aria-label="location" placeholder={t('propertySizeTag')}/>
              <input type="text" aria-label="location" placeholder={t('PropertyPriceTag')}/>
              <input type="submit" id="submitBtn" aria-label="Submit Button" value={t('searchButton')}/>
            </form>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p id="optionsTag" style={{float: "left", color: "white"}}>{t('searchOptions')}</p><NavLink to="/Search/Advanced"><button id="advancedSearch" style={{float: "left", marginTop: "1.3%"}}>{t('advancedSearch')}</button></NavLink>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <button id="btnIcon" style={{float: "left"}}><FontAwesomeIcon icon="fa-solid fa-angles-down" /></button><p id="optionsTag" style={{float: "left", color: "white", marginLeft: "0.5%"}}>{t('scrollDiscover')}</p>
        </div>
        <div className="scrolltop" onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }} style={{display: visible ? 'inline' : 'none'}}>
          <FontAwesomeIcon icon="fa-solid fa-angles-up" />
        </div>
        <Map/>
        <Footer/>
      </LocaleContext.Provider>
    </div>
  );
}

export default App;
