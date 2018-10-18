import React, { Component } from 'react';
import "./index.less"

export default class PicComment extends Component{
    render(){
        return (
            <div className="picComment">
                <div className="title">
                    评论
                </div>
                <div className="con">
                    暂无评论哦
                </div>
            </div>
        )
    }
}