import { ROUTE_PATHS, ROUTE_TITLES } from '../../constants/routes';

export interface IMenu {
  title: string;
  path: string;
}

export const menuItems: IMenu[] = [
  {title: ROUTE_TITLES.wallet, path: ROUTE_PATHS.wallet},
  {title: ROUTE_TITLES.buy, path: ROUTE_PATHS.buy},
  {title: ROUTE_TITLES.sell, path: ROUTE_PATHS.sell},
  {title: ROUTE_TITLES.bitcoin, path: ROUTE_PATHS.bitcoin},
]
