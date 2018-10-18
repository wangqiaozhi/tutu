import React, { Component } from 'react';
import "./index.less"
import {NavLink,Link} from "react-router-dom"
import UseRoutes from "../userouters"
import {navData} from "../../router/config";

import {userData} from "../../router/userconfig";

export default class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            num: 0
        };
    }

    componentDidMount(){
        let {userid} = this.props.match.params;
    }

    render(){
        let {num} = this.state;
        return(
            <div className="user">
                <div className="user-con">
                    <div className="useInfo clear">
                        <div className="useInfo-left fl">
                            <div className="use-photo fl">
                                <i></i>
                            </div>
                            <div className="useInfo-self">
                                <p className="title">小小</p>
                                <p>爱生活 爱摄影爱生活 爱摄影</p>
                            </div>
                        </div>
                        <div className="useInfo-middle fl">
                            <p>上传图片数：22</p>
                            <p>已购买图片数：22</p>
                            <p>粉丝人数：22</p>
                        </div>
                        <div className="useInfo-right fr">
                            <button>
                                我要上传
                            </button>
                        </div>
                    </div>
                    <div className="userInfo-main clear">
                        <div className="userInfo-list-con fl">
                            <ul className="userInfo-list">
                                {/*<li><a>浏览记录</a></li>*/}
                                {/*<li><a>我的购物车</a></li>*/}
                                {/*<li><a>我的消息</a></li>*/}
                                {/*<li><a>我上传的图片</a></li>*/}
                                {/*<li><a>我的订单</a></li>*/}
                                {/*<li><a>个人设置</a></li>*/}
                                {/*<li><a>我的评论</a></li>*/}
                                {/*<li><a>我的关注</a></li>*/}

                                {
                                    userData.map((item,index)=>{
                                        return(
                                            <li
                                                className={num ===index?"active-item":''}
                                                key={item.path}
                                            >
                                                <NavLink
                                                    to={item.path}
                                                    exact
                                                    onClick={()=>{
                                                        this.setState({
                                                            num: index
                                                        })
                                                    }}
                                                >
                                                    {item.title}
                                                </NavLink>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <button>
                                退出
                            </button>
                        </div>
                        <div className="userInfo-detail fr">
                            <UseRoutes />
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}