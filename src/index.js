import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';



import "./index.css"

// console.log(process.env.NODE_ENV)

//请求mock里面的数据
// if('development' === process.env.NODE_ENV) {
//      require('./mock/')
// }

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
