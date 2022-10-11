import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter } from "react-router-dom";
import { store } from './redux/store';
import { Pages } from './pages';


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
