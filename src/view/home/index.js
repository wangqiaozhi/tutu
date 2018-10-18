import React, { Component } from 'react';
import Firstscreen from "./firstscreen"
import Secondscreen from "./secondscreen"
import Thirdscreen from "./thirdscreen"

class Home extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div id="home" >
                <Firstscreen/>
                <Secondscreen/>
                <Thirdscreen />
            </div>
        );
    }
}

export default Home;