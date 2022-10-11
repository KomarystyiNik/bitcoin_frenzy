import { Action } from './types';

const TYPES = {
  DEPOSIT: 'deposit',
  WITHDRAWAL: 'withdrawal',
  BTC_PURCHASE: 'btc-purchase',
  BTC_SELL: 'btc-sell',
  BTC_PRICE_INCREASE: 'btc-price-increase',
  BTC_PRICE_DECREASE: 'btc-price-decrease',
};

export const actions = {
  ...TYPES,
  deposit: (): Action => ({
    type: TYPES.DEPOSIT,
  }),
  withdrawal: (): Action => ({
    type: TYPES.WITHDRAWAL,
  }),
  btcPurchase: (): Action => ({
    type: TYPES.BTC_PURCHASE,
  }),
  btcSell: (): Action => ({
    type: TYPES.BTC_SELL,
  }),
  btcPriceIncrease: (): Action => ({
    type: TYPES.BTC_PRICE_INCREASE,
  }),
  btcPriceDecrease: (): Action => ({
    type: TYPES.BTC_PRICE_DECREASE,
  }),

};
