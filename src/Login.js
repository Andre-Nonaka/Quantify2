//import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {useState} from 'react';
import { useTranslation } from "react-i18next";
import i18n from './i18n';
import LocaleContext from './LocaleContext'

library.add(fas)

function MostPopularAgent() {

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
    <LocaleContext.Provider value={{locale, setLocale}}>
      <div id="belowNav">
        <Navbar/>
        <div className="dark-img" style={{zIndex: "-1"}}>
            <img id="houseImg" src="../login3.jpg" alt="House" style={{zIndex: "-1", height: "100%"}}/>
            <div className="top-left2" style={{minWidth: "100%", marginTop: "11%"}}>
              <h1 style={{textAlign: "center", minWidth: "100%"}}>{t('accountTag')}</h1>
            </div>
        </div>
        <div id="rulesForum" style={{float: "left", minWidth: "46%", height: "430px", background: "white", display: isShown ? 'block' : 'none'}}>
          <h1 id="h1tagRequest" style={{color: "black", fontSize: "50px", padding: "2%", marginBottom: "0.5%"}}>{t('loginTag')}</h1>
          <p id="ptagRequest" style={{color: "black", fontSize: "15px", padding: "2%", marginBottom: "0.5%"}}>{t('loginTagBelow')}</p>
          <form id="loginUser" style={{marginTop: "-4%"}}>
            <p style={{fontWeight: "bold", marginBottom: "0.5%"}}>{t('usernameTag')}*</p>
            <input type="username" id="usernameInput" placeholder={t('usernameDetailsTag')} required></input>
            <br></br>
            <p style={{fontWeight: "bold", marginBottom: "0.5%"}}>{t('passwordTag')}*</p>
            <input type="password" id="passwordInput" placeholder={t('passwordDetailsTag')} required></input>
            <div style={{fontSize: "13px", width: "100%"}}>
              <input type="checkbox" value="lsRememberMe" id="rememberMe" style={{marginLeft: "0%"}}/><label for="rememberMe">{t('rememberMe')}</label>
              <span id="forgotPassword" style={{float: "right"}}>{t('forgotPasswordTag')}</span>
            </div>
            <br></br>
            <input type="submit" value={t('submitButton')}></input>
            <p>{t('notRegistered')} <a id="newAccount" onClick={handleClick}>{t('createAccount')}</a></p>
          </form>
        </div>
        <div id="rulesForum3" style={{float: "left", minWidth: "46%", height: "500px", background: "white", display: isShown ? 'none' : 'block'}}>
          <h1 id="h1tagRequest" style={{color: "black", fontSize: "50px", padding: "2%", marginBottom: "0.5%"}}>{t('registerTag')}</h1>
          <p id="ptagRequest" style={{color: "black", fontSize: "15px", padding: "2%", marginBottom: "0.5%"}}>{t('loginTagBelow')}</p>
          <form id="loginUser" style={{marginTop: "-4%"}}>
            <p style={{fontWeight: "bold", marginBottom: "0.5%"}}>{t('usernameTag')}*</p>
            <input type="username" id="usernameInput" placeholder={t('usernameDetailsTag')} required></input>
            <br></br>
            <p style={{fontWeight: "bold", marginBottom: "0.5%"}}>{t('passwordTag')}*</p>
            <input type="password" id="passwordInput" placeholder={t('passwordDetailsTag')} required></input>
            <br></br>
            <p style={{fontWeight: "bold", marginBottom: "0.5%"}}>{t('reEnterPassword')}*</p>
            <input type="password" id="passwordInput" placeholder={t('passwordDetailsTag')} required></input>
            <br></br>
            <br></br>
            <input type="submit" value={t('submitButton')}></input>
            <p>{t('isRegistered')} <a id="newAccount" onClick={handleClick}>{t('loginToAccount')}.</a></p>
          </form>
        </div>
        <div id="rulesForum" style={{float: "left", minWidth: "46%", height: isShown ? '430px' : '500px', background: "white"}}>
          <img src="../patternCool.jpg" style={{height: isShown ? '430px' : '500px', background: "white", width: "100%"}}></img>
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