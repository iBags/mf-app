import React from 'react';
import MarketingApp from './components/MarketingApp';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <h1 style={{ textAlign: 'center' }}>This is my awesome Container</h1>
        <p>Update a message for trigger github actions :D</p>
        <hr />
        <MarketingApp />
      </div>
    </BrowserRouter>
  )
}