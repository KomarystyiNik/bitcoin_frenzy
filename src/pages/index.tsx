import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ROUTE_PATHS } from '../constants/routes';
import { Header } from '../containers/Header';
import { NavBar } from '../containers/NavBar';
import { HistoryBar } from '../containers/HistoryBar';
import { MyWallet } from 'pages/MyWallet';
import { BuyBTC } from 'pages/BuyBTC';
import { SellBTC } from 'pages/SellBTC';
import { PriceBTC } from 'pages/PriceBTC';

import './index.scss';

const Pages = () => {

  return (
    <div className="page-container">
      <Header />
      <div className="main">
        <NavBar />
        <Routes>
          <Route path={ROUTE_PATHS.wallet} element={<MyWallet />}/>
          <Route path={ROUTE_PATHS.buy} element={<BuyBTC />}/>
          <Route path={ROUTE_PATHS.sell} element={<SellBTC />}/>
          <Route path={ROUTE_PATHS.bitcoin} element={<PriceBTC />}/>
          <Route path="*" element={<MyWallet />} />
        </Routes>
        <HistoryBar />
      </div>
    </div>
  )
};

export default Pages;
export { Pages };
