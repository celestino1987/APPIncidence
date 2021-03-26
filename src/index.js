import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import {store} from './redux/store/store';
import AppRouter from './routes/AppRuter';
import {defineCustomElements} from '@ionic/pwa-elements/loader';


ReactDOM.render(
<Provider store={store}>

  <AppRouter />
</Provider>,

  document.getElementById('root')
);


reportWebVitals();
defineCustomElements(window);
