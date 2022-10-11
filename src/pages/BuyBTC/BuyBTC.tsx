import React, { useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectBitcoinPrice } from '../../redux/selectors';
import { actions } from '../../redux/actions';


const BuyBTC: React.FC = () => {

  const dispatch = useDispatch();
  const bitcoinPrice = useSelector(selectBitcoinPrice);
  const formatedBitcoinPrice = new Intl.NumberFormat('en-US').format(bitcoinPrice)
  const mainMessage = (bitcoinPrice >= 10000) 
    ? 'Prices are high, are you sure that you want to buy?'
    : 'Prices are low, buy more!';

  const onBitcoinBy = useCallback(() => {
    dispatch(actions.btcPurchase());
  }, []);

  return (
    <div className="page-content" >
      <span>Bitcoin price is {formatedBitcoinPrice}</span>
      <span>{mainMessage}</span>
      <button onClick={onBitcoinBy}>Buy 1 Bitcoin</button>
    </div>
  );
};

export default BuyBTC;
export { BuyBTC };
