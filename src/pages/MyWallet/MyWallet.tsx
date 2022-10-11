import React, { useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectBitcoins } from '../../redux/selectors';
import { actions } from '../../redux/actions';


const MyWallet: React.FC = () => {
  const dispatch = useDispatch();
  const bitcoins = useSelector(selectBitcoins);

  const onDeposit = useCallback(() => {
    dispatch(actions.deposit());
  }, []);

  const onWithdraw = useCallback(() => {
    dispatch(actions.withdrawal());
  }, []);

  return (
    <div className="page-content" >
      <span>Your Bitcoin wallet</span>
      <span>Your now own {bitcoins} bitcoins</span>
      <button onClick={onDeposit}>Deposit 100$</button>
      <button onClick={onWithdraw}>Withdraw 100$</button>
    </div>
  );
};

export default MyWallet;
export { MyWallet };
