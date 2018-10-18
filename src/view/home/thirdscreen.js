import React, { Component } from 'react';

import "./thirdscreen.less"

import pic1 from  "../../img/pic1.jpg"
import pic2 from  "../../img/pic2.jpg"
import pic3 from  "../../img/pic3.jpg"
import pic4 from  "../../img/pic4.jpg"
import pic5 from  "../../img/pic5.jpg"
import pic6 from  "../../img/pic6.jpg"

let data= [pic1,pic2,pic3,pic4,pic5,pic6];

export default class Thirdscreen extends Component{
    constructor(props){
        super(props);
        this.thirdScreen = React.createRef();
    }
    componentDidMount(){
        let thirdScreen = this.thirdScreen.current;
        thirdScreen.style.height = document.body.clientHeight + "px";

    }
    render(){
        return (
            <div className="thirdScreen" ref={this.thirdScreen}>
                <div className="info">
                    <p className="title">
                        热门分组
                    </p>
                    <p className="des">
                        推荐最新最热门的6个图片分组
                    </p>
                </div>
                <ul className="main">
                    {
                        data.map((item,index)=>{
                            return (
                                <li key={Date.now()+index}>
                                    <img src={item} alt=""/>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        )
    }
}