import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ByRequest from './ByRequest'
import MostPopularListing from './MostPopularListing'
import NewListing from './NewListing'
import Discussions from './Discussions'
import Login from './Login'
import AddListing from './AddListing'
import Notification from './Notification'
import Listing from './Listing'
import ForumTopics from "./ForumTopic"
import AdvancedSearch from "./AdvancedSearch"
import Privacy from "./Privacy"
import Terms from "./Terms"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Agents/Request" element={<ByRequest />} />
        <Route path="/Pages/Discussions" element={<Discussions />} />
        <Route path="/Listing/Popular" element={<MostPopularListing />} />
        <Route path="/Listing/New" element={<NewListing />} />
        <Route path="/User/Login" element={<Login />} />
        <Route path="/Add/Listing" element={<AddListing />} />
        <Route path="/User/Notification" element={<Notification />} />
        <Route path="/Listing/Information" element={<Listing />} />
        <Route path="/Discussions/Topic" element={<ForumTopics />} />
        <Route path="/Search/Advanced" element={<AdvancedSearch />} />
        <Route path="/Documents/Privacy" element={<Privacy />} />
        <Route path="/Documents/Terms" element={<Terms />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
