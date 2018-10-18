import React, { Component } from 'react'
import Header from "./components/header/header"

import Routes from "./view/routes"

import './App.less';

import axios from 'axios'

class App extends Component{


    render() {
        return (
            <React.Fragment>
                <Header/>
                <Routes/>
                <ul className="list">

                </ul>
            </React.Fragment>
        );
    }

}

export default App;
