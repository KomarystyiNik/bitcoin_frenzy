import React, { useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectBitcoinPrice } from '../../redux/selectors';
import { actions } from '../../redux/actions';


const PriceBTC: React.FC = () => {
  const dispatch = useDispatch();
  const bitcoinPrice = useSelector(selectBitcoinPrice);

  const formatedBitcoinPrice = new Intl.NumberFormat('en-US').format(bitcoinPrice)

  const onIncreaseBitcoinPrice = useCallback(() => {
    dispatch(actions.btcPriceIncrease());
  }, []);

  const onDecreaseBitcoinPrice = useCallback(() => {
    dispatch(actions.btcPriceDecrease());
  }, []);

  return (
    <div className="page-content" >
      <span>Bitcoin price is {formatedBitcoinPrice} $</span>
      <div>
        <button onClick={onIncreaseBitcoinPrice}>Increase Bitcoin Price(+1,000)</button>
        <button onClick={onDecreaseBitcoinPrice}>Decrease Bitcoin Price(+1,000)</button>
      </div>
    </div>
  );
};

export default PriceBTC;
export { PriceBTC };
