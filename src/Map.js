import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'   
import MapContainer from './googleMap';
import { NavLink } from 'react-router-dom'

import { useTranslation } from "react-i18next";
import i18n from './i18n';
import LocaleContext from './LocaleContext';
import { useEffect, useState } from "react";

library.add(fas)

function Map() {

    const { t } = useTranslation();
    const [locale, setLocale] = useState(i18n.language);
  
    i18n.on('languageChanged', (lng) => setLocale(i18n.language));

    const [isShown, setIsShown] = useState(true);

    const handleClick = event => {
      setIsShown(current => !current);
    };  

    return (
        <LocaleContext.Provider value={{locale, setLocale}}>
            <div id="divForMapHomes">
                <div id="mainDiv">
                    <h1 style={{marginTop: "0%"}}>{t('howItWorksTag')}</h1>
                    <div id="howitWorkDiv">
                        <div id="findHouse">
                            <center>
                                <button id="stepOne" style={{float:"right", fontWeight: "bold"}}>1</button>
                                <img src="../findHouse_white.png" width="200" alt="Find House" style={{padding: "4%"}}/>
                                <p>{t('findAHouseTag')}</p>
                            </center>
                        </div>
                        <div className="arrowRight">
                            <img id="arrow1" src="../arrow_white.png" width="100"/>
                        </div>
                        <div id="bidHouse">
                            <center>
                                <button id="stepTwo" style={{float:"right", fontWeight: "bold"}}>2</button>
                                <img src="../bidHouse_white.png" width="200" alt="Find House" style={{padding: "4%"}}/>
                                <p>{t('bidAHouseTag')}</p>
                            </center>
                        </div>
                        <div className="arrowRight">
                            <img id="arrow2" src="../arrow_white.png" width="100"/>
                        </div>
                        <div id="getHouse">
                            <center>
                                <button id="stepThree" style={{float:"right", fontWeight: "bold"}}>3</button>
                                <img src="../hands_white.png" width="200" alt="Find House" style={{padding: "4%"}}/>
                                <p>{t('obtainAHouseTag')}</p>
                            </center>
                        </div>
                    </div>
                    <h1>{t('auctionsTag')}</h1>
                    <div id="filterDiv" style={{display: isShown ? 'block' : 'none'}}>
                        <p id="mainFilter">{t('filterTag')}</p>
                        <p id="p1">{t('firstTagFilter')}</p>
                        <p id="p2">{t('secondTagFilter')}</p>
                        <p id="p3">{t('thirdTagFilter')}</p>
                        <p id="p4">{t('fourthTagFilter')}</p>
                        <div id="bottomDiv1">
                            <button id="saleBtn" style={{color: "white", backgroundColor: "black"}}>{t('forSaleButton')}</button>
                            <button id="soldBtn" onClick={handleClick}>{t('forRentButton')}</button>
                        </div>
                        <div id="bottomDiv2">
                            <select id="classic">
                            <option id="optProvince1">{t('allOption')}</option>
                            <option id="optProvince2">Alberta</option>
                            <option id="optProvince3">British Columbia</option>
                            <option id="optProvince4">Manitoba</option>
                            <option id="optProvince5">New Brunswick</option>
                            <option id="optProvince6">Newfoundland and Labrador</option>
                            <option id="optProvince7">Nova Scotia</option>
                            <option id="optProvince8">Nunavut</option>
                            <option id="optProvince9">Ontario</option>
                            <option id="optProvince10">Prince Edward Island</option>
                            <option id="optProvince11">Quebec</option>
                            <option id="optProvince12">Saskatchewan</option>
                            <option id="optProvince13">Yukon</option>
                            </select>
                        </div>
                        <div id="bottomDiv3">
                            <select id="classic">
                            <option id="opt11">{t('allOption')}</option>
                            <option id="opt12">Cornwall</option>
                            <option id="opt13">Ottawa</option>
                            </select>
                        </div>
                        <div id="bottomDiv4">
                            <select id="classic">
                            <option id="opt11">{t('allOption')}</option>
                            <option id="opt12">{t('landHome')}</option>
                            <option id="opt13">{t('detachedHome')}</option>
                            <option id="opt14">{t('trailerHome')}</option>
                            <option id="opt15">{t('semiDetachedHome')}</option>
                            <option id="opt15">{t('condoHome')}</option>
                            </select>
                        </div>
                    </div>
                    <div id="filterDiv" style={{display: isShown ? 'none' : 'block'}}>
                        <p id="mainFilter">{t('filterTag')}</p>
                        <p id="p1">{t('firstTagFilter')}</p>
                        <p id="p2">{t('secondTagFilter')}</p>
                        <p id="p3">{t('thirdTagFilter')}</p>
                        <p id="p4">{t('fourthTagFilter')}</p>
                        <div id="bottomDiv1">
                            <button id="saleBtn" onClick={handleClick}>{t('forSaleButton')}</button>
                            <button id="soldBtn" style={{color: "white", backgroundColor: "black"}}>{t('forRentButton')}</button>
                        </div>
                        <div id="bottomDiv2">
                            <select id="classic">
                            <option id="optProvince1">{t('allOption')}</option>
                            <option id="optProvince2">Alberta</option>
                            <option id="optProvince3">British Columbia</option>
                            <option id="optProvince4">Manitoba</option>
                            <option id="optProvince5">New Brunswick</option>
                            <option id="optProvince6">Newfoundland and Labrador</option>
                            <option id="optProvince7">Nova Scotia</option>
                            <option id="optProvince8">Nunavut</option>
                            <option id="optProvince9">Ontario</option>
                            <option id="optProvince10">Prince Edward Island</option>
                            <option id="optProvince11">Quebec</option>
                            <option id="optProvince12">Saskatchewan</option>
                            <option id="optProvince13">Yukon</option>
                            </select>
                        </div>
                        <div id="bottomDiv3">
                            <select id="classic">
                            <option id="opt11">{t('allOption')}</option>
                            <option id="opt12">Cornwall</option>
                            <option id="opt13">Ottawa</option>
                            </select>
                        </div>
                        <div id="bottomDiv4">
                            <select id="classic">
                            <option id="opt11">{t('allOption')}</option>
                            <option id="opt12">{t('landHome')}</option>
                            <option id="opt13">{t('detachedHome')}</option>
                            <option id="opt14">{t('trailerHome')}</option>
                            <option id="opt15">{t('semiDetachedHome')}</option>
                            <option id="opt15">{t('condoHome')}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div id="divContainingMap">
                    <h1 id="mainTagHouses">{t('belowFilterTag')}</h1>
                    <div id="mapSection">
                        <div id="mainMapLocation">
                            <div id="map">
                                <MapContainer/>
                            </div>
                        </div>
                        <div id="housesList">
                            <NavLink className="listingHouseStyle" to="/Listing/Information"><div id="house1">
                                <img id="houseImgSelling1" src="https://images.adsttc.com/media/images/5e1d/02c3/3312/fd58/9c00/06e9/large_jpg/NewHouse_SA_Photo_01.jpg?1578959519" alt="House 1"/>
                                <button id="BuyNow"><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> {t('buyNowButton')}</button>
                                <button id="BiddingIsNowLive"><FontAwesomeIcon icon="fa-solid fa-circle" /> {t('biddingStatus')}</button>
                                <div id="descriptionHouse">
                                    <p><span id="buyNowPrice">{t('buyNowButton')}</span></p>
                                    <p id="mainPrice">$929,900</p>
                                    <span id="availability">{t('availableFor')} <FontAwesomeIcon icon="fa-solid fa-hourglass" /> 4 {t('timeAvailableDays')} : 21 {t('timeAvailableHours')} : 12 {t('timeAvailableMinutes')}</span>
                                    <p id="addressHouse">128C {t('eightRue')}</p>
                                    <p id="locationHouse">Cornwall, Ontario</p>
                                    <p id="houseDetails">{t('houseDetailsDescription')}</p>
                                    <button id="numBeds"><FontAwesomeIcon icon="fa-solid fa-bed" /> 4 {t('numberBeds')}</button><button id="numBaths"><FontAwesomeIcon icon="fa-solid fa-bath" /> 4 {t('numberBaths')}</button><button id="sizeHouse"><FontAwesomeIcon icon="fa-solid fa-house" /> 2175 m²</button><button id="garageOpen"><FontAwesomeIcon icon="fa-solid fa-warehouse" /> 4 {t('numberGarages')}</button>
                                </div>
                            </div></NavLink>
                            <NavLink className="listingHouseStyle" to="/Listing/Information"><div id="house2">
                                <img id="houseImgSelling2" src="https://images.adsttc.com/media/images/5e1d/02c3/3312/fd58/9c00/06e9/large_jpg/NewHouse_SA_Photo_01.jpg?1578959519" alt="House 2"/>
                                <button id="BuyNow2"><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> {t('buyNowButton')}</button>
                                <button id="BiddingIsNowLive2"><FontAwesomeIcon icon="fa-solid fa-circle" /> {t('biddingStatus')}</button>
                                <div id="descriptionHouse2">
                                    <p><span id="buyNowPrice2">{t('buyNowButton')}</span></p>
                                    <p id="mainPrice2">$929,900</p>
                                    <span id="availability2">{t('availableFor')} <FontAwesomeIcon icon="fa-solid fa-hourglass" /> 4 {t('timeAvailableDays')} : 21 {t('timeAvailableHours')} : 12 {t('timeAvailableMinutes')}</span>
                                    <p id="addressHouse2">134 {t('eightRue')}</p>
                                    <p id="locationHouse2">Cornwall, Ontario</p>
                                    <p id="houseDetails2">{t('houseDetailsDescription')}</p>
                                    <button id="numBeds2"><FontAwesomeIcon icon="fa-solid fa-bed" /> 4 {t('numberBeds')}</button><button id="numBaths2"><FontAwesomeIcon icon="fa-solid fa-bath" /> 4 {t('numberBaths')}</button><button id="sizeHouse2"><FontAwesomeIcon icon="fa-solid fa-house" /> 2175 m²</button><button id="garageOpen2"><FontAwesomeIcon icon="fa-solid fa-warehouse" /> 4 {t('numberGarages')}</button>
                                </div>
                            </div></NavLink>
                            <NavLink className="listingHouseStyle" to="/Listing/Information"><div id="house3">
                                <img id="houseImgSelling3" src="https://images.adsttc.com/media/images/5e1d/02c3/3312/fd58/9c00/06e9/large_jpg/NewHouse_SA_Photo_01.jpg?1578959519" alt="House 3"/>
                                <button id="BuyNow3"><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> {t('buyNowButton')}</button>
                                <button id="BiddingIsNowLive3"><FontAwesomeIcon icon="fa-solid fa-circle" /> {t('biddingStatus')}</button>
                                <div id="descriptionHouse3">
                                    <p><span id="buyNowPrice3">{t('buyNowButton')}</span></p>
                                    <p id="mainPrice3">$929,900</p>
                                    <span id="availability3">{t('availableFor')} <FontAwesomeIcon icon="fa-solid fa-hourglass" /> 4 {t('timeAvailableDays')} : 21 {t('timeAvailableHours')} : 12 {t('timeAvailableMinutes')}</span>
                                    <p id="addressHouse3">54 {t('ameliaRue')}</p>
                                    <p id="locationHouse3">Cornwall, Ontario</p>
                                    <p id="houseDetails3">{t('houseDetailsDescription')}</p>
                                    <button id="numBeds3"><FontAwesomeIcon icon="fa-solid fa-bed" /> 4 {t('numberBeds')}</button><button id="numBaths3"><FontAwesomeIcon icon="fa-solid fa-bath" /> 4 {t('numberBaths')}</button><button id="sizeHouse3"><FontAwesomeIcon icon="fa-solid fa-house" /> 2175 m²</button><button id="garageOpen3"><FontAwesomeIcon icon="fa-solid fa-warehouse" /> 4 {t('numberGarages')}</button>
                                </div>
                            </div></NavLink>
                            <NavLink className="listingHouseStyle" to="/Listing/Information"><div id="house4">
                                <img id="houseImgSelling4" src="https://images.adsttc.com/media/images/5e1d/02c3/3312/fd58/9c00/06e9/large_jpg/NewHouse_SA_Photo_01.jpg?1578959519" alt="House 4"/>
                                <button id="BuyNow4"><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> {t('buyNowButton')}</button>
                                <button id="BiddingIsNowLive4"><FontAwesomeIcon icon="fa-solid fa-circle" /> {t('biddingStatus')}</button>
                                <div id="descriptionHouse4">
                                    <p><span id="buyNowPrice4">{t('buyNowButton')}</span></p>
                                    <p id="mainPrice4">$929,900</p>
                                    <span id="availability4">{t('availableFor')} <FontAwesomeIcon icon="fa-solid fa-hourglass" /> 4 {t('timeAvailableDays')} : 21 {t('timeAvailableHours')} : 12 {t('timeAvailableMinutes')}</span>
                                    <p id="addressHouse4">54 {t('ameliaRue')}</p>
                                    <p id="locationHouse4">Cornwall, Ontario</p>
                                    <p id="houseDetails4">{t('houseDetailsDescription')}</p>
                                    <button id="numBeds4"><FontAwesomeIcon icon="fa-solid fa-bed" /> 4 {t('numberBeds')}</button><button id="numBaths4"><FontAwesomeIcon icon="fa-solid fa-bath" /> 4 {t('numberBaths')}</button><button id="sizeHouse4"><FontAwesomeIcon icon="fa-solid fa-house" /> 2175 m²</button><button id="garageOpen4"><FontAwesomeIcon icon="fa-solid fa-warehouse" /> 4 {t('numberGarages')}</button>
                                </div>
                            </div></NavLink>
                            <NavLink className="listingHouseStyle" to="/Listing/Information"><div id="house5">
                                <img id="houseImgSelling5" src="https://images.adsttc.com/media/images/5e1d/02c3/3312/fd58/9c00/06e9/large_jpg/NewHouse_SA_Photo_01.jpg?1578959519" alt="House 5"/>
                                <button id="BuyNow5"><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> {t('buyNowButton')}</button>
                                <button id="BiddingIsNowLive5"><FontAwesomeIcon icon="fa-solid fa-circle" /> {t('biddingStatus')}</button>
                                <div id="descriptionHouse5">
                                    <p><span id="buyNowPrice5">{t('buyNowButton')}</span></p>
                                    <p id="mainPrice5">$929,900</p>
                                    <span id="availability5">{t('availableFor')} <FontAwesomeIcon icon="fa-solid fa-hourglass" /> 4 {t('timeAvailableDays')} : 21 {t('timeAvailableHours')} : 12 {t('timeAvailableMinutes')}</span>
                                    <p id="addressHouse5">54 {t('ameliaRue')}</p>
                                    <p id="locationHouse5">Cornwall, Ontario</p>
                                    <p id="houseDetails5">{t('houseDetailsDescription')}</p>
                                    <button id="numBeds5"><FontAwesomeIcon icon="fa-solid fa-bed" /> 4 {t('numberBeds')}</button><button id="numBaths5"><FontAwesomeIcon icon="fa-solid fa-bath" /> 4 {t('numberBaths')}</button><button id="sizeHouse5"><FontAwesomeIcon icon="fa-solid fa-house" /> 2175 m²</button><button id="garageOpen5"><FontAwesomeIcon icon="fa-solid fa-warehouse" /> 4 {t('numberGarages')}</button>
                                </div>
                            </div></NavLink>
                            <NavLink className="listingHouseStyle" to="/Listing/Information"><div id="house6">
                                <img id="houseImgSelling6" src="https://images.adsttc.com/media/images/5e1d/02c3/3312/fd58/9c00/06e9/large_jpg/NewHouse_SA_Photo_01.jpg?1578959519" alt="House 6"/>
                                <button id="BuyNow6"><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> {t('buyNowButton')}</button>
                                <button id="BiddingIsNowLive6"><FontAwesomeIcon icon="fa-solid fa-circle" /> {t('biddingStatus')}</button>
                                <div id="descriptionHouse6">
                                    <p><span id="buyNowPrice6">{t('buyNowButton')}</span></p>
                                    <p id="mainPrice6">$929,900</p>
                                    <span id="availability6">{t('availableFor')} <FontAwesomeIcon icon="fa-solid fa-hourglass" /> 4 {t('timeAvailableDays')} : 21 {t('timeAvailableHours')} : 12 {t('timeAvailableMinutes')}</span>
                                    <p id="addressHouse6">54 {t('ameliaRue')}</p>
                                    <p id="locationHouse6">Cornwall, Ontario</p>
                                    <p id="houseDetails6">{t('houseDetailsDescription')}</p>
                                    <button id="numBeds6"><FontAwesomeIcon icon="fa-solid fa-bed" /> 4 {t('numberBeds')}</button><button id="numBaths6"><FontAwesomeIcon icon="fa-solid fa-bath" /> 4 {t('numberBaths')}</button><button id="sizeHouse6"><FontAwesomeIcon icon="fa-solid fa-house" /> 2175 m²</button><button id="garageOpen6"><FontAwesomeIcon icon="fa-solid fa-warehouse" /> 4 {t('numberGarages')}</button>
                                </div>
                            </div></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </LocaleContext.Provider>
    )
}

export default Map;
