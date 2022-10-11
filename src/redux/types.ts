export interface Action<T = {}> {
  type: string;
  payload?: T;
}

export interface IHistory {
  date: Date | string | number;
  action: string;
}

export interface IState {
  dollars: number;
  bitcoins: number;
  bitcoinPrice: number;
  history: IHistory[];
}