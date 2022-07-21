//import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'    
import { NavLink } from 'react-router-dom'

import { useTranslation } from "react-i18next";
import i18n from './i18n';
import LocaleContext from './LocaleContext'
import { useState } from "react";

library.add(fas)

function Discussions() {
  
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
              <h1 style={{textAlign: "center", minWidth: "100%"}}>Discussions</h1>
            </div>
        </div>
        <h1 id="h1tagRequest" style={{color: "black", fontSize: "30px", padding: "2%", marginBottom: "4%"}}>{t('discussionsBelowTag')}</h1>
        <div id="rulesForum" style={{float: "left", minWidth: "96%", height: "100%", paddingBottom: "2.5%", background: "white"}}>
          <table>
            <tr>
              <th style={{background: "white", color: "black"}}>{t('discussionsTagOne')}</th>
              <th style={{background: "white", color: "black"}}>{t('discussionsTagTwo')}</th>
              <th style={{background: "white", color: "black"}}>{t('discussionsTagThree')}</th>
            </tr>
            <tr>
              <td><NavLink className="changeNavLinkStyle" to="/Discussions/Topic">{t('firstMessage')}</NavLink></td>
              <td>3</td>
              <td>2022/07/05</td>
            </tr>
            <tr>
              <td><NavLink className="changeNavLinkStyle" to="/Discussions/Topic">{t('secondMessage')}</NavLink></td>
              <td>2</td>
              <td>2022/07/03</td>
            </tr>
            <tr>
              <td><NavLink className="changeNavLinkStyle" to="/Discussions/Topic">{t('thirdMessage')}</NavLink></td>
              <td>4</td>
              <td>2022/06/05</td>
            </tr>
            <tr>
              <td><NavLink className="changeNavLinkStyle" to="/Discussions/Topic">{t('fourthMessage')}</NavLink></td>
              <td>2</td>
              <td>2022/07/01</td>
            </tr>
            <tr>
              <td><NavLink className="changeNavLinkStyle" to="/Discussions/Topic">{t('fifthMessage')}</NavLink></td>
              <td>4</td>
              <td>2022/06/05</td>
            </tr>
            <tr>
              <td><NavLink className="changeNavLinkStyle" to="/Discussions/Topic">{t('sixthMessage')}</NavLink></td>
              <td>2</td>
              <td>2022/07/03</td>
            </tr>
          </table>
        </div>
        <div className="scrolltop" onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }} style={{display: visible ? 'inline' : 'none'}}>
          <FontAwesomeIcon icon="fa-solid fa-angles-up" />
        </div>
        <Footer/>
      </div>
    </LocaleContext.Provider>
  );
}

export default Discussions;
