import React, { useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectBitcoinPrice } from '../../redux/selectors';
import { actions } from '../../redux/actions';


const SellBTC: React.FC = () => {

  const dispatch = useDispatch();
  const bitcoinPrice = useSelector(selectBitcoinPrice);
  const formatedBitcoinPrice = new Intl.NumberFormat('en-US').format(bitcoinPrice)
  const mainMessage = (bitcoinPrice >= 10000) 
    ? 'Prices are high, sell now!'
    : 'Prices are low, are you sure you want to sell?';

  const onBitcoinBuy = useCallback(() => {
    dispatch(actions.btcSell());
  }, []);

  return (
    <div className="page-content" >
      <span>Bitcoin price is {formatedBitcoinPrice}</span>
      <span>{mainMessage}</span>
      <button onClick={onBitcoinBuy}>Sell 1 Bitcoin</button>
    </div>
  );
};

export default SellBTC;
export { SellBTC };
