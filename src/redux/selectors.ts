import { RootState } from './store';

export const selectWallet = ({ wallet }: RootState) => wallet;
export const selectBitcoins = ({ wallet }: RootState) => wallet.bitcoins;
export const selectDollars = ({ wallet }: RootState) => wallet.dollars;
export const selectBitcoinPrice = ({ wallet }: RootState) => wallet.bitcoinPrice;
export const selectHistory = ({ wallet }: RootState) => wallet.history;