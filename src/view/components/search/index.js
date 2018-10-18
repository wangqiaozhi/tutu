import React, { Component } from 'react';
import "./index.less"

export default class Search extends Component{
    render(){
        return(
            <div>
                <input type="text" placeholder="搜索你想要的图片" className="inp"/>
                <input type="button" className="searchButton"/>
            </div>
        )
    }
}