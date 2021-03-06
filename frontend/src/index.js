import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import DateFnsUtils from '@date-io/date-fns'
import {MuiPickersUtilsProvider} from '@material-ui/pickers'
import 'date-fns'

ReactDOM.render(
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Auth0Provider
      domain="vtb-more-tech.eu.auth0.com"
      clientId="VBoxPcxcvez3IQ6vGx0Xb32SMjmI1RVD"
      redirectUri={window.location.origin}
    >
    <App />
    </Auth0Provider>
  </MuiPickersUtilsProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
