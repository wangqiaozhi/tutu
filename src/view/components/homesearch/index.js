import React, { Component } from 'react';
import Search from "../search"
import "./index.less"

export default class HomeSearch extends Component{

    state={
        allNum: 10000 //请求所有的图片数
    };

    render(){
        return(
            <div className="searchPart">
                <ul className="option clear">
                    <li>
                        <i className="active"></i>
                        <span>全部</span>
                    </li>
                    <li>
                        <i></i>
                        <span>收费</span>
                    </li>
                    <li>
                        <i></i>
                        <span>免费</span>
                    </li>
                </ul>

                <div className="search">
                    <Search/>
                </div>
                <div className="des">
                    共 <span>{this.state.allNum}</span> 张图片供您挑选，欢迎搜索
                </div>
            </div>
        )

    }
}