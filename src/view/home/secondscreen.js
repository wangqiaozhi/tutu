import React, { Component } from 'react';
import TagPic from "../components/tagpic"
import "./secondscreen.less"

export default class Secondscreen extends Component{
    constructor(props){
        super(props);
        this.secondScreen = React.createRef();
    }
    componentDidMount(){
        let secondScreen = this.secondScreen.current;
        secondScreen.style.height= document.body.clientHeight+"px";
    }
    render(){
        return (
            <div className="secondScreen" ref={this.secondScreen}>
                <div className="info">
                    <p className="title">
                        精品推荐
                    </p>
                    <p className="des">
                        每周精选上传最佳10张图片
                    </p>
                    <TagPic/>
                </div>
            </div>
        )
    }
}