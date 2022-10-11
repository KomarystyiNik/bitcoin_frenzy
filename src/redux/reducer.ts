import { actions } from './actions';
import { IState, Action } from './types';

const initState: IState = {
  dollars: 200,
  bitcoins: 0,
  bitcoinPrice: 1000,
  history: [],
};

// interface IHistory 
const historyAction = {
  [actions.DEPOSIT]: '100$ Deposit',
  [actions.WITHDRAWAL]: '100$ Withdrawal',
  [actions.BTC_PURCHASE]: 'Purchased 1 Bitcoin',
  [actions.BTC_SELL]: 'Sold 1 Bitcoin',
  [actions.BTC_PRICE_INCREASE]: 'Increased Bitcoin price by 1,000$',
  [actions.BTC_PRICE_DECREASE]: 'Decreased Bitcoin price by 1,000$',
}

export default function appReducer(state = initState, action: Action) {
  switch (action.type) {
    case actions.DEPOSIT: {
      return {
        ...state,
        dollars: state.dollars + 100,
        history: [{ date: "10.1.2011", action: historyAction[action.type] }, ...state.history ],
      };
    }
    case actions.WITHDRAWAL: {
      return {
        ...state,
        dollars: (state.dollars >= 200) ? state.dollars - 100 : state.dollars,
        history: [{ date: new Date(), action: historyAction[action.type] }, ...state.history ],
      };
    }
    case actions.BTC_PURCHASE: {
      if ((state.dollars / state.bitcoinPrice) > 1) {
        return {
          ...state,
          dollars: state.dollars - state.bitcoinPrice,
          bitcoins: state.bitcoins + 1,
          history: [{ date: new Date(), action: historyAction[action.type] }, ...state.history ],
        };
      } else {
        return state;
      }
    }
    case actions.BTC_SELL: {
      if (state.bitcoins >= 1) {
        return {
          ...state,
          dollars: state.dollars + state.bitcoinPrice,
          bitcoins: state.bitcoins - 1,
          history: [{ date: new Date(), action: historyAction[action.type] }, ...state.history ],
        };
      } else {
        return state;
      }
    }
    case actions.BTC_PRICE_INCREASE: {
      return {
        ...state,
        bitcoinPrice: state.bitcoinPrice + 1000,
        history: [{ date: new Date(), action: historyAction[action.type] }, ...state.history ],
      }
    }
    case actions.BTC_PRICE_DECREASE: {
      if (state.bitcoinPrice <= 1000) {
        return state;
      } else {
        return {
          ...state,
          bitcoinPrice: state.bitcoinPrice - 1000,
          history: [{ date: new Date(), action: historyAction[action.type] }, ...state.history ],
        }
      }
    }
    default: {
      return state;
    }
  }
}
