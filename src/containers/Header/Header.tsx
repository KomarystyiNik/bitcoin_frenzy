import React from 'react';
import { useSelector } from 'react-redux';

import { publicImagesURL } from '../../config';
import { selectWallet } from '../../redux/selectors';

import './Header.scss';

const BtcLogo = `${publicImagesURL}/bitcoin-logo.svg`;

const Header: React.FC = () => {
  const { bitcoinPrice, dollars, bitcoins }  = useSelector(selectWallet);
  const formatedBitcoinPrice = new Intl.NumberFormat('en-US').format(bitcoinPrice)
  const formatedDollars = new Intl.NumberFormat('en-US').format(dollars)

  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={BtcLogo} alt="logo" />
        <span>BITCOIN FRENZY</span>
      </div>
      <div>
        <span>1 BITCOIN = {formatedBitcoinPrice} $</span>
      </div>
      <div className="wallet">
        <span>{formatedDollars} $</span>
        <span>{bitcoins} BITCOINS</span>
      </div>
    </div>
  );
};

export default Header;
export { Header };
