import React, { Component } from 'react';

import "./index.less"

import pic1 from "../../../img/pic6.jpg"
import pic2 from "../../../img/pic7.jpg"
import pic3 from "../../../img/pic8.jpg"
import pic4 from "../../../img/pic9.jpg"
import pic5 from "../../../img/pic10.jpg"

export default class PicRecommend extends Component{
    render(){
        return (
            <div className="picRecommend">
                <div className="title">
                    推荐图片
                </div>
                <div className="pic">
                    <img src={pic1} alt=""/>
                    <img src={pic2} alt=""/>
                    <img src={pic3} alt=""/>
                    <img src={pic4} alt=""/>
                    <img src={pic5} alt=""/>
                </div>
            </div>
        )
    }
}