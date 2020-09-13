import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-widgets/dist/css/react-widgets.css';
// import DropdownList from 'react-widgets/lib/DropdownList';
// import App from './App';
import HelloWorld from './HelloWorld';
//import { NumberPicker } from 'react-widgets';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <HelloWorld />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
